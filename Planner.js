/*
addTask(task): recibe un objeto que contiene la tarea y la agrega al array de tareas. La tarea debe estar conformada por las siguientes propiedades: id, name, priority, tags y completed, donde el estado completed se agrega automáticamente como falso al momento de agregar una tarea.
removeTask(value): recibe el id o nombre de la tarea y la elimina del array de tareas.
getTasks(): Devuelve el array de tareas.
getPendingTasks(): Devuelve solo las tareas pendientes.
getCompletedTasks(): Devuelve solo las tareas completadas.
markTaskAsCompleted(value): Recibe el id o nombre de la tarea y la marca como completada.
getSortedTasksByPriority(): Devuelve una copia de las tareas ordenadas según su prioridad (3: poco urgente, 2: urgente, 1: muy urgente), sin modificar la lista de tareas original.
filterTasksByTag(tag): Filtra las tareas por una etiqueta específica.
updateTask(taskId, updates): Buscar la tarea correspondiente con el id especificado y actualizar sus propiedades con las especificadas en el objeto updates.
*/


function createTaskPlanner() {
    listaTareas = []
    class task {
        constructor(
            {
                id,
                name,
                priority = 3,
                tags = [],
                completed = false,   
            }
        ){
            this.id = id;
            this.name = name;
            this.priority = priority;
            this.tags = tags
            this.completed = completed
        }
    }

    return {
        addTask(currentTask){

            let newTask = new task(currentTask)
            listaTareas.push(newTask)
        },

        removeTask(value){

            let indexOfTask = listaTareas.indexOf(listaTareas.find(tarea => tarea.name === value || tarea.id === value))

            listaTareas.splice(indexOfTask,1)
        },

        getTasks(){

            console.log(listaTareas)
        },

        getPendingTasks(){

            let pendingTask = []
            pendingTask = listaTareas.filter(element => element.completed === false)
            console.log(pendingTask)
        },
        getCompletedTasks(){

            let completedTask = []
            completedTask = listaTareas.filter(element => element.completed === true)
            console.log(completedTask)
        }, 

        markTaskAsCompleted(value){

            taskIndex = listaTareas.indexOf(listaTareas.find(tarea => tarea.name === value || tarea.id === value))
            listaTareas[taskIndex].completed = true
            console.log(listaTareas)
        },
        
        getSortedTasksByPriority(){
            let PriorityArray = []
            console.log(listaTareas)
            
        },

    }
    
}


let planner1 = createTaskPlanner();

planner1.addTask({
    id: 1,
    name: "Comprar leche",
    priority: 1,
    tags: ["shopping", "home"]
});

planner1.addTask({
    id: 2,
    name: "Llamar a Juan",
    priority: 3,
    tags: ["personal"]
});

planner1.getPendingTasks()
/*
planner1.getTasks()

planner1.removeTask(1)

planner1.getTasks()
*/

planner1.markTaskAsCompleted("Llamar a Juan")
planner1.getPendingTasks()
planner1.getCompletedTasks()

/*Output:
planner.getCompletedTasks()
[{
    id: 2,
    name: "Llamar a Juan",
    completed: true,
    priority: 3,
    tags: ["personal"]
}]
*/

let planner = createTaskPlanner();

planner.addTask({
    id: 1,
    name: "Comprar leche",
    priority: 1,
    tags: ["shopping", "home"]
});

planner.addTask({
    id: 2,
    name: "Llamar a Juan",
    priority: 3,
    tags: ["personal"]
});

/*Output:
planner.filterTasksByTag("shopping")
[{
    id: 1,
    name: "Comprar leche",
    completed: false,
    priority: 3,
    tags: ["shopping", "home"]
}]*/

