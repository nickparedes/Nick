
import { 
    DowlandFile, 
    scrollTopBoton,
    botonWhatsapp,
    hamburguesa, 
    ancla,
    changePanel,
    detectCard,
    projects
    
    } from "./App.js";


const d = document;

d.addEventListener("DOMContentLoaded",()=>{
    DowlandFile(".dowland-my-cv-btn","app/assets/CV-Paredes-Carranza-Nick.pdf","Cv-Nick-Paredes.pdf")
    botonWhatsapp(".lista-redes-sociales","51977302181","Encantado de conocerte, ¿Como te puedo ayudar?")

    ancla("#d-skills-back","skills");
    ancla("#d-skills-front","skills");
    ancla("#d-about","about");
    ancla(".see-my-project-btn","my-work");
    ancla("header .contact-me","form");
    changePanel();
    detectCard();



})



hamburguesa(".menu-btn")

scrollTopBoton(".inicio")




