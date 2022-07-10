// alert("HELLO")

// var x;
// let y;
// const z = 15;
// console.log(x);
// x = 20;
// y= x;
// console.log(x,"","",z);
// x = 20;
// var name  = "JA";
// var lastname ="Muzzzy";
// var a = "10";
// var b =  "22";
// console.log(name + lastname);
// console.log(name + x);
// console.log(parseInt(a) + parseInt(b));
// console.log(parseInt(a)  /parseInt(b));
// console.log(parseInt(a) - parseInt(b));
// console.log(parseInt(a) * parseInt(b));
// console.log(parseInt(a) % 7);


// // data type// 
// var xx = 123;
// var yy = "hello";
// var zz = xx == yy;
// var ar = ["red","green", "blue"];
// console.log(typeof xx );
// console.log(typeof yy);
// console.log(typeof zz, typeof zz);
// console.log(ar[0]);
// console.log(ar.length)
// ar.push("black");
// console.log(ar);

// var obj= {
//     name:"JA",
// lastname : "muzzzy"
// };
// console.log(obj, obj.name);
// console.log(obj["name"]);
// obj.age = "25";
// console.log(obj);


function DateTimeToday(){
var today = new Date();
        
var dateTime = today.getFullYear()+'-'
        +(today.getMonth()+1)+":"+ today.getDate()+ "/"
       
today.getHours() +":"
        + today.getMinutes() + ":" + today.getSecouds();
       

        alert(dateTime);
    };