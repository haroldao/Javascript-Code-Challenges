console.log("\nClassroom Attendance\n");

getStudents = (classroom) => {
  let { hasTeachingAssistant, classList } = classroom
  let teacher, teachingAssistant, getStudents
  if(hasTeachingAssistant){
    [teacher, teachingAssistant, ... students] = classList
  }
  else{
    [teacher, ... students] = classList
  }
  return students
}

console.log(
  getStudents({
    hasTeachingAssistant: false,
    classList: ["Rashida", "John", "Roman", "Lisa", "Omair", "Lukas"]
  })
)