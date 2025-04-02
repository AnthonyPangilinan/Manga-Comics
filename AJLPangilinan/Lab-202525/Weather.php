<?php

$apiKey = "your_api_key_here"; // Replace with your OpenWeatherMap API key
$city = "Manila";
$apiUrl = "https://api.openweathermap.org/data/2.5/weather?q={$city}&appid={$apiKey}&units=metric";

$response = file_get_contents($apiUrl);

if ($response === FALSE) {
    die("Error fetching weather data.");
}

$data = json_decode($response, true);

if ($data["cod"] != 200) {
    die("Error: " . $data["message"]);
}

echo "Weather in " . $data["name"] . ": " . $data["weather"][0]["description"] . "\n";
echo "Temperature: " . $data["main"]["temp"] . "°C\n";
echo "Humidity: " . $data["main"]["humidity"] . "%\n";
echo "Wind Speed: " . $data["wind"]["speed"] . " m/s\n";

?>