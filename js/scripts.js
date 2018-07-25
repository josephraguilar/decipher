let articles = [];

let addArticleBtn = document.getElementById('addArticleBtn');
let blogCancel = document.getElementById('blogCancel');
let blogSubmit = document.getElementById('blogSubmit');

function Article(img, coinType, author, title, desc) {
    this.img = img;
    this.coinType = coinType;
    this.author = author;
    this.title = title;
    this.desc = desc;
}

addArticleBtn.addEventListener('click', e => {
  e.preventDefault();
  let formContainer = document.getElementById('formContainer');
    formContainer.style.height = "100%"
    formContainer.style.opacity = "1";
    formContainer.style.transition = "height 0s 0ms, opacity 400ms 0ms"
})

blogCancel.addEventListener('click', e => {
  e.preventDefault();
  let formContainer = document.getElementById('formContainer');
    formContainer.style.opacity = "0";
    formContainer.style.height = "0%";
    formContainer.style.transition = "height 0s 400ms, opacity 400ms 0ms"
})

blogSubmit.addEventListener('click', e => {
  e.preventDefault();

  let imgInput = document.getElementById('imgInput').value;
  let coinType = document.getElementById('coinType').value;
  let authorInput = document.getElementById('authorInput').value;
  let titleInput = document.getElementById('titleInput').value;
  let descInput = document.getElementById('descInput').value;
  let articleSection = document.getElementById('articleSection');
  let imageHolder = document.getElementById("digital");

  let column = document.createElement('div');
  column.classList.add('col-md-6','col-sm-6','col-xs-12', 'article-col');

  let article = document.createElement('div');
  article.classList.add('article');
  // need to change image holder to uploaded image
  article.innerHTML = '<a href="#"><img src="img/digital.jpg" alt="" class="img-responsive article-img"></a>' +
                      '<div class="info-buffer clearfix">' +
                      '<div class="coin-holder">' +
                      '<img src="' + coinType + '" alt="" class="coin-img">' +
                      '</div>' +
                      '<div class="article-info">' +
                      'By: <a href="#">' + authorInput + '</a> <time datetime="2018-7-22 00:09:00"> July 22, 2018</time>' +
                      '</div>' +
                      '</div>' +
                      '<a href="#"><h3>' + titleInput + '</h3></a>' +
                      '<p>' + descInput + '</p>' +
                      '</div>'

   column.appendChild(article);
   articleSection.appendChild(column);

   let formContainer = document.getElementById('formContainer');
     formContainer.style.opacity = "0";
     formContainer.style.height = "0%";
     formContainer.style.transition = "height 0s 400ms, opacity 400ms 0ms"

  let newArticle = new Article(imgInput, coinType, authorInput, titleInput, descInput);
  articles.create(newArticle)
})

Array.prototype.create = function(newArticle) {
  this.push(newArticle);
  console.log(articles);
}

Array.prototype.read = function() {
  this.forEach(function(article, index) {
    console.log(article, index);
  })
}

// Array.prototype.update = function(article, newArticle) {
//   if (newArticle.)
// }
