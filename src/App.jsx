import { useState, useEffect } from "react";
import "./App.css";
import FormularioTarea from "./components/FormularioTarea/FormularioTarea.jsx";
import ListaTareas from "./components/ListaTareas/ListaTareas.jsx";

function App() {
  const [tareas, setTareas] = useState(() => {
    const tareasGuardadas = localStorage.getItem("tareas");
    return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
  });

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
    console.log("Tareas guardadas en localStorage:", tareas);
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
  };

  return (
    <>
      <div>
        <h1>Gestión de Tareas</h1>
        <FormularioTarea agregarTarea={agregarTarea} />
        <ListaTareas
          tareas={tareas}
          eliminarTarea={eliminarTarea}
          actualizarTarea={actualizarTarea}
        />
      </div>
    </>
  );
}

export default App;
