import type { LocalizedName } from "./types";

/** Canonical Chinese city names for company data and region filters. */
export const CN_CITIES = {
  beijing: { en: "Beijing", zh: "北京" },
  shanghai: { en: "Shanghai", zh: "上海" },
  shenzhen: { en: "Shenzhen", zh: "深圳" },
  guangzhou: { en: "Guangzhou", zh: "广州" },
  chengdu: { en: "Chengdu", zh: "成都" },
  suzhou: { en: "Suzhou", zh: "苏州" },
} as const satisfies Record<string, LocalizedName>;
