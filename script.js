var form = document.getElementById("myform");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  var search = document.getElementById("search").value;
  var original = search.split("").join("");
  fetch("https://api.github.com/users/" + original)
    .then((result) => result.json())
    .then((data) => {
      console.log(data);
      document.getElementById(
        "result"
      ).innerHTML = `<a href="https://www.github.com/${original}"> <img src= "${data.avatar_url}"/></a>`;
    });
});
