import { Armour } from "~/types/armour";
import { armours } from "~/data/armours";

export default defineEventHandler<Armour>((event) => {
  const name = event.context.params?.name;

  if (!name) {
    throw new Error("Missing armour name");
  }

  const armour = armours.find((armour) => {
    return armour.id === name;
  });

  if (!armour) {
    throw new Error("Missing armour");
  }

  return armour;
});
