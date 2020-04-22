
$.getJSON("data/data.json", function(cards){
  genHtml(cards);
});

function genHtml(cards) {
  let cardsHTML = cards.map(function(el) {
    let card = `
    <article class="employee-card">
      <div class="left-container">
        <img src="img/unsplash-headshot.jpg" alt="a smiling man">
        <h3>${el.name}</h3>
        <p>${el.jobTitle}</p>
      </div>
      <div class="right-container">
        <p><span class="first-word">Company:</span> ${el.company}</p>
        <p><span class="first-word">Experience:</span> ${el.experience}</p>
        <p><span class="first-word">Code Languages:</span> ${el.codeLanguages}</p>
        <p><span class="first-word">School:</span> ${el.school}</p>
        <p><span class="first-word">Major:</span> ${el.major}</p>
        <p><span class="first-word">Email:</span> ${el.email}</p>
        <img src="img/linkedin.svg" alt="">
        <p>${el.linkedInUrl}</p>
      </div>
    </article>
    `;
    return card;
  });
  $(".template-hook").append(cardsHTML);
}
