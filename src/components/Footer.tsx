import { Text, Anchor, Flex, Box } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { GithubLogo } from "@phosphor-icons/react";

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <Box p="md" mt="xl">
      <Flex align="center" justify="center" gap="sm">
        <Text color="dimmed" size="sm">
          {t("footer", { year: currentYear })}
        </Text>
        <Box />
        <Anchor
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          color="dimmed"
          size="sm"
          style={{ display: "flex", alignItems: "center", gap: "4px" }}
        >
          <GithubLogo size={18} />
          GitHub
        </Anchor>
      </Flex>
    </Box>
  );
}