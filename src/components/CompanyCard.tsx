import { Badge, Button, Card, Divider, Flex, Text } from "@mantine/core";
import { GlobeIcon, MapPinIcon, LinkedinLogoIcon, ChatIcon } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";
import type Company from "../types/Company";
import { localizedLabel } from "../companies";
import { getScoreLevel } from "../calc";
import { useMediaQuery } from "@mantine/hooks";
import { useMantineColorScheme } from "@mantine/core";
import { GITHUB_URL } from "../config";

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
      <Card.Section inheritPadding px="sm" withBorder flex={1}>
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

      <Card.Section onClick={(e) => e.stopPropagation()}>
        <Button.Group orientation="vertical">
          <Button
            variant="transparent"
            color="default"
            component="a"
            href={company.careerWebsite}
            target="_blank"
          >
            <GlobeIcon size="1rem" />
          </Button>
          <Divider />
          <Button
            variant="transparent"
            color="default"
            component="a"
            href={`https://www.linkedin.com/company/${company.linkedin}/jobs`}
            target="_blank"
          >
            <LinkedinLogoIcon size="1rem" />
          </Button>
          {!!company.discussion && (
            <>
              <Divider />
              <Button
                variant="transparent"
                color="default"
                component="a"
                href={`${GITHUB_URL}/discussions/${company.discussion}`}
                target="_blank"
              >
                <ChatIcon size="1rem" />
              </Button>
            </>
          )}
        </Button.Group>
      </Card.Section>
    </Card>
  );
}
