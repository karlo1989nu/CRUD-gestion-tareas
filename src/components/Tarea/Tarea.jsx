function Tarea({ tarea, eliminarTarea, seleccionarTareaParaEditar }) {
  const { id, titulo, descripcion, completada } = tarea;

  return (
    <div
      style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}
    >
      <h3 style={{ textDecoration: completada ? "line-through" : "none" }}>
        {titulo}
      </h3>
      <p>{descripcion}</p>
      <div>
        <button onClick={() => eliminarTarea(id)}>Eliminar</button>
        <button onClick={() => seleccionarTareaParaEditar(tarea)}>
          Editar
        </button>
      </div>
    </div>
  );
}

export default Tarea;
