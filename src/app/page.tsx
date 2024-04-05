import { Header } from "@/components/header";
import { HomePage } from "@/components/home";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center gap-6 p-8">
      <Header />
      <HomePage />
    </main>
  );
}
