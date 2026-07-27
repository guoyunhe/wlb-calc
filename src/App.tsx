import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import React, { Suspense } from "react";
import Calculator from "./components/Calculator";
import Footer from "./components/Footer";
import { Center, Loader } from "@mantine/core";

const CompanyList = React.lazy(() => import("./components/CompanyList"));

function App() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("title")}</title>
        <meta name="description" content={t("description")} />
        <meta property="og:title" content={t("title")} />
        <meta property="og:description" content={t("description")} />
      </Helmet>
      <Calculator />
      <Suspense fallback={<Center h={300}><Loader /></Center>}>
        <CompanyList />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
