import type LocalizedName from "../../types/LocalizedName";

export function localizedLabel(text: LocalizedName, language: string): string {
  return language.startsWith("zh") && text.zh ? text.zh : text.en;
}
