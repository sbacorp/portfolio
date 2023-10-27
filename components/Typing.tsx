"use client";
import { TypingEffectProps } from "@/types";
import React, { useEffect, useRef, useState } from "react";

const TypingEffect: React.FC<TypingEffectProps> = ({
  toRotate,
  period = 200,
}) => {
  const elRef = useRef<HTMLDivElement | null>(null);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    let timerId: NodeJS.Timeout | null = null;
    const tick = () => {
      const i = loopNum % toRotate.length;
      const fullTxt = toRotate[i];

      if (isDeleting) {
        setText((prevText) => prevText.slice(0, -1));
      } else {
        setText((prevText) => fullTxt.slice(0, prevText.length + 1));
      }

      let delta = 200 - Math.random() * 100;

      if (isDeleting) {
        delta /= 2;
      }

      if (!isDeleting && text === fullTxt) {
        delta = period;
        setIsDeleting(true);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum((prevLoopNum) => prevLoopNum + 1);
        delta = 3000;
      }

      timerId = setTimeout(() => {
        tick();
      }, delta);
    };
    const elements = elRef.current?.getElementsByClassName("typewrite");
    if (elements) {
      timerId = setTimeout(() => {
        tick();
      }, period);
    }

    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [toRotate, period, loopNum, isDeleting, text]);

  return (
    <div ref={elRef}>
      <p className="text-body">Hi all. I am</p>
      <div className="flex sm:gap-3 flex-wrap">
        <p
          className="text-[46px] md:text-head typewrite"
          data-type={JSON.stringify(toRotate)}
          data-period={period.toString()}
        >
          {text}
          <span className="blink-cursor">|</span>
        </p>
      </div>
    </div>
  );
};

export default TypingEffect;
