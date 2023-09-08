import Header from "./Header";
import { styled } from "styled-components";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
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
