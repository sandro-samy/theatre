import React from "react";

const Footer = () => {
  return (
    <footer className="flex h-24 w-full justify-center items-center border-t">
      <div className="w-9/12 text-center">
        All rights received to
        <span className="mx-1 font-bold font-sans uppercase">Theatre</span>
        Developed by
        <a
          className="inline font-extrabold ml-1 text-white font-sans"
          href="https://sandrosamy.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sandro Samy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
