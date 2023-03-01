document.addEventListener("DOMContentLoaded", function() 
{
    window.addEventListener("load", function() 
    {
        const logIn = this.document.querySelector(".log-in");
        const windowClose = this.document.querySelector(".window-close");
        const auth = this.document.querySelector(".auth");
        const body = this.document.body;

        logIn.addEventListener("click", authOpen);
        windowClose.addEventListener("click", authClose);
        auth.addEventListener("click", authOutClose);
        
        function authOpen()
        {
            auth.classList.toggle("auth-open");
            body.style.overflowY = "hidden";
        }
        function authClose()
        {
            auth.classList.toggle("auth-open");
            body.style.overflowY = "visible";
        }
        function authOutClose(event)
        {
            if (event.target === auth)
            {
                auth.classList.remove("auth-open"); 
                body.style.overflowY = "visible"; 
            }
            
        }
    });
});