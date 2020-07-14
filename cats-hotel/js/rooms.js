const roomsArray = [
    {
        images: {
            320: './img/rooms/room1.jpg',
            768: './img/rooms/room1_768.jpg',
            1366: './img/rooms/room1_1366.jpg'
        },
        name: 'Эконом',
        sizes: '90х70х180 см',
        area: '0,63 м2',
        roomEquipment: undefined,
        priceDay: '100'
    },
    {
        images: {
            320: './img/rooms/room2.jpg',
            768: './img/rooms/room2_768.jpg',
            1366: './img/rooms/room2_1366.jpg'
        },
        name: 'Эконом плюс',
        sizes: '90х100х180 см',
        area: '0,90 м2',
        roomEquipment: [
            ['Лежак', 'url'],
            ['Когтеточка', 'url']
        ],
        priceDay: '200'
    },
    {
        images: {
            320: './img/rooms/room6.jpg',
            768: './img/rooms/room6_768.jpg',
            1366: './img/rooms/room6_1366.jpg'
        },
        name: 'Эконом плюс',
        sizes: '90х100х180 см',
        area: '0,90 м2',
        roomEquipment: [
            ['Лежак', 'url'],
            ['Когтеточка', 'url']
        ],
        priceDay: '200'
    },
    {
        images: {
            320: './img/rooms/room3.jpg',
            768: './img/rooms/room3_768.jpg',
            1366: './img/rooms/room3_1366.jpg'
        },
        name: 'Комфорт',
        sizes: '100х125х180 см',
        area: '1,13 м2',
        roomEquipment: [
            ['Лежак', 'url'],
            ['Когтеточка', 'url'],
            ['Игровой Комплекс', 'url']
        ],
        priceDay: '250'
    },
    {
        images: {
            320: './img/rooms/room4.jpg',
            768: './img/rooms/room4_768.jpg',
            1366: './img/rooms/room4_1366.jpg'
        },
        name: 'Сьют',
        sizes: '125х125х180 см',
        area: '1,56 м2',
        roomEquipment: [
            ['Лежак', 'url'],
            ['Когтеточка', 'url'],
            ['Игровой-комплекс', 'url']
        ],
        priceDay: '350'
    },
    {
        images: {
            320: './img/rooms/room5.jpg',
            768: './img/rooms/room5_768.jpg',
            1366: './img/rooms/room5_1366.jpg'
        },
        name: 'Люкс',
        sizes: '160х160х180 см',
        area: '2,56  м2',
        roomEquipment: [
            ['Лежак', 'url'],
            ['Когтеточка', 'url'],
            ['Игровой Комплекс', 'url'],
            ['Домик', 'url']
        ],
        priceDay: '500'
    },
    {
        images: {
            320: './img/rooms/room7.jpg',
            768: './img/rooms/room7_768.jpg',
            1366: './img/rooms/room7_1366.jpg'
        },
        name: 'Супер-Люкс',
        sizes: '180х160х180 см',
        area: '2,88 м2',
        roomEquipment: [
            ['Лежак', 'url'],
            ['Когтеточка', 'url'],
            ['Игровой Комплекс', 'url'],
            ['Домик', 'url']
        ],
        priceDay: '600'
    }
];
// export default rooms;
// console.log(roomConteiner.children());


const roomConteiner = document.getElementById('rooms_body_conteiner');


const createRooms = (array) => {


    for (const room of array) {
        const images = room.images;
        const equipments = room.roomEquipment;
        let equipmentValue = '';

        if (equipments != undefined) {
            for (let i = 0; i < equipments.length; i++) {
                equipmentValue = equipments[i][0];
            }
        }
        else {
            equipmentValue = 'Без оснащения';
        }

        let img320 = images[320];
        let img768 = images[768];
        let img1366 = images[1366];

        roomConteiner.innerHTML +=
            `   <div class="rooms" data-price="${room.priceDay}" data-area="${room.area}" data-equipment="${equipmentValue}" >
                <picture>
                    <source media="(min-width: 1366px)" srcset="${img1366}" type="image/jpeg">
                    <source media="(min-width: 768px)" srcset="${img768}" type="image/jpeg">
                    <source media="(max-width: 767px)" srcset="${img320}" type="image/jpeg">
                    <img src="${img1366}" alt="cats-room" class="rooms_logo">
                </picture>
                <div class="rooms_conteiner">
                    <h3 class="title rooms_title">${room.name}</h3>
                    <span class="rooms_size_price">${room.sizes}</span>
                    <span class="rooms_size_price price_ex">${room.area}</span>
                    <span class="rooms_size_price price_ep">${room.priceDay}Р</span>
                    <button class="default_button button_col btn_pop-up" type="button">Забронировать</button>
                </div>
            </div> 
        `
    }

};
createRooms(roomsArray);



