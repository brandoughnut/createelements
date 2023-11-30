let item1 = document.getElementById("item1");
let item2 = document.getElementById("item2");
let item3 = document.getElementById("item3");
let item4 = document.getElementById("item4");

let injectHere = document.getElementById("injectHere");

item1.addEventListener('click', function(e) {
    let h1 = document.createElement("h1");
    injectHere.appendChild(h1);
    h1.innerText = "Hello World";


});

function MakeCard(cardTitle) {
    // build inner portion of card
    let h5 = document.createElement("h5");
    h5.className = "card-title";
    h5.textContent = cardTitle;

    // build a tag
    let p = document.createElement("p");
    p.className = "card-text";
    p.textContent = "Some quick example text to build on the card title and make up the bulk of the card's content.";

    let a = document.createElement("a");
    a.className = "btn btn-primary";
    a.textContent = "Go somewhere";

    // you can use addEventListener to make the button functional
    a.addEventListener('click', function(e) {
    });

    // build the inner div
    let bodyDiv = document.createElement("div");
    bodyDiv.className = "card-body";

    // build out the inner portion
    bodyDiv.appendChild(h5);
    bodyDiv.appendChild(p);
    bodyDiv.appendChild(a);

    let img = document.createElement("img");
    img.className = "card-img-top";
    img.src = "...";
    img.alt = "...";

    // build the outer div

    let outerDiv = document.createElement("div");
    outerDiv.className = "card";
    outerDiv.style = "width: 18rem";

    outerDiv.appendChild(img);
    outerDiv.appendChild(bodyDiv);

    injectHere.appendChild(outerDiv);

}

item2.addEventListener('click', function(e) {
    MakeCard("Made from item 2");
});

// <div class="card" style="width: 18rem;">
//   <img src="..." class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>