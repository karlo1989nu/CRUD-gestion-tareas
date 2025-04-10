import { useState, useEffect } from "react";

function FormularioTarea({ agregarTarea, actualizarTarea, tareaEditando }) {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [error, setError] = useState("");

  // Cargar los datos de la tarea en edición al formulario
  useEffect(() => {
    if (tareaEditando) {
      setTitulo(tareaEditando.titulo);
      setDescripcion(tareaEditando.descripcion);
    } else {
      setTitulo("");
      setDescripcion("");
    }
  }, [tareaEditando]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titulo.trim()) {
      setError("El título es obligatorio.");
      return;
    }
    if (titulo.length > 50) {
      setError("El título no puede tener más de 50 caracteres.");
      return;
    }
    setError("");

    if (tareaEditando) {
      // Actualizar tarea existente
      actualizarTarea(tareaEditando.id, { titulo, descripcion });
    } else {
      // Agregar nueva tarea
      agregarTarea(titulo, descripcion);
    }

    setTitulo("");
    setDescripcion("");
  };

  const handleTituloChange = (e) => {
    const value = e.target.value;
    if (value.length > 50) {
      setError("El título no puede tener más de 50 caracteres.");
    } else {
      setError("");
    }
    setTitulo(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="titulo">Título:</label>
        <input
          type="text"
          id="titulo"
          value={titulo}
          onChange={handleTituloChange}
          placeholder="Escribe el título de la tarea"
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
      <div>
        <label htmlFor="descripcion">Descripción:</label>
        <textarea
          id="descripcion"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          placeholder="Escribe una descripción (opcional)"
        ></textarea>
      </div>
      <button type="submit">
        {tareaEditando ? "Guardar Cambios" : "Agregar Tarea"}
      </button>
    </form>
  );
}

export default FormularioTarea;
