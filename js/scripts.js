form.onload = function() {
  const form = document.querySelector("form");
  form.onsubmit = function(event) {
event.preventDefault();
  };
};

function dogType() {
  let food = document.querySelector("input[name='food']:checked").value;
  let activity = document.querySelector("input[name='activity']:checked").value;
  let music = document.querySelector("input[name='music']:checked").value;
  let color = document.querySelector("input[name='color']:checked").value;
  let personality = document.querySelector("input[name='personality']:checked").value;

  let dogType;
  if (food === "meat" && activity === "running" && music === "rock" && color === "red" && personality === "friendly") {
      dogType = "Golden Retriever";
  } else if (food === "vegetables" && activity === "swimming" && music === "hiphop" && color === "blue" && personality === "shy") {
      dogType = "Belgian Malinois";
  } else if (food === "fruit" && activity === "hiking" && music === "pop" && color === "green" && personality === "hyper") {
      dogType = "St. Bernard";
  } else {
      dogType = "Other";
  }

  document.getElementById("result").innerHTML = "You are a " + dogType + "!";
}

document.getElementById("tryAgain").addEventListener("click", function(){
  let form = document.querySelector("form");
  form.reset();

  document.getElementById("result").innerHTML = "";
});
