import { useEffect, useRef } from "react";
import { styled } from "styled-components";
import { colors } from "../constants/colors";
import SearchItem from "./SearchItem";
import { ZERO } from "../constants/number";
import useMovingScrollToKeyboard from "../hooks/useMovingScrollToKeyboard";
import { TermsType } from "../constants/@type/termsType";

interface RelatedSearchProps {
  query: string;
  focusIdx: number;
  terms: TermsType[];
  isLoading: boolean;
}

const RelatedSearches = ({
  query,
  focusIdx,
  terms,
  isLoading,
}: RelatedSearchProps) => {
  // TODO: localstorage에서 캐싱되어 있는 검색어들 불러오기

  const [relatedSearchRef, itemRefs, movingScrollToKeyboard] =
    useMovingScrollToKeyboard(focusIdx);

  useEffect(() => {
    movingScrollToKeyboard();
  }, [focusIdx]);

  return (
    <RelatedSearchWrap ref={relatedSearchRef}>
      {isLoading ? (
        <LoadingText>로딩 중..</LoadingText>
      ) : (
        <>
          {query && <SearchItem string={query} isFocusing={false} />}
          {!terms || terms.length === ZERO ? (
            <p>추천 검색어 없음</p>
          ) : (
            <>
              <p>추천 검색어</p>
              {terms.map((term, idx) => (
                <SearchItem
                  string={term.sickNm}
                  key={idx}
                  isFocusing={focusIdx === idx}
                  keyword={query}
                  ref={(el) => {
                    if (el) itemRefs.current[idx] = el;
                  }}
                />
              ))}
            </>
          )}
        </>
      )}
    </RelatedSearchWrap>
  );
};
export default RelatedSearches;

const RelatedSearchWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.2rem;
  border-radius: 1.875rem;
  background: ${colors.white};
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
  max-height: 300px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  & > p {
    color: ${colors.gray};
    margin: 0;
  }

  @media (max-width: 600px) {
    border-radius: 0;
    padding: 0.8rem;
  }
`;

const LoadingText = styled.p`
  font-weight: bold;
  padding: 10px 15px;
  margin: 0;
`;
