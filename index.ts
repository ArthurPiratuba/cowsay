import express from "express";
import { exec } from "child_process";

const app = express();

app.get('/', (req, res) => {
  exec(`cowsay Bom dia da vaca!\n`, (err, stdout, stderr) => {
    res.end(stdout);
  });
});

app.listen(3000, () => {
  console.log("Vaquinha no ar");
});
