const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// ADMIN LOGIN
const ADMIN_USER = "admin";
const ADMIN_PASS = "adminler2005";

// ADMIN LOGIN API
app.post("/admin/login", (req, res) => {
  const { user, pass } = req.body;
  res.json({ success: user === ADMIN_USER && pass === ADMIN_PASS });
});

// KOD FORMAT
function part() {
  return Math.random().toString(36).substring(2, 6).toUpperCase();
}

// KOD YARAT
app.post("/admin/generate", (req, res) => {
  const amount = Number(req.body.amount);
  const code = ${part()}-${part()}-${part()};

  const codes = fs.existsSync("codes.json")
    ? JSON.parse(fs.readFileSync("codes.json"))
    : [];

  codes.push({ code, amount, used: false });
  fs.writeFileSync("codes.json", JSON.stringify(codes, null, 2));

  res.json({ code });
});

// KOD İLƏ BALANS ARTIR
app.post("/redeem", (req, res) => {
  const { code } = req.body;

  const codes = JSON.parse(fs.readFileSync("codes.json"));
  const users = JSON.parse(fs.readFileSync("users.json"));

  const found = codes.find(c => c.code === code && !c.used);
  if (!found) return res.json({ error: "Kod etibarsızdır" });

  users[0].balance += found.amount;
  found.used = true;

  fs.writeFileSync("codes.json", JSON.stringify(codes, null, 2));
  fs.writeFileSync("users.json", JSON.stringify(users, null, 2));

  res.json({ success: true, balance: users[0].balance });
});

app.listen(5000, () =>
  console.log("QIZIL KAZINO backend işləyir (5000)")
);
