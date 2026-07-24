import { Slider, Group, Text, Badge, Box, type SliderProps } from "@mantine/core";
import { useTranslation } from "react-i18next";
import type { ParamConfig } from "../config";

interface ParamSliderProps {
  config: ParamConfig;
  inputProps: Pick<SliderProps, "value" | "onChange">;
}

export default function ParamSlider({ config, inputProps }: ParamSliderProps) {
  const { t } = useTranslation();

  return (
    <Box key={config.key} mb="lg">
      <Group justify="space-between" mb="sm">
        <Text fw={500} size="sm">
          {t(`${config.key}.label`)}
        </Text>
        <Badge>
          {t(`unit.${config.unit}`, { [config.unit]: inputProps.value })}
        </Badge>
      </Group>
      <Slider
        value={inputProps.value}
        onChange={inputProps.onChange}
        min={config.min}
        max={config.max}
        step={config.step}
        label={(val) => t(`unit.${config.unit}`, { [config.unit]: val })}
        w="100%"
        marks={(() => {
          const idealVal = config.ideal;
          const marks = [
            { value: config.min, label: t(`unit.${config.unit}`, { [config.unit]: config.min }) },
            { value: config.max, label: t(`unit.${config.unit}`, { [config.unit]: config.max }) },
          ];
          if (idealVal > config.min && idealVal < config.max) {
            marks.push({
              value: idealVal,
              label: t(`unit.${config.unit}`, { [config.unit]: idealVal }),
            });
          }
          return marks;
        })()}
        styles={{
          markLabel: { fontSize: "0.6rem" },
        }}
      />
    </Box>
  );
}
