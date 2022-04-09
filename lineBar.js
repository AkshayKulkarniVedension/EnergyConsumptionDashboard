const dataMixed = {
  labels: ["January", "February", "March", "April"],
  datasets: [
    {
      type: "bar",
      label: "Bar Dataset",
      data: [10, 20, 30, 40],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.2)",
    },
    {
      type: "line",
      label: "Line Dataset",
      data: [10, 20, 30, 40],
      fill: false,
      borderColor: "rgb(54, 162, 235)",
    },
  ],
};
const configMixed = {
  type: "scatter",
  data: dataMixed,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

const myChartMixed = new Chart(
  document.getElementById("myChartMixed"),
  configMixed
);
