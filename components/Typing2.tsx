"use client";

import { useEffect, useState } from "react";

interface TypingTextProps {
  text: string;
}

export default function TypingText({ text }: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;

    const typeText = () => {
      setDisplayedText(text.slice(0, index));

      if (index < text.length) {
        index++;
        setTimeout(typeText, 20);
      }
    };

    typeText();
  }, [text]);

  return <p className="typing-text">{displayedText}</p>;
}
