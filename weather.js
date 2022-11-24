form.addEventListener('submit', (e) => {
    e.preventDefault();
    var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
    const weather = {
        1: { "18": "rainy" },
        2: { "32": "sunny" },
        3: { "23": "cloudy" },
        4: { "-5": "freezy" },
        5: { "18": "mid wind" },
        6: { "38": "hot" }
    }
    var selfWeather = weather[randomNumber1]
    const city = search.value;

    if (city) {
        addWeatherToPage(selfWeather)
    }
})
function addWeatherToPage(data) {
    const weather = document.createElement('div')
    weather.classList.add('weather');

    weather.innerHTML = `
          <h2>${Object.keys(data)}</h2>
          <small>${Object.values(data)}</small>
          `;
    main.innerHTML = "";
    main.appendChild(weather);
};
