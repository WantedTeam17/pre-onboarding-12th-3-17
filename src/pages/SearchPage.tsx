import { styled } from "styled-components";
import SearchBar from "../components/SearchBar";
import MainImg1 from "/public/assets/mainImg-1.svg";
import MainImg2 from "/public/assets/mainImg-2.svg";
import MainImg3 from "/public/assets/mainImg-3.svg";
import { colors } from "../constants/colors";

const SearchPage = () => {
  return (
    <HomeWrapper>
      <HomeContainer>
        <MainImgOne>
          <img src={MainImg1} alt="" width={148} />
        </MainImgOne>
        <MainImgTwo>
          <img src={MainImg2} alt="" width={116} />
        </MainImgTwo>
        <MainImgThree>
          <img src={MainImg3} alt="" width={130} />
        </MainImgThree>

        <h2>
          국내 모든 임상시험 검색하고 <br />
          온라인으로 참여하기
        </h2>
        <SearchBar />
      </HomeContainer>
    </HomeWrapper>
  );
};

export default SearchPage;

const HomeWrapper = styled.main`
  flex-direction: column;
  align-items: center;
  display: flex;
  width: 100%;
  background-color: ${colors.background};
  height: 500px;
`;

const HomeContainer = styled.div`
  padding: 80px 0 160px;
  max-width: 1040px;
  flex-direction: column;
  display: flex;
  width: 100%;
  position: relative;
  margin: 0 auto;

  & > h2 {
    font-size: 2.125rem;
    font-weight: 700;
    letter-spacing: -0.018em;
    line-height: 1.6;
    margin-bottom: 40px;
    font-family: inherit;
    text-align: center;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const MainImgOne = styled.div`
  left: 54px;
  top: 200px;
  position: absolute;
`;

const MainImgTwo = styled.div`
  position: absolute;
  right: 20px;
  top: 188px;
`;

const MainImgThree = styled.div`
  position: absolute;
  right: 124px;
  top: 280px;
`;
