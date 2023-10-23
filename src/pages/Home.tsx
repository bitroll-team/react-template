import { CharacterList } from "@/components/characters-list/CharacterList";
import { getCharactersService } from "@/services/characters/get-characters.service";
import { useInfiniteQuery } from "@tanstack/react-query";

export const Home = () => {
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

  return (
    <main className="max-w-6xl mx-auto p-4">
      <CharacterList
        characters={characters}
        isLoading={isLoading || isFetching}
      />
    </main>
  );
};
