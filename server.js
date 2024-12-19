const express = require("express");
const path = require("path");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

// ( Don't leak or else --> >:-/ )
const apiKey = "848610b769ef890614798b6b0b971080";

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/weather", async (req, res) => {
  const { location } = req.query;

  if (!location) {
    return res.status(400).send("Location is required");
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  try {
    const response = await axios.get(apiUrl);
    res.json(response.data);
  } catch (error) {
    if (error.response && error.response.status === 404) {
      res.status(404).send("Location not found");
    } else {
      console.error("Error fetching weather data:", error.message);
      res.status(500).send("Error fetching weather data");
    }
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
