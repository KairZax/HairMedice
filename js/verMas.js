let array=["<h3>Plasma Rico en Plaquetas</h3><p>Estimula los folículos capilares mediante factores de crecimiento propios de la sangre del paciente.👉 Favorece el engrosamiento del cabello y retrasa la caída.</p>","<h3>Mesoterapia Capilar</h3><p>Microinyecciones de nutrientes, vitaminas y medicamentos en el cuero cabelludo.👉 Promueve la regeneración, mejora la circulación y fortalece el cabello.</p>","<h3>Alta Frecuencia Capilar</h3><p>Terapia que estimula la oxigenación y circulación del cuero cabelludo.👉 Favorece la salud del folículo y disminuye la caída.</p>","<h3>Sueroterapia Capilar</h3><p>Infusión intravenosa de vitaminas y minerales.👉 Potencia los resultados de los tratamientos capilares desde adentro.</p>"];
let info=document.querySelector('#texto-vermas');
let bt1=document.querySelector('#btn-plasma');
let bt2=document.querySelector('#btn-mesoterapia');
let bt3=document.querySelector('#btn-frecuencia');
let bt4=document.querySelector('#btn-suero');

bt1.addEventListener("click",(e)=>{
    e.preventDefault();
    verMas(array[0]);
})
bt2.addEventListener("click",(e)=>{
    e.preventDefault();
    verMas(array[1]);
})
bt3.addEventListener("click",(e)=>{
    e.preventDefault();
    verMas(array[2]);
})
bt4.addEventListener("click",(e)=>{
    e.preventDefault();
    verMas(array[3]);
})
function verMas(Texto){
    console.log(Texto)

    if(!info.classList.contains('mostrar')){
        info.classList.add('mostrar');
    }
        info.innerHTML=Texto;
}