const btnConteiner = document.querySelector('.rooms_body_filter_btn_conteiner');
const rooms = document.querySelectorAll('.rooms');
let roomsHTMLCol = [];
for (let i = 0; i < rooms.length; i++) {
    roomsHTMLCol.push(rooms[i]);
}


btnConteiner.addEventListener('click', (e) => {
    const target = e.target;
    const checkers = document.querySelectorAll('.filter_area_box label');
    const lengRooms = document.querySelectorAll('.rooms').length;
    let checkedContent = [];
    let unCheckedContent = [];
    let result = '';

    if (target.id === 'btn_sort_push') {

        for (const item of checkers) {
            if (!item.control.checked) {

                roomsHTMLCol.filter(room => {
                    room.dataset.area === item.textContent; 
                });

            };
        }

        roomsHTMLCol.forEach(item => item.style.display = 'none');

        console.log(roomsHTMLCol);
    }

    if (target.id === 'btn_sort_cansel') {

        for (const item of checkers) {

            item.control.checked = true;
        }

    };
})







// for (let i = 0; i < checkers.length; i++) {

//     if (checkers[i].control.checked) {

//         checkedContent.push(checkers[i].textContent);

//         for (let j = 0; j < lengRooms; j++) {

//             checkedContent.forEach(it => {

//                 if (rooms[j].getAttribute('data-area') === it || rooms[j].getAttribute('data-equipment') === it) {

//                     rooms[j].style.display = 'block';

//                 }

//             });

//         }

//     }
//     else {
//         unCheckedContent.push(checkers[i].textContent);

//         for (let j = 0; j < lengRooms; j++) {

//             unCheckedContent.forEach(it => {

//                 if (rooms[j].getAttribute('data-area') === it || rooms[j].getAttribute('data-equipment') === it) {

//                     rooms[j].style.display = 'none';

//                 }

//             });

//         }
//     }
// }
// $('.filter_wrapper').removeClass('filter_wrapper_active');
//         $('body').removeAttr("style", "overflow: hidden");







// let dataArea = '';
//         let dataEquirment = '';
//         let thisRoom = '';

//         for (let j = 0; j < lengRooms; j++) {
//             dataArea = $('.rooms')[j].attr('data-area');
//             dataEquirment = $('.rooms')[j].attr('data-equipment');
//             thisRoom = $('.rooms')[j];
//         }

//         for (let i = 0; i < checkers.length; i++) {
//             console.log(dataEquirment);
//             if (checkers[i].control.checked) {
//                 if (checkers[i].textContent === dataArea
//                     || checkers[i].textContent === dataEquirment) {
//                         thisRoom.css('display', 'block')
//                 }
//             }
//             else {
//                 if (checkers[i].textContent === dataArea
//                     || checkers[i].textContent === dataEquirment) {

//                 }
//             }
//         }



        // if (target.id === 'btn_sort_push') {
        //     for (const roomItem of roomsConteiner) {
        //         items = roomItem;
        //         for (const item of checkers) {
        //             if (item.checked) {
        //                 const nextNodeValue = item.nextElementSibling.value;
        //                 if (nextNodeValue === roomItem.hasAttribute('data-area').value) {
        //                     roomItem.style.display = "block";
        //                 }



        //             } else if (item.checked === false) {

        //                 const nextNodeValue = item.nextElementSibling.value;

        //                 if (nextNodeValue === roomItem.hasAttribute('data-area').value) {

        //                     roomItem.style.display = "none";
        //                 }
        //                 roomItem.style.display = "none";
        //             }

        //         }
        //     }

        // }
        // else if (target.id === 'btn_sort_cansel') {
        //     for (const item of checkers) {
        //         item.checked = true;
        //     }
        // }