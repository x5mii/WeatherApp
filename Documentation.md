# Weather App Project Documentation
- **Lorenzo**
- **Samuel**

| Date     | Version | Summary                                                                                              |
|----------|---------|------------------------------------------------------------------------------------------------------|
| 08.11.2024 | 0.0.1   | We started to inform ourselves about the theme of our project and the API, which we would use. We created this GitHub repository and made new milsestones as well as issues.     |
| 15.11.2024 | 0.0.2   | We implemented the weather API succesfully and started to work on the HTML / CSS part of our project      |
| 22.11.2024 | 0.0.3   | We updated the UI of the Website and fixed some functional errors with the implementation of the map.      |
| 29.11.2024 | 0.0.4   | We started to dockerize our project, while also still trying to improve the front end aspect of our web page.      |
| 6.12.2024  | 0.0.5   |       |
| 13.12.2024 | 0.0.6   |       |
| 20.12.2024 | 0.1.0   |       |


## 1. Project Overview

### 1.1 WeatherApp

Our weather app is a responsive weather dashboard that allows users to search for weather data by city, displays real-time information using a free weather API, and stores recent searches in local storage, all within a Dockerized environment.

### 1.2 User Stories

| US-№ | Priority | Type            | Description                                                                                           |
|------|----------|-----------------|-------------------------------------------------------------------------------------------------------|
| 1    |  Must        |  Functional               | As a user, I want to search for weather data by entering a city name, so that I can get the current weather information for that location.                                                                                                      |
| 2    |  Must        |  Functional               | As a user, I want to use a free weather API (like OpenWeatherMap) to fetch real-time weather data, so that I can receive accurate and up-to-date information.                                                                                                      |
| 3    |  Must        |  Functional               | As a user, I want to have a responsive UI, so that I can easily navigate and view weather data.                                                                                                      |
| 4    |  Must        |  Functional               | As a user, I want to display weather data in a clean, user-friendly way, including temperature, humidity, and weather icons, so that I can quickly understand the weather conditions.                                                                                                      |
| 5    |  Must        |  Functional               | As a user, I want to save the last few searched locations in local storage, so that I can quickly reselect them without retyping.                                                                                                      |
| 6    |  Must        |  Functional               | As a developer, I want to set up a Docker container to serve the app using a lightweight web server (like Nginx or a simple Node.js server), so that the application can run efficiently in different environments.                                                                                                      |
| 7    |  Must        |  Functional               | As a developer, I want to create a Dockerfile to define the container and a docker-compose.yml file, so that it is easy to run the app locally and manage dependencies.                                                                                                      |
| 8    |  Can        |   Functional              | As a developer, I want to push my Docker image to Docker Hub, so that I can easily deploy the app on any Docker-compatible platform in the future.                                                                                                      |


### 1.3 Test Cases

| TC-№ | Initial State                                | Input                                         | Expected Output                                             |
|------|---------------------------------------------|-----------------------------------------------|--------------------------------------------------------------|
| 1.1    |  Weather app is loaded, no city selected.                                           |  Enter "London" in the search bar and submit.                                             |  Display current weather data for "London".                                                            |
| 1.2    |  Weather app is loaded, no city selected.                                           |  Enter invalid city name (e.g., "Xyz123") in search bar and submit.                                             |  Display error message "City not found".                                                            |
| 2.1    |  App is set up with API key for OpenWeatherMap.                                           |  Fetch weather for "New York".                                             |  API returns real-time weather data for "New York".                                                            |
| 2.2    |  App is set up with invalid API key.                                           |  Fetch weather for "New York".                                             |  Display error message "API authentication failed".                                                            |
| 3.1    |  App is opened on desktop browser.                                           |  Resize browser to test responsiveness.                                             |  UI elements adjust to screen size properly.                                                            |
| 3.2    |  App is opened on mobile browser.                                           |  View weather data page.                                             |  UI is displayed in a mobile-friendly layout.                                                            |
| 4.1    |  Weather data for a city is fetched.                                           |  View the weather page.                                             |  Displays temperature, humidity, and weather icon clearly.                                                            |
| 4.2    |  No weather data is fetched yet.                                           |  Load the app.                                             |  Show placeholder or no data message until data is fetched.                                                            |
| 5.1    |  Local storage is empty.                                           |  Search for "Paris".                                             |  "Paris" is saved in local storage.                                                            |
| 5.2    |  Local storage has prior searches.                                           |  Refresh the app.                                             |  Display previously searched cities in a list.                                                            |
| 5.3    |  List of saved searches is displayed.                                           |  Click on "Paris" from the list.                                             |  Display weather data for "Paris".                                                            |
| 6.1    |  Docker is installed, no container running.                                           |  Build and run the Docker container.                                             |  App is served using the specified web server.                                                            |
| 7.1    |  Docker and docker-compose are installed.                                           |  Run docker-compose up.                                             |  All services defined in docker-compose.yml are up and running.                                                            |
| 7.2    |  Docker is installed, no container images exist.                                           |  Build Docker image using Dockerfile.                                             |  Image is built successfully and can be run.                                                            |
| 8.1    |  Docker image is built locally.                                           |  Push image to Docker Hub.                                             |  Image is uploaded to Docker Hub successfully.                                                            |

