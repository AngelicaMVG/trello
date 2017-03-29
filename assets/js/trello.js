// var ul = document.createElement('ul');
// var titulo = document.createElement('h5');
// var input = document.createElement('input');
// var boton = document.createElement('button');
// input.setAttribute('id', 'nuevoPendiente');
// boton.setAttribute('onclick', 'agregarPendiente()');
// ul.setAttribute('id','unorderedList');
var listas = document.getElementById('listas');
var nuevaLista = [];

function agregarLista(){
  var ul = document.createElement('ul');
  var titulo = document.createElement('h5');
  var input = document.createElement('input');
  var boton = document.createElement('button');
  var nueva = document.getElementById('listaNueva').value;
  var linea = document.createElement('hr');
  ul.innerHTML = nueva;
  listas.appendChild(ul);
  titulo.innerHTML = 'Agregar Pendiente';
  listas.appendChild(titulo);
  listas.appendChild(input);
  boton.innerHTML = 'Crear Pendiente';
  listas.appendChild(boton);
  listas.appendChild(linea);
  input.setAttribute('id', 'nuevoPendiente');
  boton.setAttribute('onclick', 'agregarPendiente()');
  boton.setAttribute('id', 'boton2')
  ul.setAttribute('id','unorderedList');
}

function agregarPendiente(){

  var listaPendiente = document.getElementById('unorderedList');
  var nuevoValorPendiente = document.getElementById('nuevoPendiente').value;
  var li = document.createElement('li');
  li.setAttribute('id', 'pendiente');
  li.innerHTML = nuevoValorPendiente;
  listaPendiente.appendChild(li);
}
