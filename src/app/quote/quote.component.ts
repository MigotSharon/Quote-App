import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
 quotes:Quote[] = [
    new Quote(1, 'Quoted by Winston Churchill.', 'Never bend your head. Always hold it high. Look the world straight in the eye.',new Date(2020,3,14)),
    new Quote(2,'Quoted by Mutahi Kagwe','If You can get it ,I can get it,anyone can get it',new Date(2020,6,9)),
    new Quote(3,'Quoted by Crevance Kate','Ignorance and prejudice are fuelling the spread of a preventable disease.  World AIDS Day, 1 December is an opportunity for people worldwide to unite in the fight against HIV and AIDS.',new Date(2013,1,12)),
    new Quote(4,'Quoted by  Aggie Cromwell','Magic is really very simple, all you’ve got to do is want something and then let yourself have it.',new Date(2019,4,18)),
    new Quote(5,'Quoted by Phil Nickinson','The future of mobile is the future of online. It is how people access online content now.',new Date(2019,2,14)),
    new Quote(6,'Quoted by Ahonen aknon','Growth of computer and technology careers is becoming more and more industry-agnostic.',new Date(2030,3,14)),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}


// import { Component, OnInit } from '@angular/core';


// @Component({
//   selector: 'app-quotes',
//   templateUrl: './quotes.component.html',
//   styleUrls: ['./quotes.component.css']
// })
// export class QuotesComponent implements OnInit {

 

//   toggleDetails(index){
//     this.quotes[index].showDescription = !this.quotes[index].showDescription;
//   }

//   deleteQuotes(isComplete, index){
//     if (isComplete) {
//       let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

//       if (toDelete){
//         this.quotes.splice(index,1)
//       }
//     }
//   }

//   addNewQuotes(quotes){
//     let quotesLength = this.quotes.length;
//     quotes.id = quotesLength+1;
//     quotes.completeDate = new Date(quotes.completeDate)
//     this.quotes.push(quotes)
//   }


  
//   constructor(){}

//   ngOnInit(){
//   }

// }
