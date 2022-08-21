let year=document.getElementById('yr');
// console.log(year);
let year1 = 2000;
for(let i = year1; i<=2020; i++){
    let getYear = document.createElement("option")
    // console.log(getYear);
    getYear.innerText = year1
   year1++;
    year.appendChild(getYear);
}