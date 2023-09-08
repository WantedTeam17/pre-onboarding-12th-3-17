import { forwardRef } from "react";
import { styled } from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import HighlightKeyword from "./HighlightKeyword";
import { colors } from "../../constants/colors";

interface SearchItemProps {
  string: string;
  isFocusing: boolean;
  keyword?: string;
}

const SearchItem = forwardRef<HTMLDivElement, SearchItemProps>(
  ({ string, isFocusing, keyword }, ref) => {
    return (
      <SearchItemBox
        style={{
          backgroundColor: isFocusing ? colors.lightgray : "transparent",
        }}
        ref={ref}
      >
        <AiOutlineSearch color={colors.gray} size={20} />
        {keyword ? (
          <HighlightKeyword text={string} keyword={keyword} />
        ) : (
          <p>{string}</p>
        )}
      </SearchItemBox>
    );
  }
);

export default SearchItem;

const SearchItemBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  text-align: left;

  & > p {
    margin: 0.5rem;
  }
`;
