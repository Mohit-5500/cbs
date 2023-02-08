import { Injectable } from '@angular/core';
import { Quiz } from './quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quizzes:Quiz[]=[
    {
      question:'What is capital of India',
      answer:[
        {option:'Nairobi',correct:false},
        {option:'Delhi',correct:true},
        {option:'Goa',correct:false},
        {option:'Mumbai',correct:false},
      ]
    },
    {
      question:' Who was the first woman Prime Minister of India?',
      answer:[
        {option:'Maneka Gandh',correct:false},
        {option:'Indira Gandhi',correct:true},
        {option:'Sushila Rohatgi',correct:false},
        {option:'Dr Sarojini Mahishi',correct:false},
      ]
    },
    {
      question:'What is the full form of ISRO?',
      answer:[
        {option:'The Reserve Bank of India',correct:false},
        {option:'The Reserve Bank of India',correct:false},
        {option:'Indian Space Research Organisation',correct:false},
        {option:'Indian Space Research Organisation',correct:true},
      ]
    },
    {
      question:'Which bank is known as the bankers bank of India?',
      answer:[
        {option:'Bank of India',correct:false},
        {option:'The Reserve Bank of India',correct:true},
        {option:'Canara Bank',correct:false},
        {option:'Bank of Baroda',correct:false},
      ]
    },
    {
      question:'Who of the following invented Facebook?',
      answer:[
        {option:'Mark Zuckerberg',correct:true},
        {option:'Benjamin Franklin',correct:false},
        {option:'What do you mean by Silviculture?',correct:false},
        {option:'Dr Sarojini Mahishi',correct:false},
      ]
    },
    {
      question:'FIFA is the global regulatory body of which sports',
      answer:[
        {option:'Hockey',correct:false},
        {option:'Football',correct:true},
        {option:'Cricket',correct:false},
        {option:'Tennis',correct:false},
      ]
    },
    {
      question:'Who was the author of the book Gitanjali?',
      answer:[
        {option:'Sarojini Naidu',correct:false},
        {option:'Jawaharlal Nehru',correct:false},
        {option:'Rabindra Nath Tagore',correct:true},
        {option:' Prem Chand',correct:false},
      ]
    },
    {
      question:'On a number line, when we add a positive integer, we',
      answer:[
        {option:'move to the right',correct:true},
        {option:'move to the left',correct:false},
        {option:'do not move at all',correct:false},
        {option:'none of these',correct:false},
      ]
    },
    {
      question:'where grnad canyon located?',
      answer:[
        {option:'Canada',correct:false},
        {option:'Bolivia',correct:false},
        {option:'Ghana',correct:false},
        {option:'USA',correct:true},
      ]
    },
    {
      question:' Who was the first woman Prime Minister of India?',
      answer:[
        {option:'Maneka Gandh',correct:false},
        {option:'Indira Gandhi',correct:true},
        {option:'Sushila Rohatgi',correct:false},
        {option:'Dr Sarojini Mahishi',correct:false},
      ]
    },
    
  ]  
   
  
  

  constructor() { }

  getQuizzes(){
    return this.quizzes;
  }
}
