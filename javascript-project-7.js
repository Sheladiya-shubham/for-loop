// 1.school


class school{
    student (name,age,contact,email){
        console.log("Student Details:-");
        console.log("Name:-",name);
        console.log("Age:-",age);
        console.log("Contact Number:-",contact);
        console.log("EMail id:-",email);
        console.log("---------------------------");
    }

    
    faculty (name,age,contact,email){
        console.log("Faculty Details:-");
        console.log("Name:-",name);
        console.log("Age:-",age);
        console.log("Contact Number:-",contact);
        console.log("EMail id:-",email);
    }
}

const School = new school ();

School.student("ranveer singh", 37, 9929998722,"ranveersingh@gmail.com");
School.faculty("Deepika padukone singh", 40, 7667453765,"deepikapadukonesingh@gmail.com");



// expected out-put:-
// Student Details:-
// Name:- ranveer singh
//  Age:- 37
//  Contact Number:-9929998722
// EMail id:- ranveersingh@gmail.com
  
// Faculty Details:-
// Name:- Deepika padukone singh
// Age:- 40
//Contact Number:- 7667453765
//  EMail id:- deepikapadukonesingh@gmail.com

// 2.person

// class person{
//     constructor(name,age){
//         this.name = name;
//         this.age  = age;
//     }
//     getdetails(){
//         return `name: ${this.name}, age: ${this.age}`;
//     }
// }

// class employee extends person{
//     constructor(name,age,salary,jobType){
//         super(name,age);
//         this.salary = salary;
//         this.jobType = jobType;
//     }
//     getdetails(){
//         return `${super.getdetails()},salary: ${this.salary},jobType: ${this.jobType} `;
//     }
// }

// const Person = new person("Lacasa de papel",35);
// console.log(Person .getdetails());


// const Employee = new employee("Arthuro roman",29,85000,"Full stack devloper");
// console.log(Employee .getdetails());


// expected out-put:-
// name: Lacasa de papel, age: 35
// name: Arthuro roman, age: 29,salary: 85000,jobType: Full stack devloper 


// 3.Employee

// class employee{
//     constructor(){
//         console.log("employee is heart of company");
//     }
// }

// const message = new employee();

// expected out-put:-
// employee is heart of company

// 4.Shape

class shape{
     rectangleArea(length,width){
        return length * width;
    } 

     circleArea(radius){
        return Math.PI * radius * radius;
    }
    
}

const Shape = new shape();
// example:-rectangle area
const length = 12;
  const width = 6;
  const rectangleArea = Shape. rectangleArea(length, width);
  console.log(`Area of Rectangle: ${rectangleArea}`);

//   example:-circle area
  const radius = 4;
    const circleArea = Shape.circleArea(radius);
    console.log(`Area of Circle: ${circleArea}`);

// expected out-put:-
// Area of Rectangle: 72
// Area of Circle: 50.26548245743669





  









































// Shape class
// class Shape {
//     // Method to calculate the area of a rectangle
//     rectangleArea(length, width) {
//       return length * width;
//     }
  
//     // Method to calculate the area of a circle
//     circleArea(radius) {
//       return Math.PI * radius * radius; // πr²
//     }
//   }
  
//   // Example usage:
  
//   // Create an instance of the Shape class
//   const shape = new Shape();
  
//   // Calculate rectangle area
//   const length = 10;
//   const width = 5;
//   const rectangleArea = shape.rectangleArea(length, width);
//   console.log(`Area of Rectangle: ${rectangleArea}`);
  
//   // Calculate circle area
//   const radius = 7;
//   const circleArea = shape.circleArea(radius);
//   console.log(`Area of Circle: ${circleArea}`);
  
  



























