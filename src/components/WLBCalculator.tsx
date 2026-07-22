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
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useTranslation } from "react-i18next";
import calc, { IDEAL_VALUES } from "../calc";
import type { CalcParams } from "../calc";
import { useMemo } from "react";

const SLIDER_CONFIG: {
  key: keyof CalcParams;
  min: number;
  max: number;
  step: number;
}[] = [
  { key: "dailyWorkingHours", min: 1, max: 16, step: 0.5 },
  { key: "dailyCommuteHours", min: 0, max: 5, step: 0.5 },
  { key: "weeklyWorkingHours", min: 10, max: 80, step: 1 },
  { key: "weeklyWorkingDays", min: 1, max: 7, step: 1 },
  { key: "paidLeaveDaysPerYear", min: 0, max: 60, step: 1 },
  { key: "paidSickLeaveDaysPerYear", min: 0, max: 30, step: 1 },
  { key: "communicationOutsideWorkHours", min: 0, max: 10, step: 0.5 },
];

export default function WLBCalculator() {
  const { t, i18n } = useTranslation();
  const form = useForm<CalcParams>({
    initialValues: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      weeklyWorkingHours: 40,
      weeklyWorkingDays: 5,
      paidLeaveDaysPerYear: 15,
      paidSickLeaveDaysPerYear: 5,
      communicationOutsideWorkHours: 1,
    },
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
        </Flex>
        <Text color="dimmed" size="lg">
          {t("subtitle")}
        </Text>
      </Box>

      <Grid gap="lg">
        <Grid.Col span={{ md: 8, sm: 12 }}>
          <Title order={2} size="h3" mb="lg">
            {t("params")}
          </Title>
          <Space h="md" />
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
            bg={
              score >= 80
                ? "#ecfdf5"
                : score >= 60
                  ? "#fefce8"
                  : score >= 40
                    ? "#fff7ed"
                    : "#fef2f2"
            }
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
                  color:
                    score >= 80
                      ? "#059669"
                      : score >= 60
                        ? "#d97706"
                        : score >= 40
                          ? "#ea580c"
                          : "#dc2626",
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
