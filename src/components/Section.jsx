export default function Section({ id, title, intro, children }) {
  return (
    <section id={id} className="scroll-mt-16 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
        {intro && <p className="mt-3 max-w-xl text-muted">{intro}</p>}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
