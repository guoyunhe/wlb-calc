import { Title, Text, Flex, Box, useMantineColorScheme, SegmentedControl } from "@mantine/core";
import { SunIcon, MoonIcon, MonitorIcon } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  return (
    <Box mb="md" style={{ textAlign: "center" }}>
      <Title order={1} size="h1" mb="sm">
        {t("title")}
      </Title>
      <Text color="dimmed" size="md" mb="sm">
        {t("subtitle")}
      </Text>
      <Flex justify="center" gap="xs" align="center" wrap="wrap">
        <SegmentedControl
          value={i18n.language}
          onChange={(value) => i18n.changeLanguage(value)}
          data={[
            { value: "zh", label: "🇨🇳 中文" },
            { value: "en", label: "🇬🇧 English" },
          ]}
          size="xs"
        />
        <SegmentedControl
          value={colorScheme}
          onChange={(value) => setColorScheme(value as "light" | "dark" | "auto")}
          data={[
            {
              value: "light",
              label: (
                <Flex align="center" gap="xs">
                  <SunIcon /> {t("theme.light")}
                </Flex>
              ),
            },
            {
              value: "dark",
              label: (
                <Flex align="center" gap="xs">
                  <MoonIcon /> {t("theme.dark")}
                </Flex>
              ),
            },
            {
              value: "auto",
              label: (
                <Flex align="center" gap="xs">
                  <MonitorIcon /> {t("theme.auto")}
                </Flex>
              ),
            },
          ]}
          size="xs"
        />
      </Flex>
    </Box>
  );
}
