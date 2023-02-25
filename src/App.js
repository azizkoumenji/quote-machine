import React from "react";

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      quote: ""
    }
    this.newQuote = this.newQuote.bind(this);
  }

  newQuote() {
    const quotes = ["The greatest glory in living lies not in never falling, but in rising every time we fall.", "The way to get started is to quit talking and begin doing.", "If life were predictable it would cease to be life, and be without flavor.", "Life is what happens when you're busy making other plans."];
    const authors = ["Nelson Mandela", "Walt Disney", "Eleanor Roosevelt", "John Lennon"];
    let i = Math.floor(Math.random() * 4);
    console.log(i);
    let quoteNew = quotes[i];
    console.log(quoteNew);
    let authorNew = authors[i];
    this.setState(
      {
        quote: quoteNew,
        author: authorNew
      }
    )
  }

  componentDidMount() {
    this.newQuote();
  }

  render() {
    return(
      <div id="quote-box">
        <p id="text">"{this.state.quote}"</p>
        <p id="author">-{this.state.author}</p>
        <div id="buttons">
          <a id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank"><i className="fa-brands fa-square-twitter fa-2x"></i></a>
          <button id="new-quote" onClick={this.newQuote}>New Quote</button>
        </div>
      </div>
    );
  }
}

export default App;