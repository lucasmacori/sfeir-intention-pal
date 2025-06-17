"use client";

import { fetchHabits } from "@/actions/habits";
import { Habit as HabitType } from "@/types/habits";
import { List } from "@mynaui/icons-react";
import { uniqueId } from "lodash";
import { useEffect, useState } from "react";
import { Separator } from "../ui/separator";
import HabitSkeleton from "./HabbitSkeleton";
import Habit from "./Habit";

const compareHabitsName = ((a: HabitType, b: HabitType) => a.name.localeCompare(b.name));
const compareHabitsDone = ((a: HabitType, b: HabitType) => Number(a.done) - Number(b.done));

const HabitList: React.FC = () => {
  const [habits, setHabits] = useState<HabitType[]>();
  
  useEffect(() => {
    fetchHabits().then(setHabits);
  }, []);

  const handleHabitCheck = (habit: HabitType) => {
    /*setHabits((habits: HabitType[]) => habits.map((currentHabit: HabitType) => (
      currentHabit.id === habit.id ? { ...currentHabit, done: !currentHabit.done } : currentHabit
    )));*/
  };

  return (
    <>
      <h2 className="font-bold text-lg flex flex-row gap-2 items-center">
        <List />
        <span>Habits</span>
        </h2>
      <Separator />
      <div className="m-auto">
        { habits
          ? habits
            .sort(compareHabitsName)
            .sort(compareHabitsDone)
            .map((habit: HabitType) => (
              <Habit key={uniqueId()} habit={habit} onCheck={() => handleHabitCheck(habit)} />
            ))
          : <HabitSkeleton />
        }
      </div>
    </>
  );
};

export default HabitList;