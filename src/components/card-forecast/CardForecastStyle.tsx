export const CardForecastStyle = (backgroundImage: string) => ({
  backgroundImage: `url("${backgroundImage}")`,
  backgroundSize: "cover",
  overflow: "hidden",
  width: "150px",
  height: "150px",
  margin: "20px",
  display: "flex",
  flexDirection: "column" as "column",
  border: "1px solid black",
  fontSize: 20,
  textShadow: '2px 2px #000000',
  color: '#FFFFFF'
});
