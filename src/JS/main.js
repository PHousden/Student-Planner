

function buttonClicked() {
  const timeSpend = document.getElementsByClassName("time_spend");
  const breakTime = document.getElementsByClassName("break_time");
  const fSubject = document.getElementsByClassName("first_subjects");
  const sSubject = document.getElementsByClassName("second_subjects");
  const tSubject = document.getElementsByClassName("third_subjects");
}
DataEC = {
    datasets = [{
        backgroundColor: backgroundCategory,
        data: costGroupedByCategory.amount,
        borderColor: 'rgba(0,0,0,0.1)', 
        borderWidth: '1'
    }]
            ,
            labels: costGroupedByCategory.category
}

var optionsEC = {
    title: {disply: true, text: "The Planing to the study", fontSize: '24', fontFamily: "'Roboto', sans-serif"},
    legend: {disply: true, position: 'right', aling: 'center'}
}

var Pie = document.getElementById('pieChart').getContext('2d');
PieChart = new Chart(Pie, { type: 'pie', data: DataEC, options: optionsEC});
