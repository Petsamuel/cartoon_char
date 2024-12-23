import { ReactNode } from "react";
import { Header } from "./Header";


type layoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: layoutProps) => {
  return (
    <>
      <header className="fixed w-full z-50">
        <Header />
      </header>
      <main className="h-full">{children}</main>
    </>
  );
};
