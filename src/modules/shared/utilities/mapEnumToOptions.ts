export function mapEnumToOptions<T extends Record<string, string>>(
  enumObject: T
): { id: string; name: string }[] {
  return Object.keys(enumObject).map((key) => ({
    id: enumObject[key],
    name: key,
  }));
}
