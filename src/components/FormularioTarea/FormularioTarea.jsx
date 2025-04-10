import { useState } from "react";

function FormularioTarea({ agregarTarea, actualizarTarea }) {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [error, setError] = useState("");

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
    agregarTarea(titulo, descripcion); // Llama a agregarTarea con los valores correctos
    actualizarTarea(titulo, descripcion); // Llama a actualizarTarea con los valores correctos
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
      <button type="submit" disabled={!!error || !titulo.trim()}>
        Agregar Tarea
      </button>
    </form>
  );
}

export default FormularioTarea;
