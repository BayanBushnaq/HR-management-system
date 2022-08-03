'use strict';
var id = 999;
const employee ={
    Employee_ID: id+1,
    get_unique_id: function(){
        console.log("Employee_ID="+ " "+ unique_id())},
    Full_Name:"Ghazi Samer",
    Deparment:"Administration",
    Level:"Senior",
    img: "Ghazi Sameer", photo_url: "/home/bushnaq/HR-management-system/copyright-expiry.png" ,
    Salary: function(){
        function real_salary(){
            if(employee.Level==="Junior"){
                var min =500
                var max = 1000
                var sal= Math.floor(Math.random() * (max - min + 1)) + min;
                var new_sal = sal - (sal*0.075)
                if(new_sal<min || new_sal > max){
                    var sal= Math.floor(Math.random() * (max - min + 1)) + min;
                    var new_sal = sal - (sal*0.075)  
                }
                
            } else if(employee.Level==="Mid-Senior"){
                var min =1000
                var max = 1500
                var sal=Math.floor(Math.random() * (max - min + 1)) + min;
                var new_sal = sal - (sal*0.075)
                if(new_sal<min || new_sal > max){
                    var sal= Math.floor(Math.random() * (max - min + 1)) + min;
                    var new_sal = sal - (sal*0.075)  
                }
                
            } else if(employee.Level==="Senior"){
                var min =1500
                var max = 2000
                var sal=Math.floor(Math.random() * (max - min + 1)) + min;
                var new_sal = sal - (sal*0.075)
                if(new_sal<min || new_sal > max){
                    var sal= Math.floor(Math.random() * (max - min + 1)) + min;
                    var new_sal = sal - (sal*0.075)  
                }
                
            } return new_sal }
        console.log(real_salary()) 
        }
        }
        var counter ;
        function unique_id(){
            id++
            counter=id
            return counter
                   
        }
        
        employee.get_unique_id()
        console.log("Employee name :" + " " + employee.Full_Name)
        console.log("Employee salary :")
        employee.Salary();
        




