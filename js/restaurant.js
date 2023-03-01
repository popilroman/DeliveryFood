$(document).ready(function() {
    
    var  shopCartButton = $(".shop-cart"); //Переменная хранит ссылку на класс кнопки


    //Функция, которая добавляет и удаляет классы 
    function openModal () {
        $(".modal").toggleClass("modal__is-open"); //Находим класс .modal и добавляем к нему класс modal__is-open
        $("body").toggleClass("scroll-locked"); //Находим тэг body и добавляем к нему класс scroll-locked
    }

    shopCartButton.on("click", openModal); //Функция срабатывает при клике на содержимое переменной shopCartButton
    $(".modal__close").on("click", openModal);
    $(".button__cancel").on("click", openModal);


});