import xmlhttprequest from "./helpers/xht.js";

const d = document,
    w = window;



export function DowlandFile(button,url,nameFile){
    
    const $file = d.querySelector(button);
    
    d.addEventListener("click", (e)=>{
        if(e.target === $file ){
            axios({
                url,
                method: 'GET',
                responseType: 'blob'
            })
                .then((response) => {
                      const url = window.URL.createObjectURL(new Blob([response.data]));
                      const link = d.createElement('a');
                      link.href = url;
                      link.setAttribute('download', nameFile);
                      d.body.appendChild(link);
                      link.click();
                      d.body.removeChild(link);
                })
        }   

    })
}


export function scrollTopBoton(btn){
    
    d.addEventListener("click",(e)=>{
        e.stopPropagation()
        if(e.target.matches(btn)){
            w.scrollTo({
                behavior: "smooth",
                top: 0,
                left: 0
            })
        }
    })
}

export function botonWhatsapp(contenedor,celular,mensaje){
    const $contenedor = d.querySelector(contenedor),
     lista = d.createElement("li"),
     enlace = d.createElement("a"),
     img = d.createElement("i");

    enlace.href = "https://wa.me/send?text="+encodeURIComponent(mensaje)+"&phone="+encodeURIComponent(celular)
    //enlace.href = `https://wa.me/${celular}`
    enlace.target= "_blank"
    lista.appendChild(enlace)
    img.classList = "uil uil-whatsapp"
    enlace.appendChild(img)

    $contenedor.appendChild(lista)
}




export function hamburguesa(btn){
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



export function anclas(){

    let elem = document.querySelector('div');
    let rect = elem.getBoundingClientRect();



}


export function ancla(btn,id){
    const $backEnd = d.getElementById("backEnd"),
    $frontEnd = d.getElementById("frontEnd"),
    $dataBases= d.getElementById("dataBases");


    let $elemento = d.getElementById(id);

   /*  $routesNav. */


    d.addEventListener("click",(e)=>{
        
        let _x =  $elemento.offsetTop,
        _y =  w.innerWidth,
        widht;

        _y <= 720 ? widht = 0 : widht = 84;


        if(e.target.matches(btn)){


            w.scrollTo({
                behavior: "smooth",
                top: _x - widht,
            })
            
            if(btn=== "#d-skills-back"){
                $backEnd.classList.add("active")
                $frontEnd.classList.remove("active")
                $dataBases.classList.remove("active")
            }

            if(btn === "#d-skills-front"){
                $frontEnd.classList.add("active")
                $backEnd.classList.remove("active")
                $dataBases.classList.remove("active")
            }
            
        } 
    })
}


export function changePanel(){
    
    const $backEnd = d.getElementById("backEnd"),
        $frontEnd = d.getElementById("frontEnd"),
        $dataBases= d.getElementById("dataBases");

    d.addEventListener("click", e =>{
/*         e.preventDefault()
        e.stopPropagation() */
        
        if(e.target.matches("#a-backEnd") ){
            
            $backEnd.classList.add("active")
            $frontEnd.classList.remove("active")
            $dataBases.classList.remove("active")
        }
        if(e.target.matches("#a-frontEnd")){
            
            $frontEnd.classList.add("active")
            $backEnd.classList.remove("active")
            $dataBases.classList.remove("active")
        }
        if(e.target.matches("#a-dataBases")){
            console.log($backEnd)
            $dataBases.classList.add("active")
            $frontEnd.classList.remove("active")
            $backEnd.classList.remove("active")
        }
    })
}


export function detectCard(){
    

    const allCards = d.querySelectorAll(".card");

    d.addEventListener("click",(e)=>{
        // console.log(e.target.querySelector("figcaption").textContent)
       
        allCards.forEach(el =>{

            if(el === e.target || el.children[1] ===e.target ||  el.children[2] === e.target){
                el.children[0].classList.toggle("nones")
                el.children[1].classList.toggle("nones")
                el.children[2].classList.toggle("nones")
                el.classList.toggle("padding0")
            }
        })
         

         
    })

}


export function projects(){

    const $body = d.querySelector("body");

    d.addEventListener("click", e => {
        if(e.target.matches(".btn a")){
            console.log( $body)
            e.preventDefault();
            xmlhttprequest({
                url: e.target.href,
                success: (html) => $body .innetHtml = html,
                error: (err) => $body.innerHTML = `<h1>${err} </h1>`
            })
        }
    })


}

