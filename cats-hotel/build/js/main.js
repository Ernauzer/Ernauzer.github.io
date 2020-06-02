$('.hamburger_link').click(function (event) {
    event.preventDefault();
    $('.nav').toggleClass('menu_active').slideToggle(500);
    $('.hamburger_link').toggleClass('active');
    // if ($('nav').hasClass('menu_active')) {
    //     $("body").attr("style","overflow: hidden");
    // }
    // else {
    //     $("body").removeAttr("style","overflow: hidden");
    // }
    $('nav').hasClass('menu_active') 
        ? $("body").attr("style","overflow: hidden") 
        : $("body").removeAttr("style","overflow: hidden");
});



// import rooms from "./rooms.js";
// const conteiner = document.querySelector('.rooms_wrapper');

// const createRooms = (array) => {

//     for (const room of array) {
//         const images = room.images;

//         let img320 = images[320];
//         let img768 = images[768];
//         let img1366 = images[1366];


//         conteiner.innerHTML +=
//         `   <div class="rooms">
//                 <picture>
//                     <source media="(min-width: 1366px)" srcset="${img1366}" type="image/jpeg">
//                     <source media="(min-width: 768px)" srcset="${img768}" type="image/jpeg">
//                     <source media="(max-width: 767px)" srcset="${img320}" type="image/jpeg">
//                     <img src="${img1366}" alt="cats-room" class="rooms_logo">
//                 </picture>
//                 <div class="rooms_conteiner">
//                     <h3 class="title rooms_title">${room.name}</h3>
//                     <span class="rooms_size_price">${room.sizes}</span>
//                     <span class="rooms_size_price price_ex">${room.area}</span>
//                     <span class="rooms_size_price price_ep">${room.priceDay}Р</span>
//                     <button class="default_button button_col" type="button">Забронировать</button>
//                 </div>
//             </div> 
//         `

//     }

// };
// createRooms(rooms);
