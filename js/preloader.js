document.body.onload = function() 
{
    const preloader = document.querySelector(".preloader");
    const bodyTag = document.body;

    bodyTag.classList.add("hidden");
    setTimeout(function()
    {
        if (preloader.classList.contains("done") === false)
        {
            preloader.classList.add("done");
            bodyTag.classList.remove("hidden");
        }
        new WOW().init(); //Инициализация бибилиотеки WOW.js
    }, 1500);
    
}