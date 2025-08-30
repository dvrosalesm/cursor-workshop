import IdeaBubbles from "@/components/IdeaBubbles";

export default function WorkshopIdeasPage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6">
      <main className="max-w-2xl w-full space-y-6">
        <section className="w-full text-left">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center">
            Ideas para tu primer proyecto con Cursor + AI
          </h2>
          <p className="text-sm text-muted-foreground mt-1 text-center">
            Haz clic en una burbuja para ver detalles y prompts de ejemplo.
          </p>
          <div className="mt-6">
            <IdeaBubbles />
          </div>
        </section>
      </main>
    </div>
  );
}
