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

export const links ={
    github: 'https://github.com/nickparedes',
    facebook: '',
    linkedin: 'https://www.linkedin.com/in/nickparedes/',
    mail:'',
    whatsapp:'',
    instagram:'',
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
        },
        skillsetComponent: {
            Title: 'Skillset',
            SubTitle: 'With skills in over 4 different fields of design, I am the perfect person to hire when it comes to a full fledged project. Whatever your needs are, I can pretty much take on any challenge.',
            Skills: [
                {img:'src/assets/logo/logo.png', name:'Product Design', description:'Working at Facebook has taught me a lot about how to understand users, solve problems and build great products.'},
                {img:'src/assets/logo/logo.png', name:'Product Design', description:'Working at Facebook has taught me a lot about how to understand users, solve problems and build great products.'},
                {img:'src/assets/logo/logo.png', name:'Product Design', description:'Working at Facebook has taught me a lot about how to understand users, solve problems and build great products.'},
                {img:'src/assets/logo/logo.png', name:'Product Design', description:'Working at Facebook has taught me a lot about how to understand users, solve problems and build great products.'},

            ],
            carrousel:[
                {img:'../../../../assets/logo/logo.png'},
                {img:'../../../../assets/logo/logo.png'},
                {img:'../../../../assets/logo/logo.png'},
                {img:'../../../../assets/logo/logo.png'},
            ],
            Technologies: [
                {img:'https://source.unsplash.com/collection/881002'},
                {img:'https://source.unsplash.com/collection/881002'},
                {img:'https://source.unsplash.com/collection/881002'},
                {img:'https://source.unsplash.com/collection/881002'},
            ]

        },
        myProjectsComponent:{
            Title: 'Work that I’ve done for the past 8 years',
            SubTitle:'MY PROJECTS',
            ListProjects1:[
                {img:'https://source.unsplash.com/collection/881002', title:'Project 1', description:'This is a project that I worked on for a client. It was a great experience and I learned a lot from it.'},
                {img:'https://source.unsplash.com/umchkHwkdyM', title:'Project 1', description:'This is a project that I worked on for a client. It was a great experience and I learned a lot from it.'},
            ],
            ListProjects2:[
                {img:'https://source.unsplash.com/daily', title:'Project 1', description:'This is a project that I worked on for a client. It was a great experience and I learned a lot from it.'},
                {img:'https://source.unsplash.com/category/nature/', title:'Project 1', description:'This is a project that I worked on for a client. It was a great experience and I learned a lot from it.'},
            ],
            ButtonText: 'View all projects',
        },
        icebreakersComponent: {
            Title: 'Work that I’ve done for the past 8 years',
            SubTitle:'MY PROJECTS',
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
        },
        skillsetComponent: {
            Title: 'Skillset',
            SubTitle: 'With skills in over 4 different fields of design, I am the perfect person to hire when it comes to a full fledged project. Whatever your needs are, I can pretty much take on any challenge.',
            Skills: [
                {img:'../../../../assets/logo/logo.png', name:'Product Design', description:'Working at Facebook has taught me a lot about how to understand users, solve problems and build great products.'},
                {img:'../../../../assets/logo/logo.png', name:'Product Design', description:'Working at Facebook has taught me a lot about how to understand users, solve problems and build great products.'},
                {img:'../../../../assets/logo/logo.png', name:'Product Design', description:'Working at Facebook has taught me a lot about how to understand users, solve problems and build great products.'},
                {img:'../../../../assets/logo/logo.png', name:'Product Design', description:'Working at Facebook has taught me a lot about how to understand users, solve problems and build great products.'},
                {img:'../../../../assets/logo/logo.png', name:'Product Design', description:'Working at Facebook has taught me a lot about how to understand users, solve problems and build great products.'},
                {img:'../../../../assets/logo/logo.png', name:'Product Design', description:'Working at Facebook has taught me a lot about how to understand users, solve problems and build great products.'},

            ],
            carrousel:[
                {img:'../../../../assets/logo/logo.png'},
                {img:'../../../../assets/logo/logo.png'},
                {img:'../../../../assets/logo/logo.png'},
                {img:'../../../../assets/logo/logo.png'},
            ],
            Technologies: [
                {img:'https://source.unsplash.com/collection/881002'},
                {img:'https://source.unsplash.com/collection/881002'},
                {img:'https://source.unsplash.com/collection/881002'},
                {img:'https://source.unsplash.com/collection/881002'},
                {img:'https://source.unsplash.com/daily'},
                {img:'https://source.unsplash.com/daily'}

            ]

        },
        myProjectsComponent:{
            Title: 'Work that I’ve done for the past 8 years',
            SubTitle:'MY PROJECTS',
            ListProjects1:[
                {img:'https://source.unsplash.com/collection/881002', title:'Project 1', description:'This is a project that I worked on for a client. It was a great experience and I learned a lot from it.'},
                {img:'https://source.unsplash.com/umchkHwkdyM', title:'Project 1', description:'This is a project that I worked on for a client. It was a great experience and I learned a lot from it.'},
            ],
            ListProjects2:[
                {img:'https://source.unsplash.com/daily', title:'Project 1', description:'This is a project that I worked on for a client. It was a great experience and I learned a lot from it.'},
                {img:'https://source.unsplash.com/category/nature/', title:'Project 1', description:'This is a project that I worked on for a client. It was a great experience and I learned a lot from it.'},
            ],
            ButtonText: 'View all projects',
        },
        icebreakersComponent: {
            Title: 'Work that I’ve done for the past 8 years',
            SubTitle:'MY PROJECTS',
        }
    }
}

export const img = {
    logo: 'assets/img/logo.png',
}