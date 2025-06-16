"use client";

import { Habit as HabitType } from "@/types/habits";
import { List } from "@mynaui/icons-react";
import { uniqueId } from "lodash";
import { useState } from "react";
import { Separator } from "../ui/separator";
import Habit from "./Habit";

type HabitListProps = {
  initialHabits: HabitType[];
}

const compareHabitsName = ((a: HabitType, b: HabitType) => a.name.localeCompare(b.name));
const compareHabitsDone = ((a: HabitType, b: HabitType) => Number(a.done) - Number(b.done));

const HabitList: React.FC<HabitListProps> = ({
  initialHabits
}) => {
  const [habits, setHabits] = useState(initialHabits);

  const handleHabitCheck = (habit: HabitType) => {
    setHabits((habits: HabitType[]) => habits.map((currentHabit: HabitType) => (
      currentHabit.id === habit.id ? { ...currentHabit, done: !currentHabit.done } : currentHabit
    )));
  }

  return (
    <>
      <h2 className="font-bold text-lg flex flex-row gap-2 items-center">
        <List />
        <span>Tasks for today</span>
        </h2>
      <Separator />
      <div>
        {habits
          .sort(compareHabitsName)
          .sort(compareHabitsDone)
          .map((habit: HabitType) => (
            <Habit key={uniqueId()} habit={habit} onCheck={() => handleHabitCheck(habit)} />
          ))
        }
      </div>
      
    </>
  );
};

export default HabitList;