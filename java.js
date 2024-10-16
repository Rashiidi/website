function toggleContent(section) {
  var content = document.getElementById(section + "-content");
  var button = document.getElementById(section + "-button");
  if (content.style.display === "none") {
      content.style.display = "block";
      button.textContent = "Read Less";
  } else {
      content.style.display = "none";
      button.textContent = "Read More";
  }
}
