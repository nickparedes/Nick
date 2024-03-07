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