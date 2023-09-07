import React from "react";
import { TermsType } from "../constants/@type/termsType";

const processKeyboard = (
  target: string,
  focusIdx: number,
  setFocusIdx: React.Dispatch<React.SetStateAction<number>>,
  setValue: React.Dispatch<React.SetStateAction<string>>,
  terms: TermsType[]
) => {
  if (terms && target === "ArrowDown") {
    setFocusIdx((focusIdx + 1) % terms.length);
  }
  if (terms && target === "ArrowUp") {
    setFocusIdx((focusIdx - 1 + terms.length) % terms.length);
  }
  if (terms && target === "Enter") {
    if (focusIdx < 0 || focusIdx >= terms.length) return;

    setValue(terms[focusIdx].sickNm);
  }
  if (target === "Escape") {
    setFocusIdx(-1);
  }
};

export default processKeyboard;
