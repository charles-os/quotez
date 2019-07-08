import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'Martin Luther', 'I cannot and will not recant anything, for to go against conscience is neither right nor safe. Here I stand, I can do no other, so help me God. Amen   ', 'James', new Date(1950, 1, 30), 2, 0),
    new Quote(2, 'Unknown', 'If you do not design your own life plan, chances are you will fall into someone elses plan. And guess what they have planned for you? Not much.', 'joflix', new Date(2000, 2, 30), 3, 0),
    new Quote(3, 'McCain', 'It was misreported then, and it is misremembered now.', 'challo', new Date(2019, 3, 30), 4, 0)
  ];

  addQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength++;
    quote.timePosted = new Date(quote.timePosted);
    this.quotes.unshift(quote);
    console.log(this.quotes);
  }

  showQuoteDetails(index) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
    console.log(this.quotes[index]);
  }

  deleteQuote(isToDelete, index) {
    if (isToDelete) {
      const toDelete = confirm(`Are you sure you want to delete "${this.quotes[index].quote}"`);
      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }
  mostUpVotes(index) {
    const checkQuote = this.quotes[index].upVote;
    if (this.quotes.length > 0) {
      const votes = [];
      this.quotes.forEach(quote => votes.push(quote.upVote));
      if (checkQuote === Math.max(...votes)) {
        return true;
      }
    }
  }

  constructor() { }

  ngOnInit() {

  }

}
