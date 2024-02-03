// PHONE CHECKER

const phoneInput = document.querySelector('#phone_button');
const phoneButton = document.querySelector('#phone_button');
const phoneResult = document.querySelector('#phone_result');

const regExp = /^\+996 [2576]\d{2} \d{2}-\d{2}-\d{2}$/;
phoneButton.addEventListener('click',() =>{
    if(regExp.test(phoneInput.value)){
        phoneResult.innerHTML = 'OK'
        phoneResult.style.color = 'green'

    }else{
        phoneResult.innerHTML = 'NOT OK'
        phoneResult.style.color = 'red'
    }
});

// TAB SLIDER

const tabContents = document.querySelectorAll(".tab_content_block");
const tabItems = document.querySelectorAll(".tab_content_item");
const tabParents = document.querySelector(".tab_content_items");
const hideTabContent = () =>{
    tabContents.forEach((tabContent)=>{
        tabContent.style.display = "none"
    })
    tabItems.forEach(tabItem =>{
        tabItem.classList.remove("tab_content_item_active")
    })

};
const showTabContent  =(index = 0) =>{
    tabContents[index].style.display = "block"
    tabItems[index].classList.add("tab_content_item_active")
};
hideTabContent();
showTabContent();
tabParents.onclick = (event) =>{
    if (event.target.classList.contains("tab_content_item")){
        tabItems.forEach((tabItem, tabIndex)=>{
            if (event.target === tabItem){
                hideTabContent();
                showTabContent(tabIndex);
            }
        })
    }
}

let currentTabIndex = 0;
const totalTabs = tabItems.length;
const switchTab =() => {
    hideTabContent();
    currentTabIndex = (currentTabIndex + 1) % totalTabs;
    showTabContent(currentTabIndex);
    setTimeout(switchTab, 3000);
}

switchTab();

tabParents.onclick = (event) => {
    if (event.target.classList.contains("tab_content_item")) {
        const clickedTabIndex = Array.from(tabItems).indexOf(event.target);
        if (clickedTabIndex !== -1) {
            hideTabContent();
            currentTabIndex = clickedTabIndex;
            showTabContent(currentTabIndex);
        }
    }
};

// converter
const somInput = document.querySelector("#som");
const usdInput = document.querySelector("#usd");
const eurInput = document.querySelector("#eur");

const converter = async (element, targetElement1, targetElement2, currentValue) => {
    try {
        const response = await fetch(`../converter.json`);
        const data = await response.json();

        switch (currentValue) {
            case "som":
                targetElement1.value = (element.value / data.usd).toFixed(2);
                targetElement2.value = (element.value / data.eur).toFixed(2);
                break;
            case "usd":
                targetElement1.value = (element.value * data.usd).toFixed(2);
                targetElement2.value = (element.value * data.usd / data.eur).toFixed(2);
                break;
            case "eur":
                targetElement1.value = (element.value * data.eur).toFixed(2);
                targetElement2.value = (element.value * data.eur / data.usd).toFixed(2);
                break;
            default:
                break;
        }
        element.value === "" && (targetElement1.value = targetElement2.value = "");
    } catch (error) {
        console.error('Ошибка при выполнении запроса:', error);
    }
};

somInput.addEventListener('input', () => {
    converter(somInput, usdInput, eurInput, 'som');
});

usdInput.addEventListener('input', () => {
    converter(usdInput, somInput, eurInput, 'usd');
});

eurInput.addEventListener('input', () => {
    converter(eurInput, somInput, usdInput, 'eur');
});


