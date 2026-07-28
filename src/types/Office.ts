import type City from "./City";

export default interface Office {
  city: City;
  district: string;
  address: string;
  description?: string;
  employeeCount: number;
}
