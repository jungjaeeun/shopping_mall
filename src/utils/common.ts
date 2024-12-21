export const makeFieldList = <T, K extends keyof T>(
  data: T[],
  field: K
): string[] => {
  return Array.from(new Set(data.map((item) => String(item[field]))));
};
