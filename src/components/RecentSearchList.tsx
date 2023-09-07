import React from "react";
import styled from "styled-components";

interface RecentSearchListProps {
  recentSearches: string[];
}

const RecentSearchList: React.FC<RecentSearchListProps> = ({
  recentSearches,
}) => {
  return (
    <ListContainer>
      <p>최근 검색어</p>
      <SearchList>
        {recentSearches.map((recentSearch, index) => (
          <ListItem key={index}>{recentSearch}</ListItem>
        ))}
      </SearchList>
      <p>추천 검색어 없음</p>
    </ListContainer>
  );
};

const ListContainer = styled.div`
  padding: 10px;
  width: 100%;

  & > p {
    padding-top: 10px;
    color: #979ea5;
  }
`;

const SearchList = styled.ul`
  padding-top: 5px;
`;

const ListItem = styled.li`
  margin-top: 2px;
  padding: 8px 2px;
  width: 100%;
  font-weight: 400;
  cursor: pointer;

  &:hover {
    background-color: #eef1f1;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }
`;

export default RecentSearchList;
