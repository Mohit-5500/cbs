import { Component, OnInit } from '@angular/core';
import { Quiz } from '../quiz.model';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
quizzes:Quiz[]=[]
currentQuiz=0;
correctAnswer=0
wrongAnswer=0
answerSelected=false
result=false
basic=false
  randomize!: number;
  constructor(private quizService:QuizService) { }

  ngOnInit(): void {
    this.quizzes=this.quizService.getQuizzes()
    this.randomize=Math.floor(Math.random())*length
  }

  onAnswer(option:any){
    this.answerSelected=true
    
    setTimeout(()=>{
      this.currentQuiz++
      this.answerSelected=false

    },2000)

    if(option){
      this.correctAnswer++
    }
    else{
      this.wrongAnswer++
    }
  }
  
  
  showResult(){
    this.result=true
    if(this.correctAnswer<2){
      this.basic=true
    }
   
  }
 

}
