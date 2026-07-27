export default interface Level {
  key: string;
  minScore: number;
  color: string;
  labelKey: string;
  bg: {
    light: string;
    dark: string;
  };
  textColor: {
    light: string;
    dark: string;
  };
}
