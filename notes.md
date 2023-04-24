# weather app

This app is build as part of The Odin Project curriculum.

The specifications for the project are as follows:

- allow user to search for a specific location
  - for empty data entered, show an error using form validation API
- show the weather for the location entered
  - change the look of the page depending on the data
    - change background color/ add some images that describe the weather
- allow user to toggle data between °F or °C

# How will I proceed with this project

I need to revist the SOLID lesson and incorporate this principle especially single responsibility i.e. make a function have a single responsibility only.

Here, I would need to fetch some data from outside source as well so a separate function for this as well

for now, I will do the following

- simply get the data from API using fetch or async
- console.log it to see the type of response and how I would show it.

24-03-2023

First, I need to study the weather API documentation to understand what type of data is returned by the API.

Looking into the API, it seems that I need to use the endpoint, forecast.json to get the forecast
of the entered location

The forecast data returned has both the °C and °F temperatures. This means that I just need to show one of these as a default, save the other for when user want to switch.

An image is also returned with the data in the API, I can use this to show image with the temperature.

- I used fetch to get API data (might change this to async later)
- Made a single text input to get city names to give to weather API on enter
- Looked up that when a form element doesnot have a submit button, submit event on the form element itself can be triggered when enter key is pressed. I used this to trigger API.
- When API response is received, I showed the following
  - The day's latest weather
  - Hourly weather forecast for current day

I need to now add some basic styling
Add button to change temperature from celcius to farenheit
In case of wrong input entered by user, show an appropriate error on the screen
Show a loading icon when a response is being awaited from server
