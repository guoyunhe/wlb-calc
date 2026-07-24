import { Card, Flex, Text } from "@mantine/core";
import { MapPinIcon } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";
import type { Company } from "../companies";
import { localizedLabel } from "../companies";
import { getScoreLevel } from "../calc";
import { useMediaQuery } from "@mantine/hooks";
import { useMantineColorScheme } from "@mantine/core";

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
      orientation="horizontal"
      padding="sm"
      shadow="sm"
      withBorder
    >
      <Card.Section
        inheritPadding
        withBorder
        display="flex"
        px="lg"
        style={{
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          color: isDark ? scoreLevel.textColor.dark : scoreLevel.textColor.light,
        }}
      >
        <Text size="2rem">{score}</Text>
      </Card.Section>

      <Card.Section inheritPadding p="sm">
        <Text mb="xs" fw="bold">
          {i18n.language === "zh" && company.name.zh ? company.name.zh : company.name.en}
        </Text>

        <Flex align="center">
          <MapPinIcon size={14} />
          <Text size="xs">
            {company.cities.map((city) => localizedLabel(city, i18n.language)).join(", ")}
          </Text>
        </Flex>
      </Card.Section>
    </Card>
  );
}
