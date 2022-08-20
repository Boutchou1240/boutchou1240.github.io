//Exemple1
function affiche()
{
    var v1= Number(document.getElementById('val1').value);
    var v2= Number(document.getElementById('val2').value);
    var a= document.getElementById("addition");
    var b= document.getElementById("soustraction");
    var c= document.getElementById("multiplication");
    var d= document.getElementById("division");
    var t= [a.innerText,b.innerText,c.innerText,d.innerText];
    // for(var i=0;i<=3;i++)
    // {
    //     alert(t[i]);
    // }
    
    var collection = document.getElementsByTagName("button");
    for(var  x in collection)
    {
        alert(collection[x]);
    }
    // alert(document.querySelector("div:first-child").innerHTML);
    // alert(document.getElementsByTagName("button"));
    // if(a=="+"){
    //     document.getElementById('resultat').value = somme(v1,v2);
    // }
    //     else if(a=="-"){
    //         document.getElementById('resultat').value = reste(v1,v2);
    //     }
    //         else if(a=="*"){
    //         document.getElementById('resultat').value = produit(v1,v2);
    //     }
    //             else {
    //         document.getElementById('resultat').value = division(v1,v2);
    //     }
    /*document.getElementById('resultat').value = reste(v1,v2);
    document.getElementById('resultat').value = produit(v1,v2);
    document.getElementById('resultat').value = division(v1,v2);*/
}
//Addition
function somme(a,b){
    return a+b;
}

//Soustraction
function reste(a,b){
    return a-b;
}

//Multiplication
function produit(a,b){
    return a*b;
}

//Division
function division(a,b){
    return a/b;
}
