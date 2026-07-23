import type { CalcParams, ScoreLevel } from "./config";
import { CALC_CONFIG, SCORE_LEVELS } from "./config";

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

export const getScoreLevel = (score: number): ScoreLevel => {
  return SCORE_LEVELS.find((level) => score >= level.minScore) || SCORE_LEVELS[SCORE_LEVELS.length - 1];
};
