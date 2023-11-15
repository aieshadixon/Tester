// fetching data for News API

// Fetch news articles
fetch("http://newsapi.org/v2/top-headlines?country=gb&apiKey=ac77ec8f6a004bbab0882ab829bcd2d2")
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Network response was not ok");
    }
  })
  .then((data) => {
    const newsData = document.getElementById("newsContainer");
    const maxArticles = 5; // displays a maximum of 5 articles

    for (let i = 0; i < data.articles.length && i < maxArticles; i++) {
      const news = data.articles[i];

      const newsItem = document.createElement("li");
      const title = document.createElement("h3");
      const snippet = document.createElement("p");

      title.textContent = news.title;
      snippet.textContent = news.description;

      newsItem.appendChild(title);
      newsItem.appendChild(snippet);
      newsData.appendChild(newsItem);
    }
  })
  .catch((error) => console.log(error));

// Change background color button
const colorButton = document.getElementById('colorBtn');

colorButton.addEventListener('click', function () {
  document.body.style.backgroundColor = '#000';
});
