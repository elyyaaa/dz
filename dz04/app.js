const fetchData = async () => {
    try {
        const response = await fetch('persons.json');
        const data = await response.json();

        displayPersons(data);
    } catch (error) {
        console.error('Ошибка при выполнении запроса:', error);
    }
};
const displayPersons = (persons) => {
    const wrapper = document.querySelector('.wrapper');

    persons.forEach((person) => {
        const { name, clan, rank, photo } = person;

        const card = document.createElement('div');
        card.setAttribute('class', 'card');
        card.innerHTML = `
       <img src="${photo}" alt="">
      <h2>${name}</h2>
      <p>Clan: ${clan}</p>
      <p>Rank: ${rank}</p> `;
        wrapper.append(card);
    });
};

fetchData();
const xml = new XMLHttpRequest();

xml.onreadystatechange = () => {
    if (xml.readyState === XMLHttpRequest.DONE) {
        if (xml.status === 200) {
            const response = JSON.parse(xml.responseText);
            console.log(response);
        } else {
            console.error('Ошибка при загрузке JSON файла');
        }
    }
};

xml.open('GET', 'persons.json', true);
xml.setRequestHeader('Content-type', 'application/json');
xml.send();

