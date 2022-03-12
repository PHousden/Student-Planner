let timeSpend = document.querySelector(".time_spend").value;
let breakTime = document.querySelector(".break_time").value;
let fSubjectV = document.querySelector(".first_subjects");
let sSubjectV = document.querySelector(".second_subjects");
let tSubjectV = document.querySelector(".third_subjects");


  
  let fSubject = (50 / 100) * (timeSpend + breakTime);
  let sSubject = (25 / 100) * (timeSpend + breakTime);
  let tSubject = (25 / 100) * (timeSpend + breakTime);

  


const backgroundcolor = ["red", "blue", "purple", "green", "yellow"];

let myChart = document.getElementById("myChart").getContext("2d");

document.querySelector("button").addEventListener("click", () => {
  let pieChart = new Chart(myChart, {
    type: "pie",
    data: {
      labels: [
        "Time spend",
        "Break Time",
        fSubjectV.value,
        sSubjectV.value,
        tSubjectV.value,
      ],
      datasets: [
        {
          label: "Plan",
          data: [timeSpend.value, breakTime.value, fSubject.value, sSubject.value, tSubject.value],
        },
      ],
      backgroundColor: backgroundcolor,
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
    options: {},
  });
});
