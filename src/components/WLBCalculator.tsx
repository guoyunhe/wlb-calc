import { Container, Grid } from "@mantine/core";
import { useForm } from "@mantine/form";
import calc from "../calc";
import { IDEAL_VALUES, CALC_CONFIG } from "../config";
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

  return (
    <Container size="md" py="xl">
      <Header />

      <Grid gap="lg">
        <Grid.Col span={{ md: 8, sm: 12 }}>
          {CALC_CONFIG.map((config) => (
            <ParamSlider
              key={config.key}
              config={config}
              inputProps={form.getInputProps(config.key)}
            />
          ))}
        </Grid.Col>

        <Grid.Col span={{ md: 4, sm: 12 }}>
          <ScoreCard score={score} />
        </Grid.Col>
      </Grid>
    </Container>
  );
}
