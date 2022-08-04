'use strict';
var id = 999;


const allEmployee = [];
function Employee(employeeID,fullName,department,level,imageURL){
    this.employeeID = employeeID;
    this.fullName=fullName;
    this.department=department;
    this.level=level;
    this.imageURL=imageURL;
    this.netSalary=this.realSalary();
  
    allEmployee.push(this);
}

Employee.prototype.render = function (){
    document.write(`<h2> Employee_ID : ${this.employeeID}</h2>`)
    document.write(`<h2>Employee name:${this.fullName} </h2>`)   
    document.write(`<h2>Department:${this.department} </h2>`)
    document.write(`<h2>Employee salary:${this.netSalary} JD </h2>`)
    document.write(`<br>`)
}
Employee.prototype.realSalary = function(){
   
            if(this.level==="Junior"){
                var min =500
                var max = 1000
                var sal= Math.floor(Math.random() * (max - min + 1)) + min;
                var new_sal = sal - (sal*0.075)
               
                
            } else if(this.level==="Mid-Senior"){
                var min =1000
                var max = 1500
                var sal=Math.floor(Math.random() * (max - min + 1)) + min;
                var new_sal = sal - (sal*0.075)
                  var new_sal = sal - (sal*0.075)  
               
                
            } else if(this.level==="Senior"){
                var min =1500
                var max = 2000
                var sal=Math.floor(Math.random() * (max - min + 1)) + min;
                var new_sal = sal - (sal*0.075)
                
                
            } console.log(new_sal)
             return new_sal  }

let ghazi =new Employee(unique_id(),"Ghazi Samer","Administration","Senior","/.pic/1.jpg");
let lana =new Employee(unique_id(),"Lana Ali","Finance","Senior","/.pic/3.jpg");
let tamara =new Employee(unique_id(),"Tamara Ayoub","Administration","Senior","/.pic/5.jpg");
let safi =new Employee(unique_id(),"Safi Walid","Administration","Mid-Senior","/.pic/2.jpg");
 let omar =new Employee(unique_id(),"Omar Zaid","Development","Senior","/.pic/4.jpg");
 let rana =new Employee(unique_id(),"Rana Saleh","Development","Junior","/.pic/6.jpg");
 let hadi =new Employee(unique_id(),"Hadi Ahmad","Finance","Mid-Senior","/.pic/5.jpg");

for(var i=0;i<allEmployee.length;i++){
document.write(allEmployee[i].render());
}

// ghazi.render();
// lana.render();
// tamara.render();
// safi.render();
// omar.render();
// rana.render();
// hadi.render();







var counter ;
        function unique_id(){
            id++
            counter=id
            return counter
                   
        }







