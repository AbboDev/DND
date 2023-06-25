export function capitalizeFirstLetter(input: any): string {
  const string = input.toString();

  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function capitalize(input: any): string {
  return capitalizeFirstLetter(input);
}
