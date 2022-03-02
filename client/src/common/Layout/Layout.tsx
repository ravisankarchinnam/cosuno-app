import React, { ReactNode } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Container, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export interface LayoutProps {
  children: ReactNode;
}

const Root = styled(Paper)({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

const Main = styled('main')({
  flexGrow: 1,
});

const Layout = ({ children }: LayoutProps) => (
  <Root>
    <Header />
    <Main>
      <Container>{children}</Container>
    </Main>
    <Footer />
  </Root>
);

export default Layout;
