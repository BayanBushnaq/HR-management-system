'use strict';
var id = 999;
const body = document.getElementsByTagName('body');

const allEmployee = [];
function Employee(employeeID,fullName,department,level,imageURL,netSalary){
    this.employeeID = employeeID;
    this.fullName=fullName;
    this.department=department;
    this.level=level;
    this.imageURL=imageURL;
    this.netSalary=this.realSalary();
  
    allEmployee.push(this);
}

Employee.prototype.render = function (){
 
    const divEl = document.createElement('div');
    body[0].appendChild(divEl);
    divEl.classList.add('container');

    const box = document.createElement('div')
    box.classList.add('Box');
    divEl.appendChild(box);



    const imgEl = document.createElement('img');
    imgEl.classList.add('persImg')
    imgEl.src = this.imageURL;
    imgEl.alt = this.fullName;
    box.appendChild(imgEl);

    const pEl = document.createElement('p');
    pEl.textContent = `Name : ${this.fullName} - ID: ${this.employeeID}`;
    box.appendChild(pEl);

    const pE2 = document.createElement('p')
    pE2.textContent= `Department : ${this.department} - Level : ${this.level}`
    box.append(pE2);

    const pE3 = document.createElement('p')
    pE3.textContent=`${this.netSalary}`
    box.append(pE3);
    
    
    
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

let ghazi =new Employee(unique_id(),"Ghazi Samer","Administration","Senior","./Assets/Ghazi.jpg");
let lana =new Employee(unique_id(),"Lana Ali","Finance","Senior","./Assets/Lana.jpg");
let tamara =new Employee(unique_id(),"Tamara Ayoub","Administration","Senior","./Assets/Tamara.jpg");
let safi =new Employee(unique_id(),"Safi Walid","Administration","Mid-Senior","./Assets/Safi.jpg");
let omar =new Employee(unique_id(),"Omar Zaid","Development","Senior","./Assets/Omar.jpg");
let rana =new Employee(unique_id(),"Rana Saleh","Development","Junior","./Assets/Rana.jpg");
let hadi =new Employee(unique_id(),"Hadi Ahmad","Finance","Mid-Senior","./Assets/Hadi.jpg");

// for(var i=0;i<allEmployee.length;i++){
// document.write(allEmployee[i].render());
// }

 ghazi.render();
lana.render();
tamara.render();
safi.render();
omar.render();
rana.render();
hadi.render();







var counter ;
        function unique_id(){
            id++
            counter=id
            return counter
                   
        }







