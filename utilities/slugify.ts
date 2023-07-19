import slugifyOriginal from "slugify";

export function slugify(
  string: string,
  options?:
    | {
        replacement?: string | undefined;
        remove?: RegExp | undefined;
        lower?: boolean | undefined;
        strict?: boolean | undefined;
        locale?: string | undefined;
        trim?: boolean | undefined;
      }
    | undefined
): string {
  return slugifyOriginal(string, {
    lower: true,
    strict: true,
    ...options,
  });
}
