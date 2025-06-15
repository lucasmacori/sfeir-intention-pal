import Character from "@/components/character/Character";
import HabitList from "@/components/habits/HabitList";

const HABITS_STUB = [
  {
    id: "1",
    name: "Do the dishes 🧽",
    description: "Grab a sponge and get that pile of dishes out the sink!",
    done: true,
  },
  {
    id: "2",
    name: "Vacuum the appartment 🧹",
    description: "Have you seen the dust under the bed?!",
    done: false
  }
]

export default function Home() {
  return (
    <>
      <Character />
      <div className="mt-4">
        <HabitList initialHabits={HABITS_STUB} />
      </div>
    </>
  );
}
