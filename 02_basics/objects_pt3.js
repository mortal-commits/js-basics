// video 18(destructuring of objects)

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh",
}

// To not access the same element using same syntax many times we use object destructuring.

//Syntax: const {nameOfElementToExtract} = objectName;
// const {courseInstructor} = course;
// console.log(courseInstructor);

// naming that element differently
const {courseInstructor: instructor} = course;//"instructor" is another name given to the same extracted variable.

    