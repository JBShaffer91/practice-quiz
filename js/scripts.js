event.preventDefault();
function dogType() {
  let food = $("input[name='food']:checked").val();
  let activity = $("input[name='activity']:checked").val();
  let music = $("input[name='music']:checked").val();
  let color = $("input[name='color']:checked").val();
  let personality = $("input[name='personality']:checked").val();

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

  $("#result").html("You are a " + dogType + "!");
}

document.getElementById("tryAgain").addEventListener("click", function(){
  let form = document.querySelector("form");
  form.reset();

  document.getElementById("result").innerHTML = "";
});