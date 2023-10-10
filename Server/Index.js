const { app } = require("../Server/Server.js");

app.get("/listTeste", (req, res) => {
  try {
    res.json([
      {  id: "01",  "sala vermelha": "8", setor: "pra", qtd:'8' },
      {  id: "02",  "sala azul": "5", setor: "pra", qtd:'5' },
      {  id: "03",  "sala rosa":"4", setor: "pra",   qtd:'2' },
    ]);
  } catch (error) {
    console.log(error);
  }
});

app.listen(4000, () => {
  try {
    console.log("server rodando na porta: 4000");
  } catch (error) {
    console.log(error);
  }
});
