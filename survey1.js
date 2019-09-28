function subm(){
   var name=document.getElementById("name").value
    var email=document.getElementById("email").value
    var Age=document.getElementById("Age").value
    var dropdown=document.getElementById("dropdown").value
    var fcc=document.getElementById("FCC").value
    Age=parseInt(Age);
    var comments=document.getElementById("comments").value
    var data="Name: "+ name+"<br>"+ "E-mail: "+ email+"<br>"+ "Age: "+ Age+ +"<br>"+"Role: "+ dropdown+"<br>"+ "FCC: " + fcc+"<br>"+"comments: "+ comments;
    document.getElementById("demo").innerHTML=data;
}