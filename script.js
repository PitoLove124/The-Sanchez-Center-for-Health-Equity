// scripts.js
document.addEventListener("DOMContentLoaded", function () {
  var ctx = document.getElementById("pie-chart").getContext("2d");
  var chart = new Chart(ctx, {
    // The type of chart you want to create
    type: "pie", // or 'doughnut'

    // The data for your dataset
    data: {
      labels: [
        "White, Non-Hispanic",
        "Black, Non-Hispanic",
        "Hispanic/Latino" /* other categories */,
      ],
      datasets: [
        {
          label: "Population (2023)",
          backgroundColor: ["#color1", "#color2", "#color3" /* other colors */],
          data: [294266, 137598, 83735 /* other data */],
        },
      ],
    },

    // Configuration options
    options: {},
  });
});
