


function generate(){

    const Lengthh = document.getElementById("Length").value;
    const inc_cap = document.getElementById("inc_cap")
    const inc_sm = document.getElementById("inc_sm")
    const inc_n = document.getElementById("inc_n")
    const inc_s = document.getElementById("inc_s")
    const result =document.getElementById("result");
    
    const cap="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const sm="abcdefghijklmnopqrstuvwxyz";
    const n="0123456789";
    const s="!@#$%^&*()_+=?/:|";
    
    let allowedchar="";
    let pass="";
    


 allowedchar += inc_cap.checked ? cap : "";
 allowedchar += inc_sm.checked ? sm : "";
 allowedchar += inc_n.checked ? n : "";
 allowedchar += inc_s.checked ? s : "";
if(Lengthh<=0){
    result.textContent=`password length must be atleast one`;
    return;
}
if(allowedchar.length===0){

    result.textContent=`please select any one option`;
    return;
}

for(let i=0;i<Lengthh;i++){
    let index = Math.floor(Math.random()*allowedchar.length);
    pass+=allowedchar[index];
}
result.textContent=`Your password is = ${pass}`;
allowedchar="";
}