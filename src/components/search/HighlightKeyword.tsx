import { styled } from "styled-components";

interface HighlightKeywordProps {
  text: string;
  keyword: string;
}

const HighlightKeyword = ({
  text,
  keyword,
}: HighlightKeywordProps): JSX.Element => {
  const startIndex = text.toLowerCase().indexOf(keyword.toLowerCase());
  if (startIndex === -1) return <>{text}</>;

  const beforeKeyword = text.slice(0, startIndex);
  const matchedKeyword = text.slice(startIndex, startIndex + keyword.length);
  const afterKeyword = text.slice(startIndex + keyword.length);

  return (
    <p>
      {beforeKeyword}
      <StrongText>{matchedKeyword}</StrongText>
      {afterKeyword}
    </p>
  );
};

export default HighlightKeyword;

const StrongText = styled.strong`
  font-weight: bold;
  color: red; // 또는 다른 원하는 색상
`;
