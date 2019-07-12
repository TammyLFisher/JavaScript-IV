// CODE here for your Lambda Classes
class Person {
    constructor(personAttributes) {
        this.name = personAttributes.name;
        this.age = personAttributes.age;
        this.location = personAttributes.location;
        this.gender = personAttributes.gender;
    }
    speak() {
        return `Hello, my name is ${this.name}, and I am from ${this.location}.`;
    }
}
    class Instructor extends Person {
        constructor(instrAttributes) {
            super(instrAttributes);
            this.specialty = instrAttributes.specialty;
            this.favLanguage = instrAttributes.favLanguage;
            this.catchPhrase = instrAttributes.catchPhrase;
        }
        demo(subject) {
            return `Today we are learning about ${subject}.`;
        }
        grade(student, subject) {
            return `${student.name} receives a perfect score on ${subject}!`;
        }
        adjgrade(student) {
            let points = Math.round(Math.random() * 100);
            if (student.grade >= 100) {
                student.grade -= points;
                return `${points} points have been deducted from ${student.name}'s grade. ${student.name}'s current grade is ${student.grade}.`;
            }else {
                student.grade += points;
                return `${points} points have been added to ${student.name}'s grade. ${student.name}'s current grade is ${student.grade}.`;              
            }
        }
    }

    class Student extends Person {
        constructor(studentAttributes) {
            super(studentAttributes);
            this.previousBackground = studentAttributes.previousBackground;
            this.className = studentAttributes.className;
            this.favSubject = studentAttributes.favSubject;
            this.grade = studentAttributes.grade;
        }
        listsSubjects() {
            // const listsSubjects = favSubjects.map(this.listsSubjects);
        }
        PRAassignment(subject) {
            return `${this.name} has submitted a PR for ${subject}.`;
        }
        sprintChallenge(subject) {
            return `${this.name} has begun sprint shallenge on ${subject}.`;
        }
    graduate()  {
        if (this.grade >= 70) {
            return `${this.name} has graduated with a final grade of ${this.grade}!`;
        }  else {
            let change = 70 - this.grade;
            this.grade += change;
            return `After extra credit was submitted, ${change} points were added to grade, and ${this.name} graduated with a final grade of ${this.grade}!`;
        }
    }
}
class ProjectManager extends Instructor {
    constructor(managerAttributes) {
        super(managerAttributes);
        this.gradClassName = managerAttributes.gradClassName;
        this.favInstructor = managerAttributes.favInstructor;
    }
    standUp(channel) {
        return`${this.name} announces to ${channel}, @channel standy times!`
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
    }
}

const kieran = new Instructor({
    name: 'Kieran', 
    location: 'Chicago', 
    age: 32, gender: 'male', 
    favLanguage: 'JavaScript', 
    specialty: 'Front-end',
    catchPhrase: 'Daft Punk is chill!'
});
const dan = new Instructor({
    name: 'Dan', 
    location: 'Philadelphia', 
    age: 32, gender: 'male', 
    favLanguage: 'Python', 
    specialty: 'Python PyPal',
    catchPhrase: 'Wild!'
});
const josh = new Instructor({
    name: 'Josh', 
    location: 'Dallas', 
    age: 32, gender: 'male', 
    favLanguage: 'Html and CSS', 
    specialty: 'Html',
    catchPhrase: 'Crazy!'
});

const jacob = new Student({
    name: "Jacob",
    location: "San Diego",
    age: 28,
    gender: "male",
    favSubjects: ["REACT", "Django"],
    grade: 100
});

const lindsey = new Student({
    name: "Lindsey",
    location: "New York",
    age: 42,
    gender: "female",
    favSubjects: ["Html", "CSS"],
    grade: 100
});

const adam = new Student({
    name: "Adam",
    location: "Las Vegas",
    age: 29,
    gender: "male",
    favSubjects: ["Ruby", "UX"],
    grade: 100
});



 const derrick = new ProjectManager({
    name: "Derrick",
    location: "San Francisco",
    age: 24,
    gender: "male",
    gradClassName: "PT8",
    favInstructor: "Dan"
});

 const aislynn = new ProjectManager({
    name: "Aislynn",
    location: "Sacramento",
    age: 28,
    gender: "female",
    gradClassName: "PT4",
    favInstructor: "Kieran"
});

const ruth = new ProjectManager({
    name: "Ruth",
    location: "Topeka",
    age: 32,
    gender: "female",
    gradClassName: "FT30",
    favInstructor: "Josh"
});


 console.log(jacob.speak());
// console.log(adam.listsSubjects());
console.log(jacob.gender);
console.log(ruth.debugsCode(jacob, "Javascript"));
console.log(derrick.standUp("webPT8"));
console.log(lindsey.sprintChallenge("Javascript"));
console.log(dan.demo("JavaScript"));
console.log(kieran.grade(lindsey, "CSS"));
console.log(adam.speak());
// console.log(jacob.PRAssignment("Responsive Design"));
console.log(kieran.catchPhrase);
// console.log(josh.adjustGrade(jacob));
console.log(dan.graduate(lindsey));