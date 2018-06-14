import { Pipe } from "@angular/core";

@Pipe({name: "orderBy"})
export class OrderByPipe {
  private static compare(a: any, b: any): number {
    if (a === null || typeof a === "undefined") {
      a = 0;
    }
    if (b === null || typeof b === "undefined") {
      b = 0;
    }
    const floatA = parseFloat(a);
    const floatB = parseFloat(b);
    if ((isNaN(floatA) || !isFinite(a)) || (isNaN(floatB) || !isFinite(b))) {
      const strA = a.toString().toLowerCase();
      const strB = b.toString().toLowerCase();
      if (strA < strB) {
        return -1;
      }
      if (strA > strB) {
        return 1;
      }
    } else {
      if (floatA < floatB) {
        return -1;
      }
      if (floatA > floatB) {
        return 1;
      }
    }
    return 0;
  }
  public transform(value: any[], property: string): any {
    return value.sort((a: any, b: any): number => {
      const aValue = a[property];
      const bValue = b[property];
      const comparison = OrderByPipe.compare(aValue, bValue);
      return comparison;
    });
  }
}
