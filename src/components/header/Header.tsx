export default function Header() {
  return (
    <header className="p-4">
      <section className="flex gap-2 items-center">
        <img
          src="/logos/logo-light.svg"
          alt="Lexicon Governance logo"
          height={32}
          width={32}
        />
        <h1>Lexicon Governance</h1>
      </section>
    </header>
  );
}
