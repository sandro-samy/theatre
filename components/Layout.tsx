import React from "react";
import Footer from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";
import Nav from "./layout/Header/Nav";

const Layout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <>
      <Header />
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
