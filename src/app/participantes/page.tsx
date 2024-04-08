import { AttendeeList } from "@/components/attendee-list";
import { Header } from "@/components/header";

export default function ParticipantesPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center gap-6 p-8">
      <Header />
      <AttendeeList />
    </main>
  );
}
