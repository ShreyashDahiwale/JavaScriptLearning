//Destructuring 


const course = {
    coursename: "JS in Hindi",
    price: 999,
    courseTeacher: "Hitesh"
}


const {courseTeacher} = course;
const {courseTeacher: teacher} = course;
console.log(courseTeacher);
console.log(teacher);

