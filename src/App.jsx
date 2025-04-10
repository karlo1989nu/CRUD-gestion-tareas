import { useState, useEffect } from "react";
import "./App.css";
import FormularioTarea from "./components/FormularioTarea/FormularioTarea.jsx";
import ListaTareas from "./components/ListaTareas/ListaTareas.jsx";

function App() {
  const [tareas, setTareas] = useState(() => {
    const tareasGuardadas = localStorage.getItem("tareas");
    return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
  });

  const [tareaEditando, setTareaEditando] = useState(null); // Estado para la tarea en edición

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  const agregarTarea = (titulo, descripcion) => {
    const nuevaTarea = {
      id: Date.now(),
      titulo,
      descripcion,
      completada: false,
    };
    setTareas((prevTareas) => [...prevTareas, nuevaTarea]);
  };

  const eliminarTarea = (id) => {
    setTareas((prevTareas) => prevTareas.filter((tarea) => tarea.id !== id));
  };

  const actualizarTarea = (id, nuevosDatos) => {
    setTareas((prevTareas) =>
      prevTareas.map((tarea) =>
        tarea.id === id ? { ...tarea, ...nuevosDatos } : tarea
      )
    );
    setTareaEditando(null); // Reinicia el estado de edición
  };

  const seleccionarTareaParaEditar = (tarea) => {
    setTareaEditando(tarea); // Establece la tarea seleccionada para edición
  };

  return (
    <>
      <div>
        <h1>Gestión de Tareas</h1>
        <FormularioTarea
          agregarTarea={agregarTarea}
          actualizarTarea={actualizarTarea}
          tareaEditando={tareaEditando}
        />
        <ListaTareas
          tareas={tareas}
          eliminarTarea={eliminarTarea}
          seleccionarTareaParaEditar={seleccionarTareaParaEditar}
        />
      </div>
    </>
  );
}

export default App;
