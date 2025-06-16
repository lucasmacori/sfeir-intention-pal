import { Skeleton } from "@/components/ui/skeleton";

const HabitSkeleton: React.FC = () => (
  <>
    <Skeleton className="w-full m-auto p-4 mt-2 h-15 rounded-md" />
    <Skeleton className="w-full m-auto p-4 mt-2 h-15 rounded-md" />
    <Skeleton className="w-full m-auto p-4 mt-2 h-15 rounded-md" />
  </>
);

export default HabitSkeleton;