function fetchValue(){
    var name=document.getElementById("name").value;
    var mail=document.getElementById("email").value;
    var gender=document.getElementById("gender").value;
    var dob=document.getElementById("dob").value;
    var phNo=document.getElementById("phoneNumber").value;

    //console.log(name);
    //console.log(mail);
    //console.log(gender);
    //console.log(dob);
    //console.log(phNo);

    document.write("Your Entered Details Are :- <br>")
    document.write("Name : "+name+"<br>");
    document.write("Email : "+mail+"<br>");
    document.write("Gender : "+gender+"<br>");
    document.write("DOB : "+dob+"<br>");
    document.write("Ph.Number : "+phNo+"<br>");
}