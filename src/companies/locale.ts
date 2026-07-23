import type { LocalizedName } from "./types";

export function localizedLabel(text: LocalizedName, language: string): string {
  return language.startsWith("zh") && text.zh ? text.zh : text.en;
}

export function cityKey(city: LocalizedName): string {
  return city.en;
}

export function companyHasCity(company: { cities: LocalizedName[] }, cityKeyValue: string): boolean {
  return company.cities.some((city) => city.en === cityKeyValue);
}
