import type { Company } from "./types";

export const SE_COMPANIES: Company[] = [
  {
    id: "spotify",
    name: {
      en: "Spotify",
      zh: "Spotify",
    },
    region: "SE",
    cities: [{ en: "Stockholm" }],
    careerWebsite: "https://www.spotify.com",
    linkedin: "spotify",
    params: {
      dailyWorkingHours: 7,
      dailyCommuteHours: 0.5,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 25,
      annualPaidSickLeaveDays: 25,
    },
  },
];
