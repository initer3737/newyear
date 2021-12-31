function year(){
    let year=new Date().getFullYear();
    let t=document.getElementById('year');
    t.innerHTML=year;
}
year();