### 1.4 Diagrams

![WEATHERAPP](https://github.com/user-attachments/assets/8e8e87af-9cf4-44d1-9673-c19189218b30)

## 2. Project Planning

| AP-№ | Deadline | Responsible | Description | Planned Time |
|------|----------|-------------|-------------|--------------|
| 1.A     |   15.11.2024       |  Samuel                |  Set up a functional front / back end program            |   180'              |
| 1.B     |   15.11.2024       |  Samuel / Lorenzo                | Implement the function inside of the HTML/ CSS and JS to enable the user to search for a specific city             |  120'               |
| 2.A     |   15.11.2024      |  Samuel                |  Search for a proper weatehr api that is free and suitable for our webpage            |  30'             |
| 2.B     |   15.11.2024       |  Samuel                |  Implement the api inside of our back end and test it with Postman or SWAGGER            |  60'              |
| 3.A     |   22.11.2024       |  Lorenzo                |  Make the css responsive by using % instead of and other methods            |  60'               |
| 4.A     |   22.11.2024        |  Lorenzo / Samuel                |  Study the layout of other weather apps and try to take inspirationn from them            |  30'               |
| 4.B     |   22.11.2024        |  Lorenzo / Samuel               |  Implement them inside of the HTML and CSS, also the JS to be able to display the data properly            |  120'               |
| 5.A     |   29.11.2024       |  Samuel                |  Find out the best way to store data, either through json local storage or through a DB           |  60'               |
| 5.B     |   29.11.2024       |  Lorenzo               |  Implement the inside of the JS logic            |  120'              |
| 6.A     |   13.12.2024       |  Samuel               |  Set up a docker container through node.js            |  120'              |
| 7.A     |   13.12.2024       |  Lorenzo                |  Create a docker file and a docker-compose.yml            |  120'              |
| 8.A     |   13.12.2024       |  Samuel / Lorenzo               |  Push export the docker image to DockerHub            |  60'              |

## 3. Implementation

| AP-№ | Date     | Responsible      | Planned Time | Actual Time     |
|------|----------|------------------|--------------|-----------------|
| 1.A  | 15.11.2024         |  Samuel                |  180'            |  300'              |
| 1.B  | 15.11.2024         |  Samuel / Lorenzo               |  120'            |  180'               |
| 2.A  | 15.11.2024         |  Samuel                |  30'            |  15'               |
| 2.B  | 15.11.2024         |  Samuel                |  60'            |  30'               |
| 3.A  | 22.11.2024         |  Lorenzo                |  60'            |  120'               |
| 4.A  | 22.11.2024         |  Lorenzo / Samuel                |  30'            |  30'               |
| 4.B  | 22.11.2024         |  Lorenzo / Samuel                |  120'            |  180'               |
| 5.A  | 29.11.2024         |  Samuel                |  60'            |  60'               |
| 5.B  | 29.11.2024         |  Lorenzo                |  120'            |  180'               |
| 6.A  | 13.12.2024         |  Samuel                |  120'           |  180'               |
| 7.A  | 13.12.2024         |  Lorenzo                |  120'            |  180'               |
| 8.A  | 13.12.2024         |  Samuel / Lorenzo                |  60'            |  30'               |

## 4. Test Report and Evaluation

### Test Report

| TC-№ | Test Status | Remarks                                                                 |
|------|-------------|-------------------------------------------------------------------------|
| 1.1  |             |                                                                         |

# 5. Evaluation
✍️ Add a link here to your learning report.
