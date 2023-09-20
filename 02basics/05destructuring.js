const course = {
    courseName : "JS in Hindi",
    courseFee : 999,
    courseInstructure: "Hitesh Chaudhary"
}
console.log(course.courseFee); // This is normal to extract value but in big level project this type will be confusing

const {courseInstructure} = course
console.log(courseInstructure) //Hitesh Chaudhary : usely here call courseInstructure using destructing

const {courseInstructure: faculty} = course 
console.log(faculty) //Hitesh Chaudhary : Here we are renaming the courseInstructure in short form and using destructing here


//API
// {
//     "":"",
//     "":"",
//     "":""
// }

// [
//     {}
//     {}
//     {}
// ]