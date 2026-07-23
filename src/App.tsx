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
      </Helmet>
      <WLBCalculator />
      <Footer />
    </>
  );
}

export default App;
