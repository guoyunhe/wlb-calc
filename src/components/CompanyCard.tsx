import { Card, Anchor, Text, useMantineColorScheme } from "@mantine/core";
import { MapPinIcon } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";
import type { Company } from "../companies";
import { localizedLabel } from "../companies";
import { getScoreLevel } from "../calc";
import { useMediaQuery } from "@mantine/hooks";

interface CompanyCardProps {
  company: Company;
  score: number;
}

export default function CompanyCard({ company, score }: CompanyCardProps) {
  const { i18n } = useTranslation();
  const scoreLevel = getScoreLevel(score);
  const { colorScheme } = useMantineColorScheme();
  const systemDark = useMediaQuery("(prefers-color-scheme: dark)");
  const isDark = colorScheme === "dark" || (colorScheme === "auto" && systemDark);

  const handleClick = () => {
    const url = new URL(window.location.href);
    url.searchParams.set("company", company.id);
    window.history.pushState({}, "", url);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <Card
      variant="bordered"
      onClick={handleClick}
      className="company-card"
      shadow="sm"
      padding="lg"
      withBorder
    >
      <Text
        mb="md"
        fw="bold"
      >
        {i18n.language === "zh" && company.name.zh ? company.name.zh : company.name.en}
      </Text>

      <Text
        size="xl"
        ta="center"
        fw="bold"
        mb="md"
        style={{
          color: isDark ? scoreLevel.textColor.dark : scoreLevel.textColor.light,
        }}
      >
        {score}
      </Text>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.25rem",
          color: "var(--mantine-color-dimmed)",
        }}
      >
        <MapPinIcon size={14} />
        <Text size="xs">
          {company.cities.map((city) => localizedLabel(city, i18n.language)).join(", ")}
        </Text>
      </div>
    </Card>
  );
}
