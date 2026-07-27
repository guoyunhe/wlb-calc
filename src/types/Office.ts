import type City from "./City";

export default interface Office {
  city: City;
  address: string;
  employeeCount: number;
}
