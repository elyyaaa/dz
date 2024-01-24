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

// somInput.addEventListener("input",()=>{

//
//     request.addEventListener("load",()=>{
//         const data = JSON.parse(request.response)
//         somInput.value = (usdInput.value * data.usd).toFixed(2)
//     })
// })

// const converter = (element,targetElement,currentValue) =>{
//     element.oninput = () =>{
//
//         const request = new XMLHttpRequest()
//         request.open("GET","../converter.json")
//         request.setRequestHeader("Content-type","application/json")
//         request.send()
//         request.onload = () =>{
//             const data = JSON.parse(request.response)
//             switch (currentValue){
//                 case "som":
//                     targetElement.value = (element.value / data.usd).toFixed(2)
//                     break
//                 case "usd":
//                     targetElement.value = (element.value * data.usd).toFixed(2)
//                     break
//                 case "eur":
//                     targetElement.value = (element.value * data.eur).toFixed(2)
//                     targetElement.value = (element.value / data.usd).toFixed(2)
//                     break
//                 default:
//                     break
//             }
//             // element.value === "" ? targetElement.value = ""
//             element.value === "" && (targetElement.value = "")
//
//         }
//     }
// }
// converter(somInput,usdInput,"som")
// converter(usdInput,eurInput,somInput,"usd","eur")
// converter(somInput,eurInput,"eur")
const converter = (element, targetElement, currentValue, targetCurrency) => {
    element.oninput = () => {
        const request = new XMLHttpRequest();
        request.open("GET", "../converter.json");
        request.setRequestHeader("Content-type", "application/json");
        request.send();
        request.onload = () => {
            const data = JSON.parse(request.response);
            let result;

            switch (currentValue) {
                case "som":
                    result = element.value * data.som;
                    break;
                case "usd":
                    result = element.value * data.usd;
                    break;
                case "eur":
                    result = element.value * data.eur;
                    break;
                default:
                    break;
            }

            switch (targetCurrency) {
                case "som":
                    targetElement.value = (result / data.som).toFixed(2);
                    break;
                case "usd":
                    targetElement.value = (result / data.usd).toFixed(2);
                    break;
                case "eur":
                    targetElement.value = (result / data.eur).toFixed(2);
                    break;
                default:
                    break;
            }
            element.value === "" && (targetElement.value = "");
        };
    };
};

converter(somInput, usdInput, "som", "usd");
converter(somInput, eurInput, "som", "eur");

converter(usdInput, somInput, "usd", "som");
converter(usdInput, eurInput, "usd", "eur");

converter(eurInput, somInput, "eur", "som");
converter(eurInput, usdInput, "eur", "usd");



// DRY - don't repeat yourself
// KISS - keep it simple,stupid
// SOLID - подходы







