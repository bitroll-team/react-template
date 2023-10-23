import { Skeleton } from "../ui/skeleton";

export const CharacterCardSkeleton = () => {
  return (
    <div className="border p-4 flex flex-col gap-4 items-center shadow-sm hover:shadow-md transition-shadow bg-white">
      <Skeleton className="w-full aspect-square" />
      <Skeleton className="w-2/3 h-4" />
      <Skeleton className="w-3/4 h-4" />
    </div>
  );
};
