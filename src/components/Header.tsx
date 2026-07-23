import { Title, Text, Flex, Box, useMantineColorScheme, SegmentedControl } from "@mantine/core";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  return (
    <Box mb="xl" style={{ textAlign: "center" }}>
      <Title order={1} size="h1" mb="sm">
        {t("title")}
      </Title>
      <Text color="dimmed" size="lg" mb="sm">
        {t("subtitle")}
      </Text>
      <Flex justify="center" gap="md" align="center" wrap="wrap">
        <SegmentedControl
          value={i18n.language}
          onChange={(value) => i18n.changeLanguage(value)}
          data={[
            { value: "zh", label: t("language.zh") },
            { value: "en", label: t("language.en") },
          ]}
          size="sm"
        />
        <SegmentedControl
          value={colorScheme}
          onChange={(value) => setColorScheme(value as "light" | "dark" | "auto")}
          data={[
            { value: "light", label: t("theme.light") },
            { value: "dark", label: t("theme.dark") },
            { value: "auto", label: t("theme.auto") },
          ]}
          size="sm"
        />
      </Flex>
    </Box>
  );
}
