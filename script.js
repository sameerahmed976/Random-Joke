const url = "https://icanhazdadjoke.com/";
const btnJokes = document.querySelector(".btn-jokes");
const headingJokes = document.querySelector(".heading-jokes");

btnJokes.addEventListener("click", function () {
  getData();
});

async function getData() {
  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
      "User-Agent": "learning app",
    },
  });
  const data = await response.json();
  headingJokes.textContent = data.joke;
}

getData();
