let btnFinished = document.querySelector('button');
console.log(btnFinished);
let myTable = document.querySelector('#table-result');
var timeSpend = document.querySelector('#time_spend').value;
var breakTime = document.querySelector('#break_time').value;
var sj1 = document.querySelector('#first_subjects').value;
var sj2 = document.querySelector('#second_subjects').value;
var sj3 = document.querySelector('#third_subjects').value;


btnFinished.onclick = function(){

    let subjects = [
        {subjects: sj1.value, study_time: (0.5*(timeSpend+breakTime)), break: breakTime.value },
        {subjects: sj2.value, study_time: (0.25*(timeSpend+breakTime)), break: breakTime.value  },
        {subjects: sj3.value, study_time: (0.25*(timeSpend+breakTime)), break: breakTime .value },
    ];
    console.log(subjects);
}

    let header = ['Subjects', 'Study Time', 'Break'];

    btnFinished.addEventListener('click', () => {
        let table = document.createElement('table');
        let headerRow = document.createElement('tr');

        header.forEach(headerText => {
            let header = document.createElement('th');
            let textNode = document.createTextNode(headerText);
            header.appendChild(textNode);
            headerRow.appendChild(header);
        });

        table.appendChild(headerRow);

        subjects.forEach(sub => {
            let row = document.createElement('tr');

            Object.values(sub).forEach(text => {
                let cell = document.createElement('td');
                let textNode = document.createTextNode(text);
                cell.appendChild(textNode);
                row.appendChild(cell);
            })

            table.appendChild(row);
        });

        myTable.appendChild(table);

    });

