//coal
const dataCoal = {
  labels: ["Total", "Coal"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 60],
      backgroundColor: ["rgb(255, 99, 132)", "rgb(255, 205, 86)"],
      hoverOffset: 4,
    },
  ],
};
const configCoal = {
  type: "doughnut",
  data: dataCoal,
};
const myChartCoal = new Chart(
  document.getElementById("myChartCoal"),
  configCoal
);

// Electricity

const body = document.querySelector("body"),
  toggleBtn = document.getElementById("toggleBtn"),
  text = document.querySelectorAll(".text");
var i;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("active");
  toggleBtn.classList.toggle("active");
  for (i = 0; i < text.length; i++) {
    text[i].classList.toggle("darkMode");
  }
});
