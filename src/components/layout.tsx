import React, { ReactNode } from 'react';
import Header from './header';
import Footer from './footer';
import Container from './container';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Container>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </Container>
    </>
  );
};

export default Layout;