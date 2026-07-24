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
    website: "https://www.spotify.com",
    linkedin: "https://www.linkedin.com/company/spotify",
    params: {
      dailyWorkingHours: 7,
      dailyCommuteHours: 0.5,
      dailyCommunicationOutsideWorkHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 25,
      annualPaidSickLeaveDays: 25,
    },
  },
];
