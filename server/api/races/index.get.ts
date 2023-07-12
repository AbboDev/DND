import { Race } from "~/types/race";
import { races } from "~/data/races";

export default defineEventHandler<Race[]>(() => {
  return races;
});
