import { Card, Badge, Anchor, Text } from "@mantine/core";
import { MapPinIcon } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";
import type { Company } from "../companies";
import { getScoreLevel } from "../calc";

interface CompanyCardProps {
  company: Company;
  score: number;
}

export default function CompanyCard({ company, score }: CompanyCardProps) {
  const { t } = useTranslation();
  const scoreLevel = getScoreLevel(score);

  const handleClick = () => {
    const url = new URL(window.location.href);
    url.searchParams.set("company", company.id);
    window.history.pushState({}, "", url);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  const getRegionBadgeColor = (region: string) => {
    const colorMap: Record<string, string> = {
      US: "blue",
      CA: "blue",
      SE: "indigo",
      DE: "indigo",
      AU: "emerald",
    };
    return colorMap[region] || "gray";
  };

  return (
    <Card
      onClick={handleClick}
      className="company-card"
      padding="lg"
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
        <Anchor href="#" underline="never" style={{ fontWeight: "600", fontSize: "1.125rem" }}>
          {company.name}
        </Anchor>
        <Badge color={getRegionBadgeColor(company.region)} variant="light" size="xs">
          {t(`region.${company.region}`)}
        </Badge>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0.75rem",
          borderRadius: "0.5rem",
          backgroundColor: scoreLevel.bg.light,
          marginBottom: "0.75rem",
        }}
      >
        <Text size="sm" fw="500" style={{ color: scoreLevel.textColor.light }}>
          WLB Score
        </Text>
        <Text size="xl" fw="bold" style={{ color: scoreLevel.textColor.light }}>
          {score}
        </Text>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "0.25rem", color: "var(--mantine-color-dimmed)" }}>
        <MapPinIcon size={14} />
        <Text size="xs">{company.city}</Text>
      </div>
    </Card>
  );
}
