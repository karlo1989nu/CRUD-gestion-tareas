import Tarea from "../Tarea/Tarea.jsx";

function ListaTareas({ tareas, eliminarTarea, seleccionarTareaParaEditar }) {
  return (
    <div>
      {tareas.length === 0 ? (
        <p>No hay tareas, ¡agrega una!</p>
      ) : (
        tareas.map((tarea) => (
          <Tarea
            key={tarea.id}
            tarea={tarea}
            eliminarTarea={eliminarTarea}
            seleccionarTareaParaEditar={seleccionarTareaParaEditar}
          />
        ))
      )}
    </div>
  );
}

export default ListaTareas;
