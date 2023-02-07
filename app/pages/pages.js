

const d = document;
    w = window;

function botonWhatsapp(contenedor,celular,mensaje){
    const $contenedor = d.querySelector(contenedor),
     lista = d.createElement("li"),
     enlace = d.createElement("a"),
     img = d.createElement("i");

    enlace.href = "https://wa.me/send?text="+encodeURIComponent(mensaje)+"&phone="+encodeURIComponent(celular)
    enlace.target= "_blank"
    lista.appendChild(enlace)
    img.classList = "uil uil-whatsapp"
    enlace.appendChild(img)

    $contenedor.appendChild(lista)
}


function hamburguesa(btn){
    const $hamburguesa = d.querySelector(btn),

     $menu = d.querySelector(".menu")

    d.addEventListener("click",(e)=>{
       
        if(e.target === $hamburguesa ){
            console.log($hamburguesa)

            $hamburguesa.firstElementChild.classList.toggle("none")
            $hamburguesa.lastElementChild.classList.toggle("none")
            $menu.classList.toggle("is-active")
        }

        d.addEventListener("click", (e)=>{
   /*          e.stopPropagation()
            e.preventDefault() */
            
            if(!e.target.matches(".menu li a")) return false
            /* console.log(e.target,"hola estoy aquí") */
            $hamburguesa.firstElementChild.classList.toggle("none")
            $hamburguesa.lastElementChild.classList.toggle("none")
            $menu.classList.toggle("is-active")
        })
        

    })

}



d.addEventListener("DOMContentLoaded",()=>{

    botonWhatsapp(".lista-redes-sociales","51977302181","hola nicoleta")

    hamburguesa(".menu-btn")

    

})

