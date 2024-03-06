export const theme = {
    light: 'light',
    dark: 'dark',
    default: 'theme'
}

export const language = {
    spanish: 'spanish',
    english: 'english',
    default: 'language'

}


export const text = {
    spanish :{
        navBarComponent: {
            menuItem: [
                { name: 'Home', path: ['/home'], id: "home" , active: true},
                { name: 'Sobre mi', path: ['/about'], id: "about", active: false},
                { name: 'Backend', path: ['/backend'], id: "backend" , active: false},
                { name: 'Frontend', path: ['/frontend'], id: "frontend", active: false},
                { name: 'Contacto', path:['/contact'], id: "contact-me",  active: false},
            ],
        },
        homeComponent: {
            titleHeading: 'Hola soy Nick Paredes',
            subTitleHeading: 'Un Ingeniero de Software',
            subTitleCountry: 'soy de Perú',
            Paragraph: '"Soy probablemente el ingeniero de software más apasionado con el que tendrás la oportunidad de trabajar. Si tienes un proyecto increíble que requiera habilidades extraordinarias, soy tu persona.',
        }



    },
    english:{
        navBarComponent: {
            menuItem: [
                { name: 'Home', path: ['/home'], id: "home" , active: true},
                { name: 'About', path: ['/about'], id: "about", active: false},
                { name: 'Backend', path: ['/backend'], id: "backend" , active: false},
                { name: 'Frontend', path: ['/frontend'], id: "frontend", active: false},
                { name: 'Contact me', path:['/contact'], id: "contact-me",  active: false},
            ]
        },
        homeComponent: {
            titleHeading: 'I’m Robin Williams.',
            subTitleHeading: 'A product designer',
            subTitleCountry: 'based in Italy.',
            Paragraph: 'I’m probably the most passionate designer you will ever get to work with. If you have a great project that needs some amazing skills, I’m your guy.',
        }
    }
}

export const img = {
    logo: 'assets/img/logo.png',
}