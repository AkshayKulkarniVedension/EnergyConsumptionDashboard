const dataPolar = {
  labels: ["Red", "Green"],
  datasets: [
    {
      label: "My First Dataset",
      data: [11, 16, 32],
      backgroundColor: ["rgb(75, 192, 192)", "rgb(201, 203, 207)"],
    },
  ],
};

const configPolar = {
  type: "polarArea",
  data: dataPolar,
  options: {},
};

const myChartPolar = new Chart(
  document.getElementById("myChartPolar"),
  configPolar
);
