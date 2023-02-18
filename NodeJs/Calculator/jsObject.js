let student = {
    name:"Abhishek",
    "college": "Brainware University, Kolkata",
    "roll": 23,
    "isPresent": true,
    "marks": {
        "Physics": 79.76,
        "Chemistry": 86,
        "Mathematics": 93.99
    },

    "friends": ["Vijay", "Aman", "Rockey", "Naresh", "Madhav"],
    "classroomNo":[
        { //0
            "Java":102, 
            "Spring":103
        },
        { //1
            "C":103,
            "c++":105
        },
        { //3
            "HTML5/CSS3":106,
            "Javascript":107,
            "NodeJs/Express":109
        }
    ],
    
}

// console.log(student.name);
// console.log(student.roll);
// console.log(student.college);

// if(student.isPresent){
//     console.log(student.name+" is present");
// }
// else{
//     console.log(student.name+" is not present");
// }

    // console.log(student.marks.Mathematics);

    // console.log(student.friends[3]);

    // // console.log(student.classroomNo);
    // console.log(student.classroomNo[0].Java);
    // console.log(student.classroomNo[1]["c++"]);
    // console.log(student.classroomNo[2]["HTML5/CSS3"]);


    let Student = class{

        constructor(name, roll){
            this.name = name;
            this.roll = roll;
        }

        showDetails() {
            console.log(this.name+" "+this.roll);
        }
    }

    let s1 = new Student("Vijay", 12);
    s1.showDetails();

  
