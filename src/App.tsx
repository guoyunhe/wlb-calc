import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import WLBCalculator from "./components/WLBCalculator";
import Footer from "./components/Footer";

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
      <WLBCalculator />
      <Footer />
    </>
  );
}

export default App;
