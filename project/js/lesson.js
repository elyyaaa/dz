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









