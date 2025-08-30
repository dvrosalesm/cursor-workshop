import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6">
      <main className="max-w-5xl w-full text-center flex flex-col items-center justify-center space-y-10">
        <Image
          src="/cursor-cube.svg"
          alt="Cursor Guatemala Workshop"
          width={100}
          height={100}
        />
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Bienvenidos al Taller de Cursor Guatemala
        </h1>
        <p className="text-muted-foreground">
          Explora las ideas de taller y aprende técnicas de ingeniería de
          tailored for Cursor.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild className="w-full sm:w-auto">
            <Link href="/workshop-ideas">Ideas de Taller</Link>
          </Button>
          <Button asChild variant="secondary" className="w-full sm:w-auto">
            <Link href="/prompt-engineering">Prompt Engineering</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
