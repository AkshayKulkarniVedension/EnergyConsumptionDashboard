const labelsLine = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const dataLine = {
  labels: labelsLine,
  datasets: [
    {
      label: "My First Dataset",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
};
const configLine = {
  type: "line",
  data: dataLine,
};

const myChartLine = new Chart(
  document.getElementById("myChartLine"),
  configLine
);
