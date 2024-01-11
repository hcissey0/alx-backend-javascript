interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

let student1: Student = {
    firstName: 'Julien',
    lastName: 'Barbier',
    age: 34,
    location: 'London'
}

let student2: Student = {
    firstName: 'Gullaime',
    lastName: 'Silver',
    age: 39,
    location: 'New York'
}

let studentList: Student[] = [ student1, student2 ];

let table: HTMLTableElement = document.createElement('table');
studentList.forEach((student: Student) => {
    let row: HTMLTableRowElement = table.insertRow();
    let cell1: HTMLTableCellElement = row.insertCell();
    let cell2: HTMLTableCellElement = row.insertCell();

    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
});

document.appendChild(table);
