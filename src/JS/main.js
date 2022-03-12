let timeSpend = document.querySelector("#time_spend");
let breakTime = document.querySelector("#break_time");
let fSubject = document.querySelector("#first_subjects");
let sSubject = document.querySelector("#second_subjects");
let tSubject = document.querySelector("#third_subjects");
let mostCon = document.querySelector("#first_percentage");
let secCon = document.querySelector("#second_percentage");
let thirdCon = document.queryCommandValue("#third_percentage");

let fSubjectV = (mostCon/100) * (timeSpend + breakTime); 
let sSubjectV = (secCon/100)* (timeSpend + breakTime);
let tSubjectV = (thirdCon/100)* (timeSpend + breakTime);

let myChart = document.getElementById("myChart").getContext("2d");

document.querySelector("button").addEventListener("click", () => {
    let pieChart = new Chart(myChart, {
        type: "pie",
        data: {
            labels: [
                "Time spend",
                "Break Time",
                fSubject.value,
                sSubject.value,
                tSubject.value,
            ],
            datasets: [
                {
                    label: "Plan",
                    data: [
                        timeSpend.value,
                        breakTime.value,
                        mostCon.value,
                        secCon.value,
                        thirdCon.value,
                    ],
                },
            ],
        },
        options: {},
    });
});
