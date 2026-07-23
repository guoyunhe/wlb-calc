import { Container, Grid, Button, Space } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useEffect } from "react";
import calc from "../calc";
import { IDEAL_VALUES, CALC_CONFIG, PRESETS } from "../config";
import type { CalcParams } from "../config";
import { COMPANIES } from "../companies";
import Header from "./Header";
import ParamSlider from "./ParamSlider";
import ScoreCard from "./ScoreCard";

export default function WLBCalculator() {
  const form = useForm<CalcParams>({
    initialValues: IDEAL_VALUES,
  });

  const score = calc(form.values);

  const handlePresetClick = (params: CalcParams) => {
    form.setValues(params);
  };

  useEffect(() => {
    const handlePopState = () => {
      const searchParams = new URLSearchParams(window.location.search);
      const companyId = searchParams.get("company");

      if (companyId) {
        const company = COMPANIES.find((c) => c.id === companyId);
        if (company) {
          form.setValues(company.params);
          const calculatorElement = document.getElementById("wlb-calculator");
          if (calculatorElement) {
            calculatorElement.scrollIntoView({ behavior: "smooth" });
          }
        }
        searchParams.delete("company");
        window.history.pushState({}, "", `${window.location.pathname}${searchParams.toString() ? "?" + searchParams.toString() : ""}`);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [form]);

  return (
    <Container id="wlb-calculator" size="md" py="xl">
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
