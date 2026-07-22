import { Card, Text, Badge, Box, Flex, Title, Space, useMantineColorScheme } from "@mantine/core";
import { useTranslation } from "react-i18next";

interface ScoreCardProps {
  score: number;
}

export default function ScoreCard({ score }: ScoreCardProps) {
  const { t } = useTranslation();
  const { colorScheme } = useMantineColorScheme();

  const getScoreColor = (s: number) => {
    if (s >= 80) return "green";
    if (s >= 60) return "yellow";
    if (s >= 40) return "orange";
    return "red";
  };

  const getScoreLabel = (s: number) => {
    if (s >= 80) return t("score.excellent");
    if (s >= 60) return t("score.good");
    if (s >= 40) return t("score.average");
    return t("score.poor");
  };

  const getScoreCardBg = (s: number) => {
    if (colorScheme === "dark") {
      if (s >= 80) return "#0f172a";
      if (s >= 60) return "#1e1b4b";
      if (s >= 40) return "#431407";
      return "#450a0a";
    }
    if (s >= 80) return "#ecfdf5";
    if (s >= 60) return "#fefce8";
    if (s >= 40) return "#fff7ed";
    return "#fef2f2";
  };

  const getScoreColorValue = (s: number) => {
    if (colorScheme === "dark") {
      if (s >= 80) return "#4ade80";
      if (s >= 60) return "#fbbf24";
      if (s >= 40) return "#fb923c";
      return "#f87171";
    }
    if (s >= 80) return "#059669";
    if (s >= 60) return "#d97706";
    if (s >= 40) return "#ea580c";
    return "#dc2626";
  };

  return (
    <Card
      bg={getScoreCardBg(score)}
      p="xl"
      radius="lg"
      shadow="md"
    >
      <Flex justify="center" direction="column" align="center">
        <Text size="sm" color="dimmed" mb="xs">
          {t("score.title")}
        </Text>
        <Box
          component="div"
          style={{
            fontSize: "72px",
            fontWeight: 700,
            lineHeight: 1,
            color: getScoreColorValue(score),
          }}
          mb="sm"
        >
          {score}
        </Box>
        <Badge color={getScoreColor(score)} size="lg" variant="filled" radius="lg" px="lg">
          {getScoreLabel(score)}
        </Badge>
      </Flex>

      <Space h="xl" />

      <Title order={3} size="h5" mb="md">
        {t("guide.title")}
      </Title>
      <Box>
        <Text size="xs" color="green.6" mb="sm">
          <strong>{t("guide.excellent")}</strong>
        </Text>
        <Text size="xs" color="yellow.6" mb="sm">
          <strong>{t("guide.good")}</strong>
        </Text>
        <Text size="xs" color="orange.6" mb="sm">
          <strong>{t("guide.average")}</strong>
        </Text>
        <Text size="xs" color="red.6">
          <strong>{t("guide.poor")}</strong>
        </Text>
      </Box>
    </Card>
  );
}