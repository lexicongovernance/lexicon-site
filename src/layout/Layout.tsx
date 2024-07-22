import { Outlet } from "react-router-dom";
import Header from "@/components/header";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="flex-grow p-4">
        <Outlet />
      </main>
      <footer className="p-4">Built by Lexicon Governance</footer>
    </>
  );
}
