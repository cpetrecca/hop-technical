# HOP Ejercicio Tecnico

## Author
Cristian Petrecca

## El ejercicio
Realizar un  tablero Kanban de tres columnas: Sin realizar - En proceso - Realizado.
- Se deben poder crear tareas. Las tareas poseen solamente una descripción.
- Las tareas se deben poder mover entre las columnas (con drag and drop o un botón).
- No es necesaria la persistencia de dichas tareas.

## Planificacion a Realizacion
- Boilerplate creado con create-react-app con typescript template. 
- Vamos a utilizar Tailwind como utility-first CSS framework instalado como dev dep.
- Vamos a utilizar un config para hacer dinamica la cantidad de columnas y que el flow sea escalable.
- Algunos test unitarios porque nunca estan de mas pero seran mantenido al minimo ya que no son pedidos.
- Implementaremos drag and drop ya que es la UX esperada para este tipo de apps.
- Creacion de tareas por formulario, display en modal usando usePortal hook.
- Para mantener el codigo mas limpio y modularizado vamos a manejar la logica de las tareas usando un custom hook.

## Pensamientos y conclusiones luego de hacer el ejercicio
- En un acto de rebeldia me tome mucho mas tiempo de las 3 horas propuesta (unas 10 diria) para poder hacer el ejercicio a conciencia con una estructura decente.
- Asi y todo no hice espacio para hacer pruebas unitarias de componenntes ni funcionales de hook usando hooks testing library
- Teniendo en cuenta casos de uso hubiese hecho las tareas en un store de contextApi para evitar.
- Cree alguna dummy data para que se inicialice con algo cargado.
- De querer dedicarle mas tiempo y que no se haya hecho viernes a la tarde tan pronto hubiese pasado absolutamente todas las strings del codigo como titulos y tal al config.
- Me diverti.


## Correr la app bajando de repositorio git y correr en ambiente local
- 1- Clonar Repositorio
- 2- ejecutar npm install para instalar dependencias necesarias
- 3- ejecutar npm start para que corra en http://localhost:3000/


## Live URL
Subido a una maquina virtual que deberia darse de baja el mes que viene, no esta seteado y le faltan algunos retoques de estilos para que el build sea optimo... pero esta.
http://burocros.com.ar/

PS:nunca le saque los SSL
