
//when user click on the finished button
function buttonClicked() {
  let timeSpend = document.getElementsByClassName("time_spend");
  let breakTime = document.getElementsByClassName("break_time");
  let fSubject = document.getElementsByClassName("first_subjects");
  let sSubject = document.getElementsByClassName("second_subjects");
  let tSubject = document.getElementsByClassName("third_subjects");
}

let myChart = document.getElementById('myChart').getContext('2d');

let pieChart = new Chart(myChart), {
    type:'pie',
    data: {
        labels: ['Time spend', 'Break Time', 'First Subject', 'Second Subject', 'Third Subject'],
        datasets: [
            label: 'Plan',
            data: [
                timeSpend,
                breakTime,
                fSubject,
                sSubject,
                tSubject
            ]
        ],
    },
    options: {},
};
