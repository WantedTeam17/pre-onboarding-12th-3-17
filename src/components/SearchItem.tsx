import { forwardRef } from "react";
import { styled } from "styled-components";
import { colors } from "../constants/colors";
import { AiOutlineSearch } from "react-icons/ai";

interface SearchItemProps {
  string: string;
  isFocusing: boolean;
  keyword?: string;
}

const SearchItem = forwardRef<HTMLDivElement, SearchItemProps>(
  ({ string, isFocusing, keyword }, ref) => {
    const highlightKeyword = (text: string, keyword: string): JSX.Element => {
      const startIndex = text.toLowerCase().indexOf(keyword.toLowerCase());
      if (startIndex === -1) return <>{text}</>;

      const beforeKeyword = text.slice(0, startIndex);
      const matchedKeyword = text.slice(
        startIndex,
        startIndex + keyword.length
      );
      const afterKeyword = text.slice(startIndex + keyword.length);

      return (
        <>
          {beforeKeyword}
          <StrongText>{matchedKeyword}</StrongText>
          {afterKeyword}
        </>
      );
    };

    return (
      <SearchItemBox
        style={{
          backgroundColor: isFocusing ? colors.lightgray : "transparent",
        }}
        ref={ref}
      >
        <AiOutlineSearch color={colors.gray} size={20} />
        <p>{keyword ? highlightKeyword(string, keyword) : string}</p>
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

  & > p {
    margin: 0.5rem;
  }
`;

const StrongText = styled.strong`
  font-weight: bold;
  color: red; // 또는 다른 원하는 색상
`;
