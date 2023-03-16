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
    listaSedes("[name='sedes']", campus);
    let sede = data.sedes;
    delete data.sedes;
    Admisedes.reset();

});

let listaSedes = (p1,p2)=>{
    let opciones = document.querySelector(p1);
    opciones.innerHTML = null;
    for (let [val, id] of Object.entries(p2)) {
        opciones.insertAdjacentHTML("beforeend",`+ <option value="${val}">${val}</option>`);
    }
};