const employee1={
Employee_ID: id+1,
get_unique_id: function(){
    console.log("Employee_ID="+ " "+ unique_id())},
    Full_Name:"Lana Ali",
    Deparment:"Finance",
    Level:"Senior",
    img: "Ghazi Sameer", photo_url: "/home/bushnaq/HR-management-system/copyright-expiry.png" ,
    Salary: function(){
        function real_salary(){
            if(employee1.Level==="Junior"){
                var min =500
                var max = 1000
                var sal= Math.floor(Math.random() * (max - min + 1)) + min;
                var new_sal = sal - (sal*0.075)
                if(new_sal<min || new_sal > max){
                    var sal= Math.floor(Math.random() * (max - min + 1)) + min;
                    var new_sal = sal - (sal*0.075)  
                }
                
            } else if(employee1.Level==="Mid-Senior"){
                var min =1000
                var max = 1500
                var sal=Math.floor(Math.random() * (max - min + 1)) + min;
                var new_sal = sal - (sal*0.075)
                if(new_sal<min || new_sal > max){
                    var sal= Math.floor(Math.random() * (max - min + 1)) + min;
                    var new_sal = sal - (sal*0.075)  
                }
                
            } else if(employee1.Level==="Senior"){
                var min =1500
                var max = 2000
                var sal=Math.floor(Math.random() * (max - min + 1)) + min;
                var new_sal = sal - (sal*0.075)
                if(new_sal<min || new_sal > max){
                    var sal= Math.floor(Math.random() * (max - min + 1)) + min;
                    var new_sal = sal - (sal*0.075)  
                }
                
            } return new_sal }
        console.log(real_salary()) 
        }
        }
        var counter ;
        function unique_id(){
            id++
            counter=id
            return counter
                   
        }
        
        employee1.get_unique_id()
        console.log("Employee name :" + " " + employee1.Full_Name)
        console.log("Employee salary :")
        employee1.Salary();

        const employee2={
            Employee_ID: id+1,
            get_unique_id: function(){
                console.log("Employee_ID="+ " "+ unique_id())},
                Full_Name:"Tamara Ayoub",
                Deparment:"Marketing",
                Level:"Senior",
                img: "Ghazi Sameer", photo_url: "/home/bushnaq/HR-management-system/copyright-expiry.png" ,
                Salary: function(){
                    function real_salary(){
                        if(employee2.Level==="Junior"){
                            var min =500
                            var max = 1000
                            var sal= Math.floor(Math.random() * (max - min + 1)) + min;
                            var new_sal = sal - (sal*0.075)
                            if(new_sal<min || new_sal > max){
                                var sal= Math.floor(Math.random() * (max - min + 1)) + min;
                                var new_sal = sal - (sal*0.075)  
                            }
                            
                        } else if(employee2.Level==="Mid-Senior"){
                            var min =1000
                            var max = 1500
                            var sal=Math.floor(Math.random() * (max - min + 1)) + min;
                            var new_sal = sal - (sal*0.075)
                            if(new_sal<min || new_sal > max){
                                var sal= Math.floor(Math.random() * (max - min + 1)) + min;
                                var new_sal = sal - (sal*0.075)  
                            }
                            
                        } else if(employee2.Level==="Senior"){
                            var min =1500
                            var max = 2000
                            var sal=Math.floor(Math.random() * (max - min + 1)) + min;
                            var new_sal = sal - (sal*0.075)
                            if(new_sal<min || new_sal > max){
                                var sal= Math.floor(Math.random() * (max - min + 1)) + min;
                                var new_sal = sal - (sal*0.075)  
                            }
                            
                        } return new_sal }
                    console.log(real_salary()) 
                    }
                    }
                    var counter ;
                    function unique_id(){
                        id++
                        counter=id
                        return counter
                               
                    }
                    
                    employee2.get_unique_id()
                    console.log("Employee name :" + " " + employee2.Full_Name)
                    console.log("Employee salary :")
                    employee2.Salary();

                    const employee3={
                        Employee_ID: id+1,
                        get_unique_id: function(){
                            console.log("Employee_ID="+ " "+ unique_id())},
                            Full_Name:"Safi Walid",
                            Deparment:"Administration",
                            Level:"Mid-Senior",
                            img: "Ghazi Sameer", photo_url: "/home/bushnaq/HR-management-system/copyright-expiry.png" ,
                            Salary: function(){
                                function real_salary(){
                                    if(employee3.Level==="Junior"){
                                        var min =500
                                        var max = 1000
                                        var sal= Math.floor(Math.random() * (max - min + 1)) + min;
                                        var new_sal = sal - (sal*0.075)
                                        if(new_sal<min || new_sal > max){
                                            var sal= Math.floor(Math.random() * (max - min + 1)) + min;
                                            var new_sal = sal - (sal*0.075)  
                                        }
                                        
                                    } else if(employee3.Level==="Mid-Senior"){
                                        var min =1000
                                        var max = 1500
                                        var sal=Math.floor(Math.random() * (max - min + 1)) + min;
                                        var new_sal = sal - (sal*0.075)
                                        if(new_sal<min || new_sal > max){
                                            var sal= Math.floor(Math.random() * (max - min + 1)) + min;
                                            var new_sal = sal - (sal*0.075)  
                                        }
                                        
                                    } else if(employee3.Level==="Senior"){
                                        var min =1500
                                        var max = 2000
                                        var sal=Math.floor(Math.random() * (max - min + 1)) + min;
                                        var new_sal = sal - (sal*0.075)
                                        if(new_sal<min || new_sal > max){
                                            var sal= Math.floor(Math.random() * (max - min + 1)) + min;
                                            var new_sal = sal - (sal*0.075)  
                                        }
                                        
                                    } return new_sal }
                                console.log(real_salary()) 
                                }
                                }
                                var counter ;
                                function unique_id(){
                                    id++
                                    counter=id
                                    return counter
                                           
                                }
                                
                                employee3.get_unique_id()
                                console.log("Employee name :" + " " + employee3.Full_Name)
                                console.log("Employee salary :")
                                employee3.Salary();

                                const employee4={
                                    Employee_ID: id+1,
                                    get_unique_id: function(){
                                        console.log("Employee_ID="+ " "+ unique_id())},
                                        Full_Name:"Omar Zaid",
                                        Deparment:"Development",
                                        Level:"Senior",
                                        img: "Ghazi Sameer", photo_url: "/home/bushnaq/HR-management-system/copyright-expiry.png" ,
                                        Salary: function(){
                                            function real_salary(){
                                                if(employee4.Level==="Junior"){
                                                    var min =500
                                                    var max = 1000
                                                    var sal= Math.floor(Math.random() * (max - min + 1)) + min;
                                                    var new_sal = sal - (sal*0.075)
                                                    if(new_sal<min || new_sal > max){
                                                        var sal= Math.floor(Math.random() * (max - min + 1)) + min;
                                                        var new_sal = sal - (sal*0.075)  
                                                    }
                                                    
                                                } else if(employee4.Level==="Mid-Senior"){
                                                    var min =1000
                                                    var max = 1500
                                                    var sal=Math.floor(Math.random() * (max - min + 1)) + min;
                                                    var new_sal = sal - (sal*0.075)
                                                    if(new_sal<min || new_sal > max){
                                                        var sal= Math.floor(Math.random() * (max - min + 1)) + min;
                                                        var new_sal = sal - (sal*0.075)  
                                                    }
                                                    
                                                } else if(employee4.Level==="Senior"){
                                                    var min =1500
                                                    var max = 2000
                                                    var sal=Math.floor(Math.random() * (max - min + 1)) + min;
                                                    var new_sal = sal - (sal*0.075)
                                                    if(new_sal<min || new_sal > max){
                                                        var sal= Math.floor(Math.random() * (max - min + 1)) + min;
                                                        var new_sal = sal - (sal*0.075)  
                                                    }
                                                    
                                                } return new_sal }
                                            console.log(real_salary()) 
                                            }
                                            }
                                            var counter ;
                                            function unique_id(){
                                                id++
                                                counter=id
                                                return counter
                                                       
                                            }
                                            
                                            employee4.get_unique_id()
                                            console.log("Employee name :" + " " + employee4.Full_Name)
                                            console.log("Employee salary :")
                                            employee4.Salary();

                                            const employee5={
                                                Employee_ID: id+1,
                                                get_unique_id: function(){
                                                    console.log("Employee_ID="+ " "+ unique_id())},
                                                    Full_Name:"Rana Saleh",
                                                    Deparment:"Development",
                                                    Level:"Junior",
                                                    img: "Ghazi Sameer", photo_url: "/home/bushnaq/HR-management-system/copyright-expiry.png" ,
                                                    Salary: function(){
                                                        function real_salary(){
                                                            if(employee5.Level==="Junior"){
                                                                var min =500
                                                                var max = 1000
                                                                var sal= Math.floor(Math.random() * (max - min + 1)) + min;
                                                                var new_sal = sal - (sal*0.075)
                                                                if(new_sal<min || new_sal > max){
                                                                    var sal= Math.floor(Math.random() * (max - min + 1)) + min;
                                                                    var new_sal = sal - (sal*0.075)  
                                                                }
                                                                
                                                            } else if(employee5.Level==="Mid-Senior"){
                                                                var min =1000
                                                                var max = 1500
                                                                var sal=Math.floor(Math.random() * (max - min + 1)) + min;
                                                                var new_sal = sal - (sal*0.075)
                                                                if(new_sal<min || new_sal > max){
                                                                    var sal= Math.floor(Math.random() * (max - min + 1)) + min;
                                                                    var new_sal = sal - (sal*0.075)  
                                                                }
                                                                
                                                            } else if(employee5.Level==="Senior"){
                                                                var min =1500
                                                                var max = 2000
                                                                var sal=Math.floor(Math.random() * (max - min + 1)) + min;
                                                                var new_sal = sal - (sal*0.075)
                                                                if(new_sal<min || new_sal > max){
                                                                    var sal= Math.floor(Math.random() * (max - min + 1)) + min;
                                                                    var new_sal = sal - (sal*0.075)  
                                                                }
                                                                
                                                            } return new_sal }
                                                        console.log(real_salary()) 
                                                        }
                                                        }
                                                        var counter ;
                                                        function unique_id(){
                                                            id++
                                                            counter=id
                                                            return counter
                                                                   
                                                        }
                                                        
                                                        employee5.get_unique_id()
                                                        console.log("Employee name :" + " " + employee5.Full_Name)
                                                        console.log("Employee salary :")
                                                        employee5.Salary();
    
                                                        const employee6={
                                                            Employee_ID: id+1,
                                                            get_unique_id: function(){
                                                                console.log("Employee_ID="+ " "+ unique_id())},
                                                                Full_Name:"Hadi Ahmad",
                                                                Deparment:"Finance",
                                                                Level:"Mid-Senior",
                                                                img: "Ghazi Sameer", photo_url: "/home/bushnaq/HR-management-system/copyright-expiry.png" ,
                                                                Salary: function(){
                                                                    function real_salary(){
                                                                        if(employee6.Level==="Junior"){
                                                                            var min =500
                                                                            var max = 1000
                                                                            var sal= Math.floor(Math.random() * (max - min + 1)) + min;
                                                                            var new_sal = sal - (sal*0.075)
                                                                            if(new_sal<min || new_sal > max){
                                                                                var sal= Math.floor(Math.random() * (max - min + 1)) + min;
                                                                                var new_sal = sal - (sal*0.075)  
                                                                            }
                                                                            
                                                                        } else if(employee6.Level==="Mid-Senior"){
                                                                            var min =1000
                                                                            var max = 1500
                                                                            var sal=Math.floor(Math.random() * (max - min + 1)) + min;
                                                                            var new_sal = sal - (sal*0.075)
                                                                            if(new_sal<min || new_sal > max){
                                                                                var sal= Math.floor(Math.random() * (max - min + 1)) + min;
                                                                                var new_sal = sal - (sal*0.075)  
                                                                            }
                                                                            
                                                                        } else if(employee6.Level==="Senior"){
                                                                            var min =1500
                                                                            var max = 2000
                                                                            var sal=Math.floor(Math.random() * (max - min + 1)) + min;
                                                                            var new_sal = sal - (sal*0.075)
                                                                            if(new_sal<min || new_sal > max){
                                                                                var sal= Math.floor(Math.random() * (max - min + 1)) + min;
                                                                                var new_sal = sal - (sal*0.075)  
                                                                            }
                                                                            
                                                                        } return new_sal }
                                                                    console.log(real_salary()) 
                                                                    }
                                                                    }
                                                                    var counter ;
                                                                    function unique_id(){
                                                                        id++
                                                                        counter=id
                                                                        return counter
                                                                               
                                                                    }
                                                                    
                                                                    employee6.get_unique_id()
                                                                    console.log("Employee name :" + " " + employee6.Full_Name)
                                                                    console.log("Employee salary :")
                                                                    employee6.Salary();




                                                                