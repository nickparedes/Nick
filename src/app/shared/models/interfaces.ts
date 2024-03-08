export interface CardWorkExperience {
    id: string, 
    company: string, 
    position: string, 
    startDate: string,
    endDate: string, 
    description: string, 
    color: string,
}

export interface CardSkillSet{
    img: string,
    name: string,
    description: string,
}

export interface menuItem{
    name: string,
    path: string[],
    id: string,
    active: boolean,
}

export interface CardProject{
    img: string,
    title: string,
    description: string,
}

export interface Feedback{
    image:string;
    starRating:number;
    feedback:string;
    name:string;
    designation:string;
    country:string;
  }

export interface Client{
    clientImage:string;
}

export class Course{
    name:string = '';
    thumbnail:string = '';
    author:string = '';
    authorImage:string = '';
    category:string = '';
    hours:string = '';
    lectures:number = 0;
    price:number = 0;
    offerPrice:number|null = null;
    rating:number=0;
}

export class SlideConfig {
    breakpoints: {
        sm: number, md: number, lg: number, xl: number
    } = { sm: 1, md: 2, lg: 3, xl: 5 }
    showLeftRightArrow:boolean = true;
    showDots:boolean = false;
    autoPlay = false;
}