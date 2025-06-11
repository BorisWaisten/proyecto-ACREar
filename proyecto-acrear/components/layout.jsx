'use client';
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
  return(
    <>
      <Header />
      <main className="pt-16 md:pt-20">{children}</main>
      <Footer />
    </>
  ) 
}