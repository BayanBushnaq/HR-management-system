'use strict';
var id = 999;
console.log(real_salary())

const allEmployee = [];
function Employee(employeeID,fullName,department,level,imageURL,netSalary){
    this.employeeID = employeeID,
    this.fullName=fullName,
    this.department=department,
    this.level=level,
    this.imageURL=imageURL,
    this.netSalary=netSalary
    allEmployee.push(this);
}

Employee.prototype.render = function (){
    document.write(`<h2> Employee_ID : ${this.employeeID}</h2>`)
    document.write(`<h2>Employee name:${this.fullName} </h2>`)   
    document.write(`<h2>Department:${this.department} </h2>`)
    document.write(`<h2>Employee salary:${this.netSalary} JD </h2>`)
    document.write(`<br>`)
}

let ghazi =new Employee(unique_id(),"Ghazi Samer","Administration","Senior","/.pic/1.jpg",real_salary());
let lana =new Employee(unique_id(),"Lana Ali","Finance","Senior","/.pic/3.jpg",real_salary());
let tamara =new Employee(unique_id(),"Tamara Ayoub","Marketing","Senior","/.pic/7.jpg",real_salary());
let safi =new Employee(unique_id(),"Safi Walid","Administration","Mid-Senior","/.pic/2.jpg",real_salary());
let omar =new Employee(unique_id(),"Omar Zaid","Development","Senior","/.pic/4.jpg",real_salary());
let rana =new Employee(unique_id(),"Rana Saleh","Development","Junior","/.pic/6.jpg",real_salary());
let hadi =new Employee(unique_id(),"Hadi Ahmad","Finance","Mid-Senior","/.pic/5.jpg",real_salary());

ghazi.render();
lana.render();
tamara.render();
safi.render();
omar.render();
rana.render();
hadi.render();



function real_salary(){
    if(length==="Junior"){
        var min =500
        var max = 1000
        var sal= Math.floor(Math.random() * (max - min + 1)) + min;
        var new_sal = sal - (sal*0.075)
        if(new_sal<min || new_sal > max){
            var sal= Math.floor(Math.random() * (max - min + 1)) + min;
            var new_sal = sal - (sal*0.075)  
        }
        
    } else if(length==="Mid-Senior"){
        var min =1000
        var max = 1500
        var sal=Math.floor(Math.random() * (max - min + 1)) + min;
        var new_sal = sal - (sal*0.075)
        if(new_sal<min || new_sal > max){
            var sal= Math.floor(Math.random() * (max - min + 1)) + min;
            var new_sal = sal - (sal*0.075)  
        }
        
    } else if(length==="Senior"){
        var min =1500
        var max = 2000
        var sal=Math.floor(Math.random() * (max - min + 1)) + min;
        var new_sal = sal - (sal*0.075)
        if(new_sal<min || new_sal > max){
            var sal= Math.floor(Math.random() * (max - min + 1)) + min;
            var new_sal = sal - (sal*0.075)  
        }
        
    }  return new_sal  }





var counter ;
        function unique_id(){
            id++
            counter=id
            return counter
                   
        }







