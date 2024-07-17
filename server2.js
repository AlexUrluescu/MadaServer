const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3005;

app.use(bodyParser.json());
app.use(cors());

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Logare fictivă
  if (username === "user" && password === "pass") {
    res.json({
      name: "ZeulIisus1",
      summonerLevel: 30,
      id: "fictitious-summoner-id",
      maps: [
        {
          name: "Split",
          image:
            "https://diamondlobby.com/wp-content/uploads/2020/08/Valorant-Split-Feature-Image.jpg",
          wins: 30,
          losses: 10,
          draws: 0,
        },
        {
          name: "Icebox",
          image:
            "https://specials-images.forbesimg.com/imageserve/5f7c8b688164f9c22dbe6f5c/960x0.jpg?fit=scale",
          wins: 40,
          losses: 11,
          draws: 0,
        },
        {
          name: "Ascent",
          image:
            "https://dotesports.com/wp-content/uploads/2020/06/09091543/Ascent-2-1.png?resize=768,400",
          wins: 50,
          losses: 20,
          draws: 3,
        },
      ],
    });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

app.listen(PORT, () => {
  console.log(`Serverul a pornit pe portul ${PORT}`);
});
