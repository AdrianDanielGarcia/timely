import { HttpParams } from "@angular/common/http";

export const buildHttpQueryParams = (
  values:  any,
  mapKeys: any
): HttpParams => {

  const newObjectParams = Object.fromEntries(
    Object.entries(values || {} ).map(([key, value]) => [
      mapKeys[key],
      value
    ])
  );
  return new HttpParams({ fromObject: newObjectParams })
}
