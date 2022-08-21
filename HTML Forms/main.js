var year=document.getElementById('year')

for(let i = 2000; i<=2010; i++){
    let years = document.createElement("option")
    years.innerText = i;
    year.appendChild(years);
}



function y(){
    console.log(year.value)
}
year.addEventListener("change" , y);
    
