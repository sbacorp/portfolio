"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import { motion } from "framer-motion";
import { links } from "@/constants";
import styles from "./style.module.scss";
function Header() {
  const [active, setActive] = useState(false);

  const pathname = usePathname();
  return (
    <>
      <div className="absolute bg-primary2 top-0 left-0 z-50 lg:h-12 w-full lg:border-b border-solid border-line text-grey">
        <ul
          className={`nav h-56 lg:flex lg:flex-row justify-start items-center lg:h-full w-full ${
            active ? "flex flex-col" : "hidden"
          }`}
        >
          <li className="flex items-center w-full lg:w-64 pl-6 h-14 lg:border-b-0 border-b border-solid border-line">
            <Link href="/">
              <div className={styles.logo}>
                <svg
                  width="27"
                  height="20"
                  viewBox="0 0 33 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.71951 5.71053L1.5 11.6754L7.71951 17.6404M19.4268 1.5L16.5 11.5L13.5732 21.5M25.6463 5.71053L31.5 11.6754L25.6463 17.6404"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className={styles.name}>
                  <p className={styles.dev}>Dev by</p>
                  <p className={styles.bogdan}>Bogdan</p>
                  <p className={styles.shankin}>Shankin</p>
                </div>
              </div>
            </Link>
          </li>
          {links.map((link, i) => {
            const isActive = pathname === link.href;
            return (
              <li
                onClick={() => setActive(false)}
                key={i}
                className={` border-solid  lg:border border-b lg:h-full h-14 w-full lg:w-fit ${
                  isActive
                    ? " lg:border-4 border-b-4 border-solid border-accent1"
                    : " border-b-line lg:border-line"
                }`}
              >
                <Link
                  className="flex items-center px-4 justify-center h-full"
                  href={link.href}
                >
                  {link.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <motion.div
        className="flex lg:hidden absolute top-0 right-1 z-50"
        onClick={() => setActive(!active)}
      >
        {active ? (
          <HiOutlineX className="w-8 h-8 text-grey" />
        ) : (
          <HiMenu className="w-8 h-8 text-grey" />
        )}
      </motion.div>
    </>
  );
}

export default Header;
