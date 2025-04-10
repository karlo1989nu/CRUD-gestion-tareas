# Gestión de Tareas (TODO App)

Una aplicación de lista de tareas (TODO) desarrollada en React que permite realizar operaciones CRUD completas: agregar, editar, eliminar y marcar tareas como completadas. Además, las tareas se guardan en `localStorage` para persistencia.

---

## Características

- **Agregar Tareas**: Crea nuevas tareas con un título y una descripción opcional.
- **Editar Tareas**: Modifica el título y la descripción de una tarea existente.
- **Eliminar Tareas**: Elimina tareas de la lista.
- **Marcar como Completada**: Marca tareas como completadas con un checkbox.
- **Persistencia**: Las tareas se guardan automáticamente en `localStorage` para que no se pierdan al recargar la página.
- **Validaciones**:
  - El título es obligatorio y tiene un límite de 50 caracteres.
  - Mensajes de error claros y visibles.
- **Interfaz Atractiva**: Estilos con colores pastel y diseño responsivo.

---

## Tecnologías Utilizadas

- **React**: Biblioteca principal para construir la interfaz de usuario.
- **Vite**: Herramienta de desarrollo para crear el proyecto React.
- **CSS**: Para los estilos de la aplicación.

---

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/karlo1989nu/gestion-tareas.git

   ```

2. Navega al directorio del proyecto:

   ```bash
   cd gestion-tareas

   ```

3. Instala las dependencias:

   ```bash
   npm install

   ```

4. Inicia el servidor de desarrollo:

   ```bash
   npm run dev

   ```

5. Abre tu navegador en http://localhost:5173 para ver la aplicación.

## Estructura del Proyecto

src/
├── components/
│ ├── FormularioTarea/
│ │ └── FormularioTarea.jsx
│ ├── ListaTareas/
│ │ └── ListaTareas.jsx
│ └── Tarea/
│ └── [Tarea.jsx](http://_vscodecontentref_/1)
├── App.jsx
├── App.css
└── main.jsx

## Funcionalidades

1. Agregar Tareas
   - Completa el formulario con un título (obligatorio) y una descripción (opcional).
   - Haz clic en "Agregar Tarea" para añadirla a la lista.
2. Editar Tareas
   - Haz clic en el botón "Editar" de una tarea.
   - Los datos de la tarea aparecerán en el formulario.
   - Modifica los datos y haz clic en "Guardar Cambios".
3. Eliminar Tareas
   - Haz clic en el botón "Eliminar" para quitar una tarea de la lista.
4. Marcar como Completada
   - Usa el checkbox para marcar una tarea como completada. Esto aplicará un estilo de "tachado" al título.
5. Persistencia
   - Las tareas se guardan automáticamente en localStorage y se cargan al iniciar la aplicación.

## Validaciones

- El título de la tarea es obligatorio.
- El título no puede exceder los 50 caracteres.
- Si hay errores, se muestran mensajes en rojo debajo del campo correspondiente.

## Estilos

- Formulario: Bordes redondeados, sombras suaves y espaciado adecuado.
- Lista de Tareas: Espaciado consistente entre tareas y efectos hover.
- Mensajes de Error: Texto en rojo claro para indicar errores.

## Próximas Mejoras

- Agregar filtros para mostrar tareas completadas o pendientes.
- Implementar un contador de tareas.
- Agregar soporte para temas claros y oscuros.
- Integrar una base de datos para almacenamiento remoto.

## Contribuciones

¡Las contribuciones son bienvenidas! Si deseas mejorar este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu funcionalidad (git checkout -b nueva-funcionalidad).
3. Realiza tus cambios y haz un commit (git commit -m 'Agrega nueva funcionalidad').
4. Haz un push a tu rama (git push origin nueva-funcionalidad).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT. Puedes usarlo, modificarlo y distribuirlo libremente.

## Autor

Desarrollado por Karlo Navarro Ulate. ¡Gracias por usar esta aplicación!
