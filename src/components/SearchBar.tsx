import RelatedSearches from "./RelatedSearches";
import Input from "./Input";
import useFocus from "../hooks/useFocus";
import { useState } from "react";
import useDebounce from "../hooks/useDebounce";
import processKeyboard from "../utils/processKeyboard";
import styled from "styled-components";
import { useRecentSearches } from "../hooks/useRecentSearches";

const SearchBar = () => {
  const [isFocus, handlerFocus] = useFocus();
  const [focusIdx, setFocusIdx] = useState<number>(-1);
  const [query, setQuery] = useState<string>("");
  const { data, isLoading } = useDebounce(query, 500);

  const { recentSearches, addRecentSearch } = useRecentSearches();

  const handlerChange = (target: string) => {
    setQuery(target);
    if (target === "") setFocusIdx(-1);
  };

  const handlerPressKey = (target: string) => {
    processKeyboard(target, focusIdx, setFocusIdx, setQuery, data);
  };

  const handlerClear = () => {
    setQuery("");
  };

  const handleEnter = () => {
    if (query.trim() !== "") {
      addRecentSearch(query);
    }
  };

  return (
    <SearchContainer>
      <Input
        handlerFocus={handlerFocus}
        handlerChange={handlerChange}
        handlerPressKey={handlerPressKey}
        handlerClear={handlerClear}
        value={query}
        handleEnter={handleEnter}
      />
      {/* {isFocus && ( */}
      <RelatedSearches
        query={query}
        terms={data}
        focusIdx={focusIdx}
        isLoading={isLoading}
        recentSearches={recentSearches}
      />
      {/* )} */}
    </SearchContainer>
  );
};

export default SearchBar;

const SearchContainer = styled.div`
  max-width: 490px;
  width: 100%;
  margin: 0 auto;
  z-index: 1000;

  @media (max-width: 600px) {
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
  }
`;
