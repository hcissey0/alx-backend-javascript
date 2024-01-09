export default function updateStudentGradeByCity(list, city, newGrades) {
  return list
    .filter((student) => student.location === city)
    .map((student) => ({
      ...student,
      grade: newGrades.find((grade) => grade.studentId === student.id)
        ? newGrades.find((grade) => grade.studentId === student.id).grade
        : 'N/A',
    }));
}
