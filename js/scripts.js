
let articles = [];
let addArticleBtn = document.getElementById('addArticleBtn');
let blogCancel = document.getElementById('blogCancel');
let blogSubmit = document.getElementById('blogSubmit');
let form = document.getElementById('articleForm');

// article constructor function
function Article(img, coinType, author, title, desc) {
    this.img = img;
    this.coinType = coinType;
    this.author = author;
    this.title = title;
    this.desc = desc;
}

// blog form add display function
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

// article creation function
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

  let articleDiv = document.createElement('div');
  articleDiv.classList.add('article');

  // need to change image holder to uploaded image
  articleDiv.innerHTML = '<a href="#"><img src="' + imgInput + ' " alt="" class="img-responsive article-img"></a>' +
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

   column.appendChild(articleDiv);
   articleSection.appendChild(column);

   let formContainer = document.getElementById('formContainer');
     formContainer.style.opacity = "0";
     formContainer.style.height = "0%";
     formContainer.style.transition = "height 0s 400ms, opacity 400ms 0ms"

  let newArticle = new Article(imgInput, coinType, authorInput, titleInput, descInput);
  articles.create(newArticle);
  form.reset();
})

// crud functions
Array.prototype.create = function(Article) {
  this.push(Article);
  console.log(articles);
}

Array.prototype.read = function() {
  this.forEach(function(Article, index) {
    console.log(Article, index);
  })
}

Array.prototype.update = function(Article, newArticle) {
  if (newArticle.img === null || newArticle.img === '' || newArticle.coinType === null || newArticle.coinType === '' || newArticle.author === null || newArticle.author === '' || newArticle.title === null || newArticle.title === '' || newArticle.desc === null ||
  newArticle.desc === '') {
    return;
  } else {
    let updatedArticles = [];
    for (let i = 0; i < this.length; i++) {
      if (this[i] === Article) {
        updatedArticles[i] = newArticle;
      } else updatedArticles.push(this[i]);
    }
  }
  return updatedArticles;
}

Array.prototype.remove = function(Article) {
  let updatedArticles = [];
  for (let i = 0; i < this.length; i++) {
    if(this[i] === Article){
    continue;
  }
  else {
    updatedArticles.push(this[i]);
  }
  }
  return updatedArticles;
}
