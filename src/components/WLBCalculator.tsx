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
  Paper,
  Space,
  Flex,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import calc, { IDEAL_VALUES } from "../calc";
import type { CalcParams } from "../calc";
import { useMemo } from "react";

const SLIDER_CONFIG: { key: keyof CalcParams; label: string; min: number; max: number; step: number; unit: string }[] = [
  { key: "dailyWorkingHours", label: "每日工作时长", min: 1, max: 16, step: 0.5, unit: "小时" },
  { key: "dailyCommuteHours", label: "每日通勤时长", min: 0, max: 5, step: 0.5, unit: "小时" },
  { key: "weeklyWorkingHours", label: "每周工作时长", min: 10, max: 80, step: 1, unit: "小时" },
  { key: "weeklyWorkingDays", label: "每周工作天数", min: 1, max: 7, step: 1, unit: "天" },
  { key: "paidLeaveDaysPerYear", label: "每年带薪休假", min: 0, max: 60, step: 1, unit: "天" },
  { key: "paidSickLeaveDaysPerYear", label: "每年带薪病假", min: 0, max: 30, step: 1, unit: "天" },
  { key: "communicationOutsideWorkHours", label: "工作外沟通时长", min: 0, max: 10, step: 0.5, unit: "小时/天" },
];

export default function WLBCalculator() {
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
    if (s >= 80) return "优秀";
    if (s >= 60) return "良好";
    if (s >= 40) return "一般";
    return "较差";
  };

  return (
    <Container size="xl" py="xl">
      <Card shadow="sm" padding="xl" radius="lg">
        <Box mb="xl">
          <Flex justify="center" direction="column" align="center">
            <Title order={1} size="h1" mb="sm">
              工作生活平衡计算器
            </Title>
            <Text color="dimmed" size="lg">
              输入你的工作参数，实时计算工作与生活平衡得分
            </Text>
          </Flex>
        </Box>

        <Grid gap="lg">
          <Grid.Col span={{ md: 8, sm: 12 }}>
            <Paper p="md" radius="md" withBorder>
              <Title order={2} size="h3" mb="lg">
                参数设置
              </Title>
              <Space h="md" />
              {SLIDER_CONFIG.map((config) => (
                <Box key={config.key} mb="lg">
                  <Group justify="space-between" mb="sm">
                    <Text fw={500} size="sm">
                      {config.label}
                    </Text>
                    <Badge variant="outline" color="purple">
                      {form.values[config.key]} {config.unit}
                    </Badge>
                  </Group>
                  <Slider
                      {...form.getInputProps(config.key)}
                      min={config.min}
                      max={config.max}
                      step={config.step}
                      label={(val) => `${val}${config.unit}`}
                      w="100%"
                      marks={(() => {
                        const idealVal = IDEAL_VALUES[config.key];
                        const marks = [
                          { value: config.min, label: `${config.min}` },
                          { value: config.max, label: `${config.max}` },
                        ];
                        if (idealVal > config.min && idealVal < config.max) {
                          marks.push({ value: idealVal, label: `理想: ${idealVal}` });
                        }
                        return marks;
                      })()}
                      styles={{
                        markLabel: { fontSize: "0.6rem" },
                      }}
                    />
                </Box>
              ))}
            </Paper>
          </Grid.Col>

          <Grid.Col span={{ md: 4, sm: 12 }}>
            <Card
              bg={score >= 80 ? "#ecfdf5" : score >= 60 ? "#fefce8" : score >= 40 ? "#fff7ed" : "#fef2f2"}
              p="xl"
              radius="lg"
              shadow="md"
            >
              <Flex justify="center" direction="column" align="center">
                <Text size="sm" color="dimmed" mb="xs">
                  你的工作生活平衡得分
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
                <Badge
                  color={getScoreColor(score)}
                  size="lg"
                  variant="filled"
                  radius="lg"
                  px="lg"
                >
                  {getScoreLabel(score)}
                </Badge>
              </Flex>

              <Space h="xl" />

              <Title order={3} size="h5" mb="md">
                评分说明
              </Title>
              <Box>
                <Text size="xs" color="green.6" mb="sm">
                  <strong>80-100分：优秀</strong> - 工作生活平衡良好
                </Text>
                <Text size="xs" color="yellow.6" mb="sm">
                  <strong>60-79分：良好</strong> - 基本平衡，略有压力
                </Text>
                <Text size="xs" color="orange.6" mb="sm">
                  <strong>40-59分：一般</strong> - 需要关注工作负荷
                </Text>
                <Text size="xs" color="red.6">
                  <strong>0-39分：较差</strong> - 建议调整工作状态
                </Text>
              </Box>
            </Card>
          </Grid.Col>
        </Grid>
      </Card>
    </Container>
  );
}
