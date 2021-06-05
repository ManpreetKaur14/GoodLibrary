function random_function()
{
    var a=document.getElementById("input").value;
    if(a==="BCA")
    {
        var arr=["Select Semester","1","2","3","4","5","6"];
    }
    else if(a==="BBA")
    {
         arr=["Select Semester","1","2","3","4","5","6"];
    }
    else if(a==="MCA")
    {
         arr=["Select Semester","1","2","3","4"];
    }
    else
    {
         arr=["Select Semester","1","2","3","4","5","6","7","8"];

    }   
    var string="";
 
    for(i=0;i<arr.length;i++)
    {
       string=string+"<option value="+arr[i]+">"+arr[i]+"</option>";
       
    }
    document.getElementById("output").innerHTML=string;
     
}

function random_function_sem(){
    var a=document.getElementById("input").value;
    var b=document.getElementById("output").value;
    console.log(a,b)
    if(a=="BCA" && b=="2")
    {
    
        var arr2=["Select Subject","5","6"];
    }
    else
    {
        arr2=["Select Subject","bingo"];
    }
    var string2="";
 
    for(i=0;i<arr2.length;i++)
    {
        string2=string2+"<option value="+arr2[i]+">"+arr2[i]+"</option>";
    }
    document.getElementById("output2").innerHTML=string2;
}
