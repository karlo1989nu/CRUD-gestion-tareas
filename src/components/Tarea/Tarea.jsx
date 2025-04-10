function Tarea({ tarea, eliminarTarea, actualizarTarea }) {
  const { id, titulo, descripcion, completada } = tarea;

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px 0",
        borderRadius: "5px",
      }}
    >
      <h3 style={{ textDecoration: completada ? "line-through" : "none" }}>
        {titulo}
      </h3>
      <p>{descripcion}</p>
      <div>
        <button
          onClick={() => eliminarTarea(id)}
          style={{ marginRight: "10px" }}
        >
          Eliminar
        </button>
        <button
          onClick={() => actualizarTarea(id)}
          style={{ marginRight: "10px" }}
        >
          Editar
        </button>
        <label>
          <input type="checkbox" onChange={() => (checked = { completada })} />
          Completada
        </label>
      </div>
    </div>
  );
}

export default Tarea;
