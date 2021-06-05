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