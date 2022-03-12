

function buttonClicked() {
  const timeSpend = document.getElementsByClassName("time_spend");
  const breakTime = document.getElementsByClassName("break_time");
  const fSubject = document.getElementsByClassName("first_subjects");
  const sSubject = document.getElementsByClassName("second_subjects");
  const tSubject = document.getElementsByClassName("third_subjects");
}

var Pie = document.getElementById('pieChart').getContext('2d');
PieChart = new Chart(Pie, { type: 'pie', data: DataEC, options: optionsEC});
