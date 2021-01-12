function display(data) {
  console.log(data);
}

const futureData = fetch("https://twitter.com/veronica/tweets/");

futureData.then(display); // Attaches display functionality

console.log("Me First");
