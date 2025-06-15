"use client";

import { Habit as HabitType } from "@/types/habits";
import { Card } from "../ui/card";
import { Checkbox } from "../ui/checkbox";

type HabitProps = {
  habit: HabitType;
  onCheck: () => void;
}

const Habit: React.FC<HabitProps> = ({
  habit,
  onCheck,
}) => (
  <Card className="w-full m-auto p-4 mt-2 flex flex-row gap-2 items-center">
    <Checkbox checked={habit.done} onCheckedChange={onCheck} />
    <p className={habit.done ? "line-through" : ""}>{habit.name}</p>
  </Card>
);

export default Habit;