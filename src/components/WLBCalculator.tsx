import { Container, Grid, Button, Space } from "@mantine/core";
import { useForm } from "@mantine/form";
import calc from "../calc";
import { IDEAL_VALUES, CALC_CONFIG, PRESETS } from "../config";
import type { CalcParams } from "../config";
import { useMemo } from "react";
import Header from "./Header";
import ParamSlider from "./ParamSlider";
import ScoreCard from "./ScoreCard";

export default function WLBCalculator() {
  const form = useForm<CalcParams>({
    initialValues: IDEAL_VALUES,
  });

  const score = useMemo(() => {
    return calc(form.values);
  }, [form.values]);

  const handlePresetClick = (params: CalcParams) => {
    form.setValues(params);
  };

  return (
    <Container size="md" py="xl">
      <Header />

      <Space h="md" />

      <div>
        {PRESETS.map((preset) => (
          <Button
            key={preset.name}
            color={preset.color}
            variant="outline"
            size="md"
            mr="sm"
            mb="sm"
            onClick={() => handlePresetClick(preset.params)}
          >
            {preset.name}
          </Button>
        ))}
      </div>

      <Space h="lg" />

      <Grid gap="lg">
        <Grid.Col span={{ md: 7, sm: 12 }}>
          {CALC_CONFIG.map((config) => (
            <ParamSlider
              key={config.key}
              config={config}
              inputProps={form.getInputProps(config.key)}
            />
          ))}
        </Grid.Col>

        <Grid.Col span={{ md: 5, sm: 12 }}>
          <ScoreCard score={score} />
        </Grid.Col>
      </Grid>
    </Container>
  );
}
