import type { CalcParams } from "./config";
import { CALC_CONFIG } from "./config";

export default function calc(params: CalcParams) {
  let score = 100;

  for (let i = 0; i < CALC_CONFIG.length; i++) {
    const config = CALC_CONFIG[i];
    const value = params[config.key];

    switch (config.penaltyType) {
      case "excess":
        score -= Math.max(0, value - config.ideal) * config.penaltyWeight;
        break;
      case "deficit":
        score -= Math.max(0, config.ideal - value) * config.penaltyWeight;
        break;
      case "direct":
        score -= value * config.penaltyWeight;
        break;
    }
  }

  return Math.max(0, Math.min(100, Math.round(score)));
}
