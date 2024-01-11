var student1 = {
    firstName: 'Julien',
    lastName: 'Barbier',
    age: 34,
    location: 'London'
};
var student2 = {
    firstName: 'Gullaime',
    lastName: 'Silver',
    age: 39,
    location: 'New York'
};
var studentList = [student1, student2];
var table = document.createElement('table');
studentList.forEach(function (student) {
    var row = table.insertRow();
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
});
document.appendChild(table);
