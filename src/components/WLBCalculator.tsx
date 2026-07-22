import {
  Card,
  Container,
  Title,
  Text,
  Slider,
  Group,
  Box,
  Badge,
  Grid,
  Space,
  Flex,
  Button,
  useMantineColorScheme,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useTranslation } from "react-i18next";
import calc, { IDEAL_VALUES } from "../calc";
import type { CalcParams } from "../calc";
import { useMemo } from "react";

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const SLIDER_CONFIG: {
  key: keyof CalcParams;
  min: number;
  max: number;
  step: number;
}[] = [
  { key: "dailyWorkingHours", min: 1, max: 16, step: 0.5 },
  { key: "dailyCommuteHours", min: 0, max: 5, step: 0.5 },
  { key: "weeklyWorkingDays", min: 0.5, max: 7, step: 0.5 },
  { key: "paidLeaveDaysPerYear", min: 0, max: 60, step: 1 },
  { key: "paidSickLeaveDaysPerYear", min: 0, max: 30, step: 1 },
  { key: "dailyCommunicationOutsideWorkHours", min: 0, max: 10, step: 0.5 },
];

export default function WLBCalculator() {
  const { t, i18n } = useTranslation();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const form = useForm<CalcParams>({
    initialValues: IDEAL_VALUES,
  });

  const score = useMemo(() => {
    return calc(form.values);
  }, [form.values]);

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

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "zh" ? "en" : "zh");
  };

  return (
    <Container size="md" py="xl">
      <Box mb="xl" style={{ textAlign: "center" }}>
        <Flex justify="center" gap="md" align="center" mb="sm">
          <Title order={1} size="h1">
            {t("title")}
          </Title>
          <Button size="sm" variant="outline" onClick={toggleLanguage}>
            {t(`language.${i18n.language}`)}
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => toggleColorScheme()}
            title={t(`theme.${colorScheme}`)}
          >
            {colorScheme === "dark" ? <SunIcon /> : <MoonIcon />}
          </Button>
        </Flex>
        <Text color="dimmed" size="lg">
          {t("subtitle")}
        </Text>
      </Box>

      <Grid gap="lg">
        <Grid.Col span={{ md: 8, sm: 12 }}>
          {SLIDER_CONFIG.map((config) => (
            <Box key={config.key} mb="lg">
              <Group justify="space-between" mb="sm">
                <Text fw={500} size="sm">
                  {t(`${config.key}.label`)}
                </Text>
                <Badge variant="outline" color="purple">
                  {form.values[config.key]} {t(`${config.key}.unit`)}
                </Badge>
              </Group>
              <Slider
                {...form.getInputProps(config.key)}
                min={config.min}
                max={config.max}
                step={config.step}
                label={(val) => `${val}${t(`${config.key}.unit`)}`}
                w="100%"
                marks={(() => {
                  const idealVal = IDEAL_VALUES[config.key];
                  const marks = [
                    { value: config.min, label: `${config.min}` },
                    { value: config.max, label: `${config.max}` },
                  ];
                  if (idealVal > config.min && idealVal < config.max) {
                    marks.push({ value: idealVal, label: `${t("ideal")}: ${idealVal}` });
                  }
                  return marks;
                })()}
                styles={{
                  markLabel: { fontSize: "0.6rem" },
                }}
              />
            </Box>
          ))}
        </Grid.Col>

        <Grid.Col span={{ md: 4, sm: 12 }}>
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
        </Grid.Col>
      </Grid>
    </Container>
  );
}
