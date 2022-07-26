// задание 1

const xmlList = `<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`

const parser = new DOMParser();

const xmlDOM = parser.parseFromString(xmlList, "text/xml");

const students = xmlDOM.querySelectorAll("student");
const names = xmlDOM.querySelectorAll("name");
const firstNames = xmlDOM.querySelectorAll("first");
const lastNames = xmlDOM.querySelectorAll("second");
const ages = xmlDOM.querySelectorAll("age");
const profs =  xmlDOM.querySelectorAll("prof");

const objFromXml = {};
objFromXml.list = [];
students.forEach((item, index) => {
    objFromXml.list[index] = {
        name: `${firstNames[index].textContent} ${lastNames[index].textContent}`,
        age: ages[index].textContent,
        prof: profs[index].textContent,
        lang: names[index].getAttribute('lang')
    };
})


console.log(typeof objFromXml, objFromXml, ' objFromXml');

//задание 2

const jsonString = `{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}`;

const data = JSON.parse(jsonString);

console.log(data.list.length)

const result = {};
result.list = [];

for (let i = 0; i < data.list.length; i++) {
    result.list[i] = {
        name: data.list[i].name,
        age: data.list[i].age,
        prof: data.list[i].prof
    }
}

console.log(typeof result, result, ' result');

//задание 3

const formSubmit = document.querySelector('.btn-submit');



function useRequest(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
        if (xhr.status !== 200) {
            console.log('Статус ответа: ', xhr.status);
        } else {
            const result = JSON.parse(xhr.response);
            if (callback) {
                callback(result);
                console.log(result, ' result')
            }
        }
    };

    xhr.onerror = function() {
        console.log('Ошибка! Статус ответа: ', xhr.status);
    };

    xhr.send();
}


const imgBlock = document.querySelector('.img-block');
const number = document.getElementById('number');




function displayResult(apiData) {
    if (number.value > 10) {
        imgBlock.innerHTML = `<p class="col">Введите число меньше 10</p>`;
        return;
    }
    imgBlock.innerHTML = '';
    let cards = '';

    apiData.forEach(item => {
        const cardBlock = `
      <div class="card">
        <img
          src="${item.download_url}"
          class="card-image"
         alt=""/>
        <p>${item.author}</p>
      </div>
    `;
        cards = cards + cardBlock;
    });

    imgBlock.innerHTML = cards;
    number.value = '';
}

formSubmit.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    useRequest(`https://picsum.photos/v2/list/?limit=${number.value}`, displayResult);
})



//задание 4

const btn = document.querySelector('.btn-submit-1');


const param1 = document.getElementById('number-1');
const param2 = document.getElementById('number-2');
const imgBlock1 = document.querySelector('.img-block-1');
const form1 = document.querySelector('.form-1');

function displayImg(res, width, height) {
    if (param1.value < 100 &&  param1.value > 300|| param2.value < 100 &&  param2.value > 300) {
        imgBlock1.innerHTML = `<p class="col">Введите число меньше 10</p>`;
        return;
    }

    imgBlock1.innerHTML = '';
    imgBlock1.innerHTML = `
      <div class="card" style="width: ${width}px;height: ${height}px">
        <img
          src="${res.url}"
          class="card-image"
         alt=""/>
        <p>Фото ${width} x ${height}</p>
      </div>
    `;
}


btn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(param1.value, param2.value, ' params')

    if (param1.value < 100 || param1.value > 300|| param2.value < 100 ||  param2.value > 300) {
        imgBlock1.innerHTML = `<p class="col">Введите число в диапазоне 100-300</p>`;
    } else {
        console.log('Я здесь')
        // Настраиваем наш запрос
        const options = {
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
        }

        // Делаем запрос за данными
        fetch(`https://picsum.photos/${param1.value}/${param2.value}`, options)
            .then(res => {
                console.log(res, ' res');
                displayImg(res, param1.value, param2.value);
            })
            .catch(() => {
                imgBlock1.innerHTML = 'Попробуй еше раз';
            })
    }

});

/////////////////////////////////////////////////
// 5 задание


const btnSubmit5 = document.querySelector('.btn-submit-5-1');


const numberOfPage = document.getElementById('number-5-1');
const limit = document.getElementById('number-5-2');
const imgBlock5 = document.querySelector('.img-block-5');
const form5 = document.querySelector('.form-5');

let pages;
let limits;


if (localStorage.length) {
    pages = localStorage.getItem('pages');
    limits = localStorage.getItem('limits');
    fetchRequest(pages, limits);
}

function fetchRequest(pages, limits) {
    const options = {
        method: 'GET',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
    };

    fetch(` https://picsum.photos/v2/list?page=${pages}&limit=${limits}`, options)
        .then(res => {
            return res.json();
        })
        .then(data => {
            imgBlock5.innerHTML = '';
            let cards = '';
            data.forEach(item => {
                const cardBlock = `
                  <div class="card">
                    <img
                      src="${item.download_url}"
                      class="card-image"
                     alt=""/>
                    <p>${item.author}</p>
                  </div>
    `;
                cards = cards + cardBlock;
            });

            imgBlock5.innerHTML = cards;
        })
        .catch(err => {
            console.log(err.message)
            imgBlock5.innerHTML = 'Что-то пошло не так. Попробуйте еще раз'
        })
}

numberOfPage.addEventListener('change', () => {
    pages = numberOfPage.value;
    localStorage.setItem('pages', pages);
})

limit.addEventListener('change', () => {
    limits = limit.value;
    localStorage.setItem('limits', limits);
})

function displayImages (pages, limits) {
    console.log(pages, ' pages');
    console.log(limits, ' limits');

    if ((pages < 1 || pages > 10) && (limits < 1 || limits > 10)) {
        imgBlock5.innerHTML = `<p class="col">Номер страницы и лимит вне диапазона от 1 до 10</p>`;
        return;
    }

    if (pages < 1 || pages > 10) {
        imgBlock5.innerHTML = `<p class="col">Номер страницы вне диапазона от 1 до 10</p>`;
        return;
    }

    if (limits < 1 || limits > 10) {
        imgBlock5.innerHTML = `<p class="col">Лимит вне диапазона от 1 до 10</p>`;
        return;
    }

    fetchRequest(limits, pages);
}



btnSubmit5.addEventListener('click', async e => {
    e.preventDefault();
    e.stopPropagation();
    displayImages(pages, limits)
});
