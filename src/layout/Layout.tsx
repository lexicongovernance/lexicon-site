import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header className="p-4">
        <h1>Lexicon Governance</h1>
      </header>
      <main className="flex-grow p-4">
        <Outlet />
      </main>
      <footer className="p-4">Built by Lexicon Governance</footer>
    </>
  );
}
