function pizza(){
    var a=Number(document.getElementById("a").value);
    var c=document.getElementById("wybor").value;
    var d=document.getElementById("wybor2").value;
    var t=document.getElementById("tak").checked;
    if(a<=0){alert("Zła ilość");}
    else{
    if(c=="p1"&& d=="w1"&& t)document.getElementById("wynik").innerHTML="Do zapłaty: "+(a*27+5)+"zł";
    if(c=="p1"&& d=="w1"&& !t)document.getElementById("wynik").innerHTML="Do zapłaty: "+(a*27)+"zł";
    if(c=="p1"&& d=="w2"&& t)document.getElementById("wynik").innerHTML="Do zapłaty: "+(a*27+a*7+5)+"zł";
    if(c=="p1"&& d=="w2"&& !t)document.getElementById("wynik").innerHTML="Do zapłaty: "+(a*27+a*7)+"zł";
    if(c=="p1"&& d=="w3"&& t)document.getElementById("wynik").innerHTML="Do zapłaty: "+(a*27+a*10+5)+"zł";
    if(c=="p1"&& d=="w3"&& !t)document.getElementById("wynik").innerHTML="Do zapłaty: "+(a*27+a*10)+"zł";


    if(c=="p2"&& d=="w1"&& t)document.getElementById("wynik").innerHTML="Do zapłaty: "+(a*25+5)+"zł";
    if(c=="p2"&& d=="w1"&& !t)document.getElementById("wynik").innerHTML="Do zapłaty: "+(a*25)+"zł";
    if(c=="p2"&& d=="w2"&& t)document.getElementById("wynik").innerHTML="Do zapłaty: "+(a*25+a*7+5)+"zł";
    if(c=="p2"&& d=="w2"&& !t)document.getElementById("wynik").innerHTML="Do zapłaty: "+(a*25+a*7)+"zł";
    if(c=="p2"&& d=="w3"&& t)document.getElementById("wynik").innerHTML="Do zapłaty: "+(a*25+a*10+5)+"zł";
    if(c=="p2"&& d=="w3"&& !t)document.getElementById("wynik").innerHTML="Do zapłaty: "+(a*25+a*10)+"zł";


    if(c=="p3"&& d=="w1"&& t)document.getElementById("wynik").innerHTML="Do zapłaty: "+(a*23+5)+"zł";
    if(c=="p3"&& d=="w1"&& !t)document.getElementById("wynik").innerHTML="Do zapłaty: "+(a*23)+"zł";
    if(c=="p3"&& d=="w2"&& t)document.getElementById("wynik").innerHTML="Do zapłaty: "+(a*23+a*7+5)+"zł";
    if(c=="p3"&& d=="w2"&& !t)document.getElementById("wynik").innerHTML="Do zapłaty: "+(a*23+a*7)+"zł";
    if(c=="p3"&& d=="w3"&& t)document.getElementById("wynik").innerHTML="Do zapłaty: "+(a*23+a*10+5)+"zł";
    if(c=="p3"&& d=="w3"&& !t)document.getElementById("wynik").innerHTML="Do zapłaty: "+(a*23+a*10)+"zł";


    if(c=="p4"&& d=="w1"&& t)document.getElementById("wynik").innerHTML="Do zapłaty: "+(a*41+5)+"zł";
    if(c=="p4"&& d=="w1"&& !t)document.getElementById("wynik").innerHTML="Do zapłaty: "+(a*41)+"zł";
    if(c=="p4"&& d=="w2"&& t)document.getElementById("wynik").innerHTML="Do zapłaty: "+(a*41+a*7+5)+"zł";
    if(c=="p4"&& d=="w2"&& !t)document.getElementById("wynik").innerHTML="Do zapłaty: "+(a*41+a*7)+"zł";
    if(c=="p4"&& d=="w3"&& t)document.getElementById("wynik").innerHTML="Do zapłaty: "+(a*41+a*10+5)+"zł";
    if(c=="p4"&& d=="w3"&& !t)document.getElementById("wynik").innerHTML="Do zapłaty: "+(a*41+a*10)+"zł";

    }
    }