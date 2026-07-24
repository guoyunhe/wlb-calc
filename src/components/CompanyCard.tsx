import { Badge, Button, Card, Flex, Text } from "@mantine/core";
import { GlobeIcon, MapPinIcon, LinkedinLogoIcon } from "@phosphor-icons/react";
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
      <Card.Section inheritPadding p="sm" withBorder flex={1}>
        <Flex align="center" gap="xs" mb="xs">
          <Badge
            variant="outline"
            color={isDark ? scoreLevel.textColor.dark : scoreLevel.textColor.light}
          >
            {score}
          </Badge>
          <Text fw="bold">
            {i18n.language === "zh" && company.name.zh ? company.name.zh : company.name.en}
          </Text>
        </Flex>

        <Flex align="start" ml="-.1rem">
          <MapPinIcon size="1rem" />
          <Text size="xs" ml="0.1rem">
            {company.cities.map((city) => localizedLabel(city, i18n.language)).join(", ")}
          </Text>
        </Flex>
      </Card.Section>

      <Button.Group orientation="vertical">
        <Button
          flex={1}
          radius={0}
          variant="subtle"
          size="xs"
          component="a"
          href={company.website}
          target="_blank"
          onClick={(e) => e.stopPropagation()}
        >
          <GlobeIcon size="1rem" />
        </Button>
        <Button
          flex={1}
          radius={0}
          variant="subtle"
          size="xs"
          component="a"
          href={company.linkedin}
          target="_blank"
          onClick={(e) => e.stopPropagation()}
        >
          <LinkedinLogoIcon size="1rem" />
        </Button>
      </Button.Group>
    </Card>
  );
}
