import { styled } from "styled-components";
import { colors } from "../constants/colors";
import Logo from "/public/assets/logo.svg";

const Header = () => {
  return (
    <HeaderWrapper>
      <button>
        <img src={Logo} alt="한국 임상정보 로고" height={55} />
        <A11yHidden>한국 임상정보</A11yHidden>
      </button>
      <ul>
        <li>소개</li>
        <li>질문과 답변</li>
        <li>소식받기</li>
        <li>제휴/문의</li>
      </ul>
    </HeaderWrapper>
  );
};

export default Header;

export const A11yHidden = styled.h1`
  overflow: hidden;
  position: absolute !important;
  clip: rect(0, 0, 0, 0);
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
  margin: -1px;
`;

const HeaderWrapper = styled.header`
  width: 100%;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  background-color: ${colors.white};

  & > ul {
    display: flex;
    padding-right: 20px;

    & > li {
      margin-left: 30px;
      font-weight: 600;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
