import { Card, Text, Badge, Box, Flex, Title, Space, useMantineColorScheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useTranslation } from "react-i18next";
import { getScoreLevel } from "../calc";
import { SCORE_LEVELS } from "../config";

interface ScoreCardProps {
  score: number;
}

export default function ScoreCard({ score }: ScoreCardProps) {
  const { t } = useTranslation();
  const { colorScheme } = useMantineColorScheme();
  const systemDark = useMediaQuery("(prefers-color-scheme: dark)");
  const level = getScoreLevel(score);
  const isDark = colorScheme === "dark" || (colorScheme === "auto" && systemDark);

  return (
    <Card bg={level.bg[isDark ? "dark" : "light"]} p="xl" radius="lg" shadow="md">
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
            color: level.textColor[isDark ? "dark" : "light"],
          }}
          mb="sm"
        >
          {score}
        </Box>
        <Badge color={level.color} size="lg" variant="filled" radius="lg" px="lg">
          {t(level.labelKey)}
        </Badge>
      </Flex>

      <Space h="xl" />

      <Title order={3} size="h5" mb="md">
        {t("guide.title")}
      </Title>
      <Box>
        {SCORE_LEVELS.map((lvl) => (
          <Text key={lvl.minScore} size="xs" color={`${lvl.color}.6`} mb="sm">
            <strong>{t(`guide.${lvl.labelKey.split(".")[1]}`)}</strong>
          </Text>
        ))}
      </Box>
    </Card>
  );
}
