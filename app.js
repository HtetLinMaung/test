const express = require("express");

app = express();

app.use(express.json());

app.get("/test", (req, res) => {
  res.json({ message: "hello from test app" });
});

app.listen(6001, console.log(`Server runing on port ${6001}`));
