import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

type layoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: layoutProps) => {
  return (
    <>
      <header className="fixed w-full">
        <Header />
      </header>
      <main className="h-full px-12 pt-[4rem]">{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
