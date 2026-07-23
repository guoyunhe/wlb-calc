import { Title, Text, Button, Flex, Box, useMantineColorScheme } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { Sun, Moon } from "@phosphor-icons/react";

export default function Header() {
  const { t, i18n } = useTranslation();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "zh" ? "en" : "zh");
  };

  return (
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
          {colorScheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </Button>
      </Flex>
      <Text color="dimmed" size="lg">
        {t("subtitle")}
      </Text>
    </Box>
  );
}
