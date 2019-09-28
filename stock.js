var totalcost=0;
var add1,add2,add3;
var email;
var phone;
function convert(){
    var id= document.getElementById("num").value;
    id=parseInt(id);
    document.getElementById("num").value=id+1;
    var code= document.getElementById("num1").value;
    var quan= document.getElementById("num2").value;
    var price= document.getElementById("num3").value;
    var cost= quan*price;
    totalcost+=cost;
    var table=document.getElementById("table");
    table.innerHTML+= "<tr><td>"+id +"</td><td>"+ code+ "</td><td>"+ quan+"</td><td>"+ price+"</td><td>"+ cost+"</td></tr>"
document.getElementById("total_cost").innerHTML="Total Cost: "+ totalcost;
}
function validate(id){
    var quan= document.getElementById(id);
    if(isNaN(parseInt(quan.value))){
        quan.style.borderColor="red";
    }
    else{
        quan.style.borderStyle="";
        quan.style.borderColor="";
        quan.style.borderWidth="";
    }
    
}

function convert1(){
    var modal= document.getElementById("myModal");
    modal.style.display="block";

}

function convert3(){
    add1=document.getElementById("add1").value
    add2=document.getElementById("add2").value
    add3=document.getElementById("add3").value
    phone=document.getElementById("mobile").value
    email=document.getElementById("email").value
}
function close(){
    var modal= document.getElementById("myModal");
    modal.style.display="none";

}
//object,modal,bootsrap ui,array,