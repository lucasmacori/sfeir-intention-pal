import Character from "@/components/character/Character";
import HabitList from "@/components/habits/HabitList";
import AuthGuard from "@/guards/auth.guard";

export default function Home() {
  return (
    <AuthGuard>
      <Character />
      <div className="mt-4">
        <HabitList />
      </div>
    </AuthGuard>
  );
}
