import RelatedSearches from "./RelatedSearches";
import Input from "./Input";
import useFocus from "../hooks/useFocus";
import { useState } from "react";
import useDebounce from "../hooks/useDebounce";
import processKeyboard from "../utils/processKeyboard";
import styled from "styled-components";

const SearchBar = () => {
  const [isFocus, handlerFocus] = useFocus();
  const [focusIdx, setFocusIdx] = useState(-1);
  const [query, setQuery] = useState("");

  const { data, isLoading } = useDebounce(query, 500);

  const handlerChange = (target: string) => {
    setQuery(target);
  };

  const handlerPressKey = (target: string) => {
    processKeyboard(target, focusIdx, setFocusIdx, setQuery, data);
  };

  return (
    <SearchContainer>
      <Input
        handlerFocus={handlerFocus}
        handlerChange={handlerChange}
        handlerPressKey={handlerPressKey}
        value={query}
      />
      {isFocus && (
        <RelatedSearches query={query} terms={data} focusIdx={focusIdx} isLoading={isLoading} />
      )}
    </SearchContainer>
  );
};

export default SearchBar;

const SearchContainer = styled.div`
  width: 100%;

  @media (max-width: 600px) {
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
  }
`;
