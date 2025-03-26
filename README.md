<h1 align="center">
  <br>
  <img src="https://cdn-icons-png.flaticon.com/512/1779/1779940.png" alt="Global Dashboard Logo" width="120">
  <br>
  Global Dashboard
  <br>
</h1>

<p align="center">
  <i>Global Dashboard is a lightweight, real-time web application that aggregates weather data and top news headlines using public APIs. It is fully containerized using Docker and designed for educational use in full-stack development.</i>
</p>

---

## 📋 Table of Contents

- [Introduction](#introduction)  
- [Prerequisites](#prerequisites)  
- [Running the Application](#running-the-application)  
- [API Endpoints](#api-endpoints)  
- [Usage](#usage)  
- [Authors](#authors)  


---

## 🛠 Introduction

**Global Dashboard** was developed as part of **INFT 2201 – Assignment 2 (Winter 2025)**. This full-stack project demonstrates how to:

- Consume multiple public APIs
- Build a custom backend using Node.js and Express
- Create a responsive frontend using plain HTML and JavaScript
- Containerize both services using Docker and orchestrate them with Docker Compose

**APIs used**:
- OpenWeatherMap API (for live weather updates)
- NewsAPI (for top headlines)

---

## ⚙️ Prerequisites

Ensure the following tools are installed on your system before running the app:

- [Docker](https://www.docker.com/)  
- [Docker Compose](https://docs.docker.com/compose/)  
- [VS Code (optional)](https://code.visualstudio.com/)  
- Internet connection (to fetch live data from APIs)

---

## 🚀 Running the Application

Follow these steps to start the application:

1. **Clone or download the project**  
   ```bash
   cd C:\weather

2. **Start the application using Docker Compose**
    ```bash
    docker-compose up --build
    ```
    This will build and launch both the backend and frontend services defined in docker-compose.yml.
    
3. **Access the application in your browser:**

    - Frontend: http://localhost:8080

    - Backend API: http://localhost:3001/api/data?city=Toronto

---

## 📚 API Endpoints

## 🌤 Weather + 📰 News Aggregator

- **Get Weather and News**
  ```http
  GET /api/data?city=Toronto
  ```

- **Query Parameter:**

  - city: City name for the weather API (default is Toronto)

- **Response:**
  ```json
  {
    "weather": {
      "main": {
        "temp": 2.14,
        "humidity": 60
      },
      "weather": [
        {
          "description": "overcast clouds"
        }
      ]
    },
    "news": [
      {
        "title": "Breaking News Headline 1",
        "url": "https://example.com/article1"
      },
      ...
    ]
  }

---

## 💻 Usage

## Dashboard Features
**Weather section displays:**
  - Temperature
  - Weather condition (e.g., "broken clouds")

**News section shows:**
  - Top 5 news headlines fetched from NewsAPI
  - Simple, clean user interface
  - Runs fully in Docker containers

---

## 👨‍💻 Authors
  - **Mehul Jodhani**
  - INFT 2201 – Assignment 2 (Winter 2025)
  - Durham College

