function renderGifCard(gif) {
  let { title, url } = gif;

  //
  // <div class="col-md-4">
  //   <div class="card" >
  //     <img class="card-img-top" src="https://media.giphy.com/media/H4zeDO4ocDYqY/giphy.gif" alt="Card image cap">
  //     <div class="card-body">
  //       <h5 class="card-title">Lucy the Confused AI</h5>

  //     <div class="card-body">
  //       <h5 class="card-title">Lucy the Confused AI</h5>
  //     </div>

  //     </div>
  //   </div>
  // </div>

  let container = document.createElement("div");
  container.setAttribute("class", "col-md-4");

  let card = document.createElement("div");
  card.setAttribute("class", "card");

  let cardImage = document.createElement("img");
  cardImage.setAttribute("class", "card-img-top");
  cardImage.setAttribute("src", url);

  let cardBody = document.createElement("div");
  cardBody.setAttribute("class", "card-body");

  let cardTitle = document.createElement("h5");
  cardTitle.setAttribute("class", "card-title");
  cardTitle.append(document.createTextNode(title));

  cardBody.append(cardTitle);

  // card.append(h1);
  card.append(cardImage);
  card.append(cardBody);
  container.append(card);

  return container;

  // console.log(title);
  // console.log(url);
}

let gifs = GifApi.fetchGifs();
for (let i = 0; i < gifs.length; i++) {
  let cards = document.getElementById("cards");
  let card = renderGifCard(gifs[i]);

  cards.append(card);
}
