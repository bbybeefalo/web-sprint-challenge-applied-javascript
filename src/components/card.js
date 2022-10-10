import axios from "axios";
import { articles } from "../mocks/data";



//---------------------------------//

const Card = (article) => {

    let cardHolder = document.createElement("div");
    cardHolder.className = "card";
    let headlineText = document.createElement("div");
    headlineText.className = "headline";
    let authorInfo = document.createElement("div");
    authorInfo.className = "author";
    let imgHolder = document.createElement("div");
    imgHolder.className = "img-container";
    let authorPic = document.createElement("img");
    let authorName = document.createElement("span");

    cardHolder.appendChild(headlineText);
    cardHolder.appendChild(authorInfo);
    authorInfo.appendChild(imgHolder);
    imgHolder.appendChild(authorPic);
    authorInfo.appendChild(authorName);

    headlineText.textContent = `${article.headline}`;
    authorPic.src = `${article.authorPhoto}`;
    authorName.textContent = `By ${article.authorName}`;
    
    return cardHolder;
}




  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

const cardAppender = (selector) => {
  const attachCards = document.querySelector(selector);
  axios.get("http://localhost:5001/api/articles")
.then(res => {
  for (const category in res.data.articles) {
    res.data.articles[category].forEach( (item) => {
      attachCards.appendChild(Card(item));
    })
}
})
.catch(err => {
  console.error(err);
})
.finally(() => {
  console.log("yeehaw again");
})
}

  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

export { Card, cardAppender }
