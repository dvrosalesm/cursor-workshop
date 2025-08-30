export default function PromptEngineeringPage() {
  return (
    <div
      className="relative min-h-screen w-full bg-background text-black/10 dark:text-white/10"
      style={{
        backgroundImage:
          "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
        backgroundSize: "24px 24px",
        backgroundPosition: "0 0",
      }}
    >
      <div className="absolute inset-0 pointer-events-none" />
      <main className="relative mx-auto w-full max-w-7xl p-4 sm:p-6">
        <section
          id="prompt-canvas"
          aria-label="Lienzo de Prompt Engineering"
          className="relative h-[calc(100vh-3rem)] w-full rounded-2xl bg-background/60 backdrop-blur-sm ring-1 ring-neutral-200/60 dark:ring-neutral-800/60 shadow-sm overflow-hidden"
        >
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <div className="max-w-2xl text-center">
              <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
                Lienzo de Prompt Engineering
              </h1>
              <p className="mt-2 text-sm text-muted-foreground">
                Usa este espacio como una superficie de trabajo. Aquí podrás
                indicar a Cursor dónde trabajar y demostrar técnicas de prompt
                engineering. Puedes agregar bloques, ejemplos y resultados en
                este lienzo.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