// const converter = (element, targetElement, currentValue, targetCurrency) => {
//     element.oninput = () => {
//         const request = new XMLHttpRequest();
//         request.open("GET", "../converter.json");
//         request.setRequestHeader("Content-type", "application/json");
//         request.send();
//         request.onload = () => {
//             const data = JSON.parse(request.response);
//             let result;
//
//             switch (currentValue) {
//                 case "som":
//                     result = element.value * data.som;
//                     break;
//                 case "usd":
//                     result = element.value * data.usd;
//                     break;
//                 case "eur":
//                     result = element.value * data.eur;
//                     break;
//                 default:
//                     break;
//             }
//
//             switch (targetCurrency) {
//                 case "som":
//                     targetElement.value = (result / data.som).toFixed(2);
//                     break;
//                 case "usd":
//                     targetElement.value = (result / data.usd).toFixed(2);
//                     break;
//                 case "eur":
//                     targetElement.value = (result / data.eur).toFixed(2);
//                     break;
//                 default:
//                     break;
//             }
//             element.value === "" && (targetElement.value = "");
//         };
//     };
// };
//
// converter(somInput, usdInput, "som", "usd");
// converter(somInput, eurInput, "som", "eur");
//
// converter(usdInput, somInput, "usd", "som");
// converter(usdInput, eurInput, "usd", "eur");
//
// converter(eurInput, somInput, "eur", "som");
// converter(eurInput, usdInput, "eur", "usd");



// DRY - don't repeat yourself
// KISS - keep it simple,stupid
// SOLID - подходы

// card switcher

const card = document.querySelector(".card");
const btnPrev = document.querySelector("#btn-prev");
const btnNext = document.querySelector("#btn-next");
let count = 1;

// const fetchData = () => {
//     fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
//         .then(response => response.json())
//         .then(data => {
//             card.innerHTML = `
//                 <p>${data.title}</p>
//                 <p style="color:${data.completed ? "green" : "red"}">${data.completed}</p>
//                 <span>${data.id}</span>`;
//         });
// };
const fetchData = async ()=>{
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        const data = await response.json()
        card.innerHTML = `
            <p>${data.title}</p>
            <p style="color:${data.completed ? "green" : "red"}">${data.completed}</p>
            <span>${data.id}</span>`;
    }catch (error){
        console.log('Ошибка при выполнении запроса:', error)
    }
}

const updateCount = (newCount) => {
    if (newCount > 200) {
        count = 1;
    } else if (newCount < 1) {
        count = 200;
    } else {
        count = newCount;
    }
};

btnNext.onclick = () => {
    updateCount(count + 1);
    fetchData();
};

btnPrev.onclick = () => {
    updateCount(count - 1);
    fetchData();
};
fetchData();

// fetch
//  fetch(`https://jsonplaceholder.typicode.com/posts`)
// .then(response => response.json())
//     .then(data => {console.log("Posts Data:",data)})

// weather

const citySearchInput = document.querySelector(".cityName");
// const searchButton = document.querySelector("#search");
const cityName = document.querySelector(".city");
const cityTemp = document.querySelector(".temp");
const base_url = 'http://api.openweathermap.org/data/2.5/weather'
const api_Key = "e417df62e04d3b1b111abeab19cea714"

// query params

// const citySearch = ()=>{
//     citySearchInput.oninput = (event) =>{
//         fetch(`${base_url}?q=${event.target.value}&appid=${api_Key}`)
//             .then(response => response.json())
//             .then(data =>{
//               cityName.innerHTML = data.name ? data.name : "city not found..."
//               cityTemp.innerHTML = data.main?.temp ? Math.round(data.main?.temp - 273) + "&deg;C"  : "..."
//             })
//     }
// }
//
// citySearch()
const fetchWeatherData = async (city) => {
    try {
        const response = await fetch(`${base_url}?q=${city}&appid=${api_Key}`);

        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Произошла ошибка: ${error.message}`);
        throw error;
    }
};

const updateWeatherInfo = (data) => {
    cityName.innerHTML = data.name ? data.name : "Город не найден...";
    cityTemp.innerHTML = data.main?.temp ? Math.round(data.main?.temp - 273) + "&deg;C" : "...";
};

citySearchInput.addEventListener('input', async (event) => {
    try {
        const city = event.target.value;
        const weatherData = await fetchWeatherData(city);
        updateWeatherInfo(weatherData);
    } catch (error) {
        console.error('Что-то пошло не так при получении данных:', error.message);
    }
});
