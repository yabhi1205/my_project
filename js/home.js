add=document.getElementById("add");
add.addEventListener("click",()=>{
    console.log("abhinav yadav")
    naam=document.getElementById("name").value;
    roll=document.getElementById("roll").value;
    library=document.getElementById("library").value;
    sem=document.getElementById("sem").value;
    branch=document.getElementById("branch").value;
    if (localStorage.getItem("Abhinav")==null){
        AbhinavArray=[];
        AbhinavArray.push([naam,roll,library,sem,branch]);
        localStorage.setItem('Abhinav',JSON.stringify(AbhinavArray));
    }
    else{
        abhinavstr=localStorage.getItem("Abhinav")
        AbhinavArray=JSON.parse(abhinavstr)
        AbhinavArray.push([naam,roll,library,sem,branch]);
        localStorage.setItem('Abhinav',JSON.stringify(AbhinavArray));
    }
})

