export const CardForecastStyle = (backgroundImage: string) => ({
  backgroundImage: `url("${backgroundImage}")`,
  backgroundSize: "cover",
  overflow: "hidden",
  width: "200px",
  height: "200px",
  margin: "20px",
  display: "flex",
  flexDirection: "column" as "column",
  border: "1px solid black",
});
