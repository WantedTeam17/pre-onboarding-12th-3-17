import React from "react";
import { TermsType } from "../constants/@type/termsType";

const processKeyboard = (
  target: string,
  focusIdx: number,
  setFocusIdx: React.Dispatch<React.SetStateAction<number>>,
  setValue: React.Dispatch<React.SetStateAction<string>>,
  terms: TermsType[]
) => {
  if (target === "ArrowDown") {
    setFocusIdx((focusIdx + 1) % terms.length);
  }
  if (target === "ArrowUp") {
    setFocusIdx((focusIdx - 1 + terms.length) % terms.length);
  }
  if (target === "Enter") {
    if (focusIdx < 0 || focusIdx >= terms.length) return;

    setValue(terms[focusIdx].sickNm);
  }
};

export default processKeyboard;
