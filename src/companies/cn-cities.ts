import type { LocalizedName } from "./types";

/** Canonical Chinese city names for company data and region filters. */
export const CN_CITIES = {
  beijing: { en: "Beijing", zh: "北京" },
  shanghai: { en: "Shanghai", zh: "上海" },
  shenzhen: { en: "Shenzhen", zh: "深圳" },
  guangzhou: { en: "Guangzhou", zh: "广州" },
  chengdu: { en: "Chengdu", zh: "成都" },
  suzhou: { en: "Suzhou", zh: "苏州" },
  xian: { en: "Xian", zh: "西安" },
  wuxi: { en: "Wuxi", zh: "无锡" },
  hangzhou: { en: "Hangzhou", zh: "杭州" },
  nanjing: { en: "Nanjing", zh: "南京" },
  wuhan: { en: "Wuhan", zh: "武汉" },
  hefei: { en: "Hefei", zh: "合肥" },
  xiamen: { en: "Xiamen", zh: "厦门" },
  dalian: { en: "Dalian", zh: "大连" },
  hongkong: { en: "Hong Kong", zh: "香港" },
} as const satisfies Record<string, LocalizedName>;
