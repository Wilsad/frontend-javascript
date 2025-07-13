// Define Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // allows additional properties
}

// Example usage:
const teacher: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "London",
  contract: false, // additional attribute
};



// Directors interface extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Example usage
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};



// Print Teacher interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};



// 4. Interface for the StudentClass Instance
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface to describe the class
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Class implementing the interface
class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// usage
const student = new StudentClass("Alice", "Johnson");
console.log(student.displayName());      // Alice
console.log(student.workOnHomework());  // Currently working

console.log(printTeacher("John", "Doe"));  // Output: J. Doe

console.log(teacher);

console.log(director1);