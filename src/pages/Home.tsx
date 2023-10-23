import { CharacterList } from "@/components/characters-list/CharacterList";
import { getCharactersService } from "@/services/characters/get-characters.service";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useIntersectionObserver } from "@uidotdev/usehooks";
import { Loader2 } from "lucide-react";

export const Home = () => {
  // Data fetching
  const { data, error, isLoading, isFetching, hasNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: ["characters"],
      queryFn: getCharactersService,
      getNextPageParam: (lastPage) => lastPage.info.next,
      initialPageParam: 1,
      retry: false,
      refetchOnWindowFocus: false
    });

  const characters = data?.pages.flatMap((page) => page.results) ?? [];

  // Infinite scrolling functionality
  const [intersectedElementRef, entry] = useIntersectionObserver({});
  const isIntersecting = !!entry?.isIntersecting;
  const canFetchMoreCharacters = !isLoading && !isFetching && hasNextPage;

  if (isIntersecting && canFetchMoreCharacters) {
    fetchNextPage();
  }

  return (
    <main className="max-w-6xl mx-auto p-4">
      <CharacterList
        characters={characters}
        isLoading={isLoading || isFetching}
      />
      {hasNextPage && (
        <Loader2
          ref={intersectedElementRef}
          className="text-primary animate-spin mx-auto mt-4"
        />
      )}
    </main>
  );
};
