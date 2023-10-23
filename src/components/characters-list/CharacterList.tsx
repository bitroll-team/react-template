import { character } from "@/types/entities";

import { gridContainerVariants } from "../GridContainer";
import { CharacterCard } from "./CharacterCard";
import { CharacterCardSkeleton } from "./CharacterCardSkeleton";

interface CharacterListProps {
  isLoading: boolean;
  characters: character[];
}

export const CharacterList = ({
  isLoading,
  characters
}: CharacterListProps) => {
  const skeletons = Array.from({ length: 12 }).map((_, index) => (
    <CharacterCardSkeleton key={`character-card-skeleton-${index}`} />
  ));

  return (
    <ul className={gridContainerVariants({ variant: "default" })}>
      {characters.map((character) => (
        <CharacterCard character={character} key={character.id} />
      ))}
      {isLoading && skeletons}
    </ul>
  );
};
