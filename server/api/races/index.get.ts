import { Race } from "~/types/race";
import { races } from "~/data/races";
import { slugify } from "~/utilities/slugify";

type Output = Pick<Race, "name" | "source"> & {
  id: string;
};

export default defineEventHandler<Output[]>(() => {
  return races.map((race: Race) => {
    const { name, source } = race;

    let id = slugify(name);

    if (source) {
      id = `${slugify(source)}/${id}`;
    }

    return { name, source, id };
  });
});
