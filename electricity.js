const dataElectricity = {
  labels: ["Total", "Electricity"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 160],
      backgroundColor: ["rgb(54, 162, 235)", "rgb(201, 203, 207)"],
      hoverOffset: 4,
    },
  ],
};
const configElectricity = {
  type: "pie",
  data: dataElectricity,
};
const myChartElectricity = new Chart(
  document.getElementById("myChartElectricity"),
  configElectricity
);
