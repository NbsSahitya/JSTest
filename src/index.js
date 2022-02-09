function nameNumber()
{
    var name=document.getElementById("name1").value;
    var exp=/^[a-zA-Z\s]+$/;
    var val = exp.test(name);
    document.getElementById("name1").style.border="1px solid black";
    document.getElementById("p1").innerText="";
    var mobile = document.getElementById("mobile1").value;
    document.getElementById("mobile1").style.border="1px solid black";
    document.getElementById("p2").innerText="";
    let i=0;
    if(name == ""){
        document.getElementById("name1").style.border= "1px solid red";
        document.getElementById("p1").innerText="this field is required!";
        i=1;
    }
    else if(val != true){
        document.getElementById("name1").style.border= "1px solid red";
        document.getElementById("p1").innerText="name should be string!";
        i=1;

    }
    if(mobile.length != 10 ){
      document.getElementById("mobile1").style.border= "1px solid red";
      document.getElementById("p2").innerText="Number should be 10 digits!";
      i=1;
    }
    if(!i)
    {
        document.getElementById("dis").innerHTML = `${name} ${mobile}`;
    }
}