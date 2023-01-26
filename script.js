const button = document.getElementById("button");
const input = document.getElementById("input");
const form = document.getElementById("form");
const table = document.getElementById("table") 

let number = "";

form.addEventListener("submit",(e)=>{
    e.preventDefault();
})

button.addEventListener("click",()=>{
    number = input.value; 
    console.log(number);

    for (let i = 0; i < 11; i++) {
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        td.innerHTML = number;
        const td2 = document.createElement("td");
        td2.innerHTML = i;
        const result = document.createElement("td");
        result.innerHTML = number * i;
        table.appendChild(tr);
        tr.appendChild(td);
        tr.appendChild(td2);
        tr.appendChild(result);
    }
});

