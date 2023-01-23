event.preventDefault();
function dogType() {
  // Get the values of the selected radio buttons
  let food = $("input[name='food']:checked").val();
  let activity = $("input[name='activity']:checked").val();
  let music = $("input[name='music']:checked").val();
  let color = $("input[name='color']:checked").val();
  let personality = $("input[name='personality']:checked").val();

  // Use the values to determine the user's dog type
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

  // Display the result
  $("#result").html("You are a " + dogType + "!");
}
