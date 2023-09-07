import Header from "./Header";
import { styled } from "styled-components";

const PageLayout = ({ children }: any) => {
  return (
    <Layout>
      <Header />
      {children}
    </Layout>
  );
};

export default PageLayout;

const Layout = styled.div`
  width: 100vw;
  height: 100vh;
`;
