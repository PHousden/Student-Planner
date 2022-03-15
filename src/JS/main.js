document.querySelector("button").addEventListener("click", () => {
    let timeSpend = document.querySelector("#time_spend").value;
    let breakTime = document.querySelector("#break_time").value;
    let fSubject = document.querySelector("#first_subjects").value;
    let sSubject = document.querySelector("#second_subjects").value;
    let tSubject = document.querySelector("#third_subjects").value;
    let mostCon = document.querySelector("#first_percentage").value;
    let secCon = document.querySelector("#second_percentage").value;
    let thirdCon = document.querySelector("#third_percentage").value;
  
    let fSubjectV = (mostCon / 100) * (timeSpend + breakTime);
    let sSubjectV = (secCon / 100) * (timeSpend + breakTime);
    let tSubjectV = (thirdCon / 100) * (timeSpend + breakTime);
  
    const canvasEle = document.createElement("canvas");
    canvasEle.id = "myChart";
    let myChart = canvasEle.getContext("2d");
    const firstEle = document.getElementsByClassName("container")[0].children[0];
    if (firstEle) {
      document
        .getElementsByClassName("container")[0]
        .replaceChild(canvasEle, firstEle);
    } else {
      document.getElementsByClassName("container")[0].appendChilde(canvasEle);
    }
  
    let pieChart = new Chart(myChart, {
      type: "pie",
      data: {
        labels: ["Time spend", "Break Time", fSubject, sSubject, tSubject],
        datasets: [
          {
            label: "Plan",
            data: [timeSpend, breakTime, mostCon, secCon, thirdCon],
            backgroundColor: ["black", "red", "orange", "green", "blue"]
          }
        ]
      },
      options: {}
    });
  });
