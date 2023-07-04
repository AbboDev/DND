import { Armour } from "~/types/armour";
import { armours } from "~/data/armours";

export default defineEventHandler<Armour[]>(() => {
  return armours;
});
