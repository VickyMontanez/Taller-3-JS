/* Taller 3 JavaScript
1. Construir un objeto literal "campus" que gestione
la info(PROPIEDADES) de Campus, trainers, campers, niveles,
tecnologías, teams y roadMap
1.1. De campus administrar los datos de contacto de las sedes en
Bucaramanga, Bogotá, Medellín y México
1.2. De los trainers y campers, su nombre, sus teléfonos, teams
(horarios de las teams=> día, hora y salones (nro y piso), y el
email, y de los campers también horarios de inglés y ser.
1.3. De los campers, también gestionar su nivel actual, como su
barrio y medio de transporte
1.4. De los niveles, su pre requisito, a que tecnología pertenece, si
es electiva u obligatoria
1.5. De la roadmap , Nro de créditos, año, Nro de asignaturas */

let Admisedes = document.querySelector("#Admisedes");
let Teams = document.querySelector("#Teams");
let campus= {};

Admisedes.addEventListener("submit",(e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target))
    console.log(data);
    campus[`${data.sedes}`] = {Camper: [], Trainers: []};
    listaSedes();
    Admisedes.reset();
});

let listaSedes = ()=>{
    let opciones = document.querySelector("[name='sede']");
    opciones.innerHTML = null;
    for (let [val, id] of Object.entries(campus)) {
        opciones.insertAdjacentHTML("beforeend",` <option value="${val}">${val}</option>`);
    }
};

Teams.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    console.log(data);
    let sede = data.sede;
    delete data.sede;
    campus[`${sede}`]["Camper"].unshift(data);
    console.log(campus);
    Teams.reset();
});

function myFunc() {
    var resul = document.getElementById('optionteam')
if (resul && resul.value == "none") {
    document.getElementById("totros").style="display:none";
    document.getElementById("ts4").style="display:none";
    document.getElementById("tc4").style="display:none";
    document.getElementById("t2").style="display:none";
    document.getElementById("t1").style="display:none";
}else if (resul && resul.value == "Team_1") {
    document.getElementById("t1").style="display:block";
    document.getElementById("totros").style="display:none";
}else if (resul && resul.value == "Team_2"){
    document.getElementById("t2").style="display:block";
    document.getElementById("t1").style="display:none";
    document.getElementById("totros").style="display:none";
}else if (resul && resul.value == "Team_C4"){
    document.getElementById("tc4").style="display:block";
    document.getElementById("t2").style="display:none";
    document.getElementById("t1").style="display:none";
    document.getElementById("totros").style="display:none";
}else if (resul && resul.value == "Team_S4"){
    document.getElementById("ts4").style="display:block";
    document.getElementById("tc4").style="display:none";
    document.getElementById("t2").style="display:none";
    document.getElementById("t1").style="display:none";
    document.getElementById("totros").style="display:none";
}else if (resul && resul.value == "Team_E3"){
    document.getElementById("totros").style="display:block";
    document.getElementById("ts4").style="display:none";
    document.getElementById("tc4").style="display:none";
    document.getElementById("t2").style="display:none";
    document.getElementById("t1").style="display:none";
}else if (resul && resul.value == "Team_W3"){
    document.getElementById("totros").style="display:block";
    document.getElementById("ts4").style="display:none";
    document.getElementById("tc4").style="display:none";
    document.getElementById("t2").style="display:none";
    document.getElementById("t1").style="display:none";
}else if (resul && resul.value == "Team_W4"){
    document.getElementById("totros").style="display:block";
    document.getElementById("ts4").style="display:none";
    document.getElementById("tc4").style="display:none";
    document.getElementById("t2").style="display:none";
    document.getElementById("t1").style="display:none";
}
};

function myFuncDay(myFunc){
    var day = document.getElementsByName("dias")
if (day && day.value == "Viernes") {
    if (myFunc  () == resul && resul.value == "Team_1"){}
    document.getElementById("t1").style="display:none";
    document.getElementById("tv1").style="display: block";
}
}