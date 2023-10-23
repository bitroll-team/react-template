import { character } from "@/types/entities";

export const CharacterCard = ({ character }: { character: character }) => {
  const isDead = character.status.toLowerCase() === "dead";

  const colorByStatus = {
    Dead: "bg-red-500",
    Alive: "bg-green-500",
    unknown: "bg-gray-500"
  };

  return (
    <li className="character-card border p-4 flex flex-col items-center gap-2 shadow-sm hover:shadow-md transition-shadow bg-white">
      <img
        src={character.image}
        alt={character.name}
        className={`w-full aspect-square hover:grayscale-0 transition-all ${
          isDead && "grayscale"
        }`}
      />
      <h2 className="font-bold text-lg">{character.name}</h2>
      <p className="flex items-center">
        <span
          className={`w-3 h-3 inline-block rounded-full mr-2 ${
            colorByStatus[character.status]
          }`}
        />
        {character.status} - {character.species}
      </p>
    </li>
  );
};
