import { Race } from "~/types/race";
import { races } from "~/data/races";
import { slugify } from "~/utilities/slugify";

export default defineEventHandler<Race>((event) => {
  const source = event.context.params?.source.toLowerCase();
  if (!source) {
    throw new Error("Missing source");
  }

  const name = event.context.params?.name.toLowerCase();
  if (!name) {
    throw new Error("Missing race name");
  }

  const race = races.find((race) => {
    return (
      race.source &&
      slugify(race.source) === source &&
      slugify(race.name) === name
    );
  });

  if (!race) {
    throw new Error("Missing race");
  }

  return race;
});
