document.addEventListener("DOMContentLoaded", function() 
{
    window.addEventListener("load", function() 
    {
        const shopCartButton = this.document.querySelector(".shop-cart");
        const modal = this.document.querySelector(".modal");
        const modalClose = this.document.getElementById("modal-close");
        const cancelBtn = this.document.querySelector(".button__cancel");
        const body = this.document.body;

        shopCartButton.addEventListener("click", openModal);
        modalClose.addEventListener("click", closeModalByCross);
        cancelBtn.addEventListener("click", closeModalByBtn);
        modal.addEventListener("click", modalOutClose);
        
        function openModal()
        {
            modal.classList.add("modal__is-open");
            body.style.overflowY = "hidden";
        }
        function closeModalByCross()
        {   
            modal.classList.remove("modal__is-open"); 
            body.style.overflowY = "visible";
        }
        function closeModalByBtn ()
        {
            modal.classList.remove("modal__is-open"); 
            body.style.overflowY = "visible";   
        }
        function modalOutClose(event)
        {
            if (event.target === modal)
            {
                modal.classList.remove("modal__is-open"); 
                body.style.overflowY = "visible"; 
            }
            
        }
    });
});