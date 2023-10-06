const {app} = require('./Server');

app.listen(4000, () => {
    try {
      console.log("server rodando na porta: 4000");
    } catch (error) {
      console.log(error);
    }
  });
