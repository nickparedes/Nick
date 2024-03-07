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
                { name: 'Home', path: ['/home'], id: "home" , active: false},
                { name: 'Sobre mi', path: ['/about'], id: "about", active: false},
                { name: 'Backend', path: ['/backend'], id: "backend" , active: false},
                { name: 'Frontend', path: ['/frontend'], id: "frontend", active: false},
                { name: 'Contacto', path:['/contact'], id: "contact-me",  active: true},
            ],
        },
        homeComponent: {
            titleHeading: 'Hola soy Nick Paredes',
            subTitleHeading: 'Un Ingeniero de Software',
            subTitleCountry: 'soy de Perú',
            Paragraph: '"Soy probablemente el ingeniero de software más apasionado con el que tendrás la oportunidad de trabajar. Si tienes un proyecto increíble que requiera habilidades extraordinarias, soy tu persona.',
        },

        workExperienceComponent: {
            subTitle: 'WORK EXPERIENCE',
            title: 'Companies I have worked for in the past.',
            works: [
                {id: '01', company: 'Google', position: 'Senior Software Engineer', endDate: '2019', startDate: 'Present', description: 'I currently am the lead designer on the interaction design team for Google Play.', color: 'red'},
                {id: '02', company: 'Tivit', position: 'Senior Software Engineer', endDate: '2019', startDate: 'Present', description: 'I currently am the lead designer on the interaction design team for Google Play.', color: 'blue'},
                {id: '03', company: 'Tivit', position: 'Senior Software Engineer', endDate: '2019', startDate: 'Present', description: 'I currently am the lead designer on the interaction design team for Google Play.', color: 'green'},
                
            ]
        },
        aboutComponent: {
            Title: 'Philosophy & values',
            SubTitle: 'I think everyone wants the same thing - relationship with humanity, peace with the metaphysical, and experience with the universe. I try to grasp these things with my values: authenticity, creativity, & hospitality.',
        }
    },
    english:{
        navBarComponent: {
            menuItem: [
                { name: 'Home', path: ['/home'], id: "home" , active: false},
                { name: 'About', path: ['/about'], id: "about", active: false},
                { name: 'Backend', path: ['/backend'], id: "backend" , active: false},
                { name: 'Frontend', path: ['/frontend'], id: "frontend", active: false},
                { name: 'Contact me', path:['/contact'], id: "contact-me",  active: true},
            ]
        },
        homeComponent: {
            titleHeading: 'I’m Robin Williams.',
            subTitleHeading: 'A product designer',
            subTitleCountry: 'based in Italy.',
            Paragraph: 'I’m probably the most passionate designer you will ever get to work with. If you have a great project that needs some amazing skills, I’m your guy.',
        },
        workExperienceComponent: {
            subTitle: 'WORK EXPERIENCE',
            title: 'Companies I have worked for in the past.',
            works: [
                {id: '01', company: 'Google', position: 'Senior Software Engineer', endDate: '2019', startDate: 'Present', description: 'I currently am the lead designer on the interaction design team for Google Play.', color: 'primary-color'},
                {id: '02', company: 'Tivit', position: 'Senior Software Engineer', endDate: '2019', startDate: 'Present', description: 'I currently am the lead designer on the interaction design team for Google Play.', color: 'primary-color'},
                {id: '03', company: 'Tivit', position: 'Senior Software Engineer', endDate: '2019', startDate: 'Present', description: 'I currently am the lead designer on the interaction design team for Google Play.', color: 'primary-color'},
           
            ]
        },
        aboutComponent: {
            Title: 'Philosophy & values',
            SubTitle: 'I think everyone wants the same thing - relationship with humanity, peace with the metaphysical, and experience with the universe. I try to grasp these things with my values: authenticity, creativity, & hospitality.',
        }
    }
}

export const img = {
    logo: 'assets/img/logo.png',
}