import { SimpleGrid, Text, Space, Container, Select, Box } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { useState, useMemo, useEffect } from "react";
import { BuildingIcon } from "@phosphor-icons/react";
import { COMPANIES, REGIONS } from "../companies";
import calc from "../calc";
import CompanyCard from "./CompanyCard";

export default function CompanyList() {
  const { t, i18n } = useTranslation();
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");

  useEffect(() => {
    if (i18n.language === "zh") {
      setSelectedRegion("CN");
    } else {
      setSelectedRegion("US");
    }
  }, [i18n.language]);

  const filteredCompanies = useMemo(() => {
    return COMPANIES.filter((company) => {
      const scorePass = calc(company.params) > 80;
      const regionPass = !selectedRegion || company.region === selectedRegion;
      const cityPass = !selectedCity || company.city === selectedCity;
      return scorePass && regionPass && cityPass;
    });
  }, [selectedRegion, selectedCity]);

  const citiesForRegion = useMemo(() => {
    if (!selectedRegion) {
      return [];
    }
    const region = REGIONS.find((r) => r.code === selectedRegion);
    return region ? region.cities : [];
  }, [selectedRegion]);

  const handleRegionChange = (value: string | null) => {
    setSelectedRegion(value || "");
    setSelectedCity("");
  };

  return (
    <Container size="md" py="xl">
      <Space h="xl" />
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem" }}>
        <BuildingIcon size={24} />
        <Text component="h2" size="xl" fw="bold">
          {t("companyList.title")}
        </Text>
      </div>
      <Text color="dimmed" mb="lg">
        {t("companyList.subtitle")}
      </Text>

      <Box mb="lg">
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "flex-end" }}>
          <div style={{ flex: "1", minWidth: "150px", maxWidth: "200px" }}>
            <Text size="sm" color="dimmed" mb="xs">
              {t("companyList.filter.region")}
            </Text>
            <Select
              data={REGIONS.map((region) => ({
                value: region.code,
                label: t(region.labelKey),
              }))}
              value={selectedRegion}
              onChange={handleRegionChange}
              size="md"
              placeholder={t("companyList.filter.region")}
            />
          </div>
          <div style={{ flex: "1", minWidth: "150px", maxWidth: "200px" }}>
            <Text size="sm" color="dimmed" mb="xs">
              {t("companyList.filter.city")}
            </Text>
            <Select
              data={[
                { value: "", label: t("companyList.filter.all") },
                ...citiesForRegion.map((city) => ({ value: city, label: city })),
              ]}
              value={selectedCity}
              onChange={(value) => setSelectedCity(value || "")}
              disabled={!selectedRegion}
              size="md"
              placeholder={t("companyList.filter.city")}
            />
          </div>
        </div>
      </Box>

      <SimpleGrid cols={{ sm: 1, md: 2, lg: 4 }} spacing="md">
        {filteredCompanies.map((company) => (
          <CompanyCard key={company.id} company={company} score={calc(company.params)} />
        ))}
      </SimpleGrid>

      {filteredCompanies.length === 0 && (
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <Text color="dimmed">{t("companyList.empty")}</Text>
        </div>
      )}
    </Container>
  );
}
