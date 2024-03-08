import { Component, OnInit } from '@angular/core';
import { language, text } from 'src/app/shared/constant';
import { Course } from 'src/app/shared/models/interfaces';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-skillset',
  templateUrl: './skillset.component.html',
  styleUrls: ['./skillset.component.scss']
})
export class SkillsetComponent implements OnInit{

  text  = 'english' === this.localStorage.getLocalStorage(language.default) ? text.english : text.spanish ;

  constructor(private localStorage: LocalStorageService) {}
  categories: string[] = [];

  data = [

    {
      image: 'https://via.placeholder.com/150',
      starRating: 5,
      feedback: 'Este es un comentario de ejemplo 1.',
      name: 'Nombre del usuario 1',
      designation: 'Cargo del usuario 1',
      country: 'País del usuario 1'
  },
  {
      image: 'https://via.placeholder.com/150',
      starRating: 4,
      feedback: 'Este es un comentario de ejemplo 2.',
      name: 'Nombre del usuario 2',
      designation: 'Cargo del usuario 2',
      country: 'País del usuario 2'
  },
  {
    image: 'https://via.placeholder.com/150',
    starRating: 4,
    feedback: 'Este es un comentario de ejemplo 2.',
    name: 'Nombre del usuario 2',
    designation: 'Cargo del usuario 2',
    country: 'País del usuario 2'
},
{
  image: 'https://via.placeholder.com/150',
  starRating: 4,
  feedback: 'Este es un comentario de ejemplo 2.',
  name: 'Nombre del usuario 2',
  designation: 'Cargo del usuario 2',
  country: 'País del usuario 2'
},
{
  image: 'https://via.placeholder.com/150',
  starRating: 4,
  feedback: 'Este es un comentario de ejemplo 2.',
  name: 'Nombre del usuario 2',
  designation: 'Cargo del usuario 2',
  country: 'País del usuario 2'
},
{
  image: 'https://via.placeholder.com/150',
  starRating: 4,
  feedback: 'Este es un comentario de ejemplo 2.',
  name: 'Nombre del usuario 2',
  designation: 'Cargo del usuario 2',
  country: 'País del usuario 2'
},
  ]
  courses: Course[] = [
    {
        name: "Data Science and Machine Learning with Python - Hands On!",
        thumbnail: "courses-01.jpg",
        author: "Jason Williams",
        authorImage: "author-01.jpg",
        category: "Science",
        hours: "08hr 15 mins",
        lectures: 29,
        price: 385,
        offerPrice: 440,
        rating: 4.9
    },
    {
        name: "Create Amazing Color Schemes for Your UX Design Projects",
        thumbnail: "courses-02.jpg",
        author: "Pamela Foster",
        authorImage: "author-02.jpg",
        category: "Science",
        hours: "08hr 15 mins",
        lectures: 29,
        price: 420,
        offerPrice: null,
        rating: 4.9
    },
    // Agrega más objetos Course según sea necesario
];

 ngOnInit(): void {
  this.categories = [
    '.Net',
    'Angular',
    '.Net',
    'Angular',
    '.Net',
    'Angular',
    '.Net',
    'Angular',
    '.Net',
    'Angular',    '.Net',
    'Angular',
  ]
 }

}
