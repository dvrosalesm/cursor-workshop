"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";

type Idea = {
  id: string;
  title: string;
  summary: string;
  details: string;
  prompts: string[];
};

const IDEAS = [
  {
    id: "cv-page",
    title: "Página de Presentación / CV",
    summary: "Tu sitio personal con CV y portafolio.",
    details:
      "Construye una página simple para presentarte: foto, bio, habilidades, experiencia, proyectos y contacto. Añade SEO básico y modo oscuro.",
    prompts: [
      "Diseña y construye la página de aterrizaje principal como una experiencia de una sola página ('single-page'). El objetivo es que un visitante pueda evaluar rápidamente el perfil del propietario. Debe contener las siguientes secciones en orden: un 'Hero' de bienvenida con nombre y titular, 'Sobre mí', 'Habilidades', 'Experiencia Profesional', 'Proyectos' y un formulario de 'Contacto'. La navegación debe ser fluida y todo el contenido personal (textos, proyectos, etc.) debe estar centralizado en un archivo de configuración (ej: JSON) para facilitar su edición.",
      "Crea un sistema de componentes reutilizables y accesibles para mostrar la información clave. Esto incluye: una 'Tarjeta de Proyecto' que debe mostrar título, descripción, etiquetas de tecnología y enlaces externos; una lista de 'Habilidades' que se visualicen como badges o píldoras; y un 'Formulario de Contacto' que valide las entradas del usuario (email válido, campos requeridos) y muestre mensajes de estado claros.",
      "Implementa una funcionalidad de personalización de tema que permita al usuario cambiar entre un modo claro y uno oscuro. Debe haber un control de cambio de tema claramente visible en la interfaz. La elección del usuario debe persistir entre sesiones (ej: guardado en localStorage), y todos los componentes de la página deben adaptarse correctamente a ambos temas sin sacrificar la legibilidad.",
      "Asegura que el sitio esté optimizado para ser descubierto y compartido. La página debe tener metadatos SEO adecuados, incluyendo un título de página y una descripción meta únicos. Además, debe implementar metadatos de Open Graph para que, al compartir el enlace en redes sociales, se genere una vista previa atractiva con un título, descripción e imagen personalizados.",
      "Elabora una documentación clara y concisa para otros desarrolladores que quieran usar este proyecto como plantilla. Crea un archivo README.md que detalle los pasos de instalación, los scripts para ejecutar el proyecto localmente y, lo más importante, una guía sobre qué archivo de datos se debe modificar para personalizar toda la información personal que se muestra en el sitio.",
      "Propón una hoja de ruta (roadmap) con posibles mejoras futuras para el proyecto. Describe cómo se podría añadir una sección de blog, cómo implementar soporte para múltiples idiomas (internacionalización o i18n), y ofrece una guía básica sobre los pasos recomendados para desplegar el sitio en una plataforma de hosting moderna y sin servidor.",
    ],
  },
  {
    id: "yt-playlist",
    title: "Creador de Playlists de YouTube",
    summary: "Pega enlaces y arma una playlist.",
    details:
      "Permite pegar múltiples URLs de YouTube, obtener metadatos (título, duración, miniatura) y reordenar para crear una playlist compartible.",
    prompts: [
      "Desarrolla la funcionalidad de ingesta de videos. El usuario debe poder pegar una lista de URLs de YouTube en un campo de texto. El sistema debe procesar automáticamente este texto, validar qué líneas son URLs de YouTube válidas e ignorar las inválidas. Por cada URL válida, debe obtener y mostrar la miniatura y el título del video en una lista.",
      "Implementa la capacidad de organizar la playlist. Una vez que los videos aparecen en la lista, el usuario debe poder cambiar su orden de forma intuitiva mediante 'arrastrar y soltar' (drag and drop). Además, cada video en la lista de preparación debe tener un control para eliminarlo fácilmente.",
      "Crea un modo de reproducción integrado. La aplicación debe incluir un reproductor de video que reproduzca la playlist curada en el orden establecido por el usuario. La funcionalidad clave es la reproducción automática: cuando un video termina, el siguiente en la lista debe comenzar a reproducirse sin intervención del usuario.",
      "Implementa una función para compartir la playlist. El usuario debe poder generar un enlace único y permanente que contenga la información de todos los videos de la playlist. Cualquier persona que abra este enlace debe ver la misma lista de videos en el mismo orden, lista para ser reproducida.",
      "Garantiza la fiabilidad de las funciones clave mediante pruebas. Crea un conjunto de pruebas automatizadas que verifiquen el correcto funcionamiento del parser de URLs de YouTube y la lógica de serialización y deserialización que permite guardar la playlist en un enlace compartible.",
      "Diseña una interfaz de usuario limpia y enfocada. Debe haber una vista clara para la construcción de la lista y otra para la reproducción. Añade un modo 'teatro' que expanda el reproductor de video para una experiencia de visualización más inmersiva.",
    ],
  },
  {
    id: "flappy",
    title: "Juego tipo Flappy Bird",
    summary: "Clon sencillo con puntaje.",
    details:
      "Crea un minijuego con canvas (o CSS) donde un pájaro salta y esquiva obstáculos. Guarda el mejor puntaje en localStorage.",
    prompts: [
      "Implementa las mecánicas de juego fundamentales. El jugador controlará un personaje que es afectado constantemente por la gravedad. Una acción simple del usuario (clic, toque o barra espaciadora) debe aplicar un impulso hacia arriba al personaje. El objetivo es navegar a través de una serie de obstáculos que se mueven horizontalmente hacia el jugador.",
      "Desarrolla el sistema de colisiones y puntuación. El juego debe terminar si el personaje colisiona con un obstáculo o con los límites superior/inferior de la pantalla. El puntaje del jugador debe aumentar por cada obstáculo superado con éxito y ser visible durante toda la partida.",
      "Implementa la persistencia del mejor puntaje. El juego debe guardar localmente la puntuación más alta alcanzada por el jugador. En la pantalla de fin de partida ('Game Over'), se deben mostrar tanto la puntuación de la ronda actual como la mejor puntuación histórica, motivando al jugador a superarse.",
      "Mejora la experiencia del jugador con feedback claro. Incluye efectos de sonido simples para eventos clave como el salto, la obtención de un punto y la colisión. Además, el juego debe tener una pantalla de inicio con instrucciones y un botón visible para reiniciar la partida después de un 'Game Over'.",
      "Asegura un rendimiento fluido del juego. La animación debe ser suave y constante, apuntando a 60 FPS. Optimiza el bucle del juego para evitar caídas de rendimiento, por ejemplo, eliminando de la memoria los obstáculos que ya han salido de la pantalla.",
      "Añade un nivel de dificultad adicional. Incluye una opción o modo 'difícil' que pueda ser activado por el jugador. Este modo podría aumentar la velocidad del juego, disminuir el espacio en los obstáculos o introducir variaciones para ofrecer un nuevo desafío.",
    ],
  },
  {
    id: "todo-tags",
    title: "To‑Do con Etiquetas",
    summary: "Lista de tareas con filtros.",
    details:
      "Gestiona tareas con estados (pendiente, en progreso, hecho), etiquetas y búsqueda. Persiste en localStorage.",
    prompts: [
      "Construye el sistema de gestión de tareas (CRUD). El usuario debe poder crear tareas con título, descripción y múltiples etiquetas. Las tareas deben poder ser marcadas con diferentes estados (ej. 'Pendiente', 'En Progreso', 'Hecho'). La interfaz debe permitir editar el contenido de una tarea existente y eliminarla.",
      "Implementa funcionalidades de filtrado y búsqueda. El usuario debe poder encontrar tareas rápidamente. Para ello, añade controles para filtrar la lista de tareas por su estado actual y por una o más etiquetas. Incluye también un campo de búsqueda de texto libre que filtre las tareas por palabras clave en su título o descripción.",
      "Garantiza la persistencia de los datos. Las tareas del usuario no deben perderse al cerrar el navegador. Implementa el guardado automático de toda la lista de tareas en el almacenamiento local (localStorage). Al volver a abrir la aplicación, todas las tareas deben cargarse en el mismo estado en que se dejaron.",
      "Diseña la aplicación con la accesibilidad como prioridad. Todos los controles y elementos interactivos deben ser completamente operables mediante el teclado. Utiliza atributos ARIA para que la aplicación sea comprensible para usuarios que utilizan lectores de pantalla y asegúrate de que el contraste de color sea adecuado.",
      "Añade pruebas para las funcionalidades críticas. Desarrolla pruebas automatizadas que verifiquen que las operaciones CRUD (Crear, Leer, Editar, Eliminar) funcionan como se espera y que los sistemas de filtro y búsqueda devuelven los resultados correctos.",
      "Planifica la integración con una API externa. Diseña la arquitectura de la aplicación de tal manera que sea posible, en el futuro, reemplazar el almacenamiento local por una sincronización con un servicio en la nube. Puedes crear una API mock para simular esta interacción y asegurar que la lógica de la aplicación esté desacoplada del método de almacenamiento.",
    ],
  },
  {
    id: "recipe-finder",
    title: "Buscador de Recetas",
    summary: "Encuentra recetas por ingredientes.",
    details:
      "Permite ingresar ingredientes disponibles y devuelve recetas sugeridas con pasos, tiempo y dificultad.",
    prompts: [
      "Crea una interfaz de entrada de ingredientes intuitiva. El usuario debe poder escribir los ingredientes que tiene disponibles en un campo de texto. A medida que los añade, estos deben aparecer como 'chips' o 'etiquetas' que se pueden eliminar individualmente. El sistema debe evitar la adición de ingredientes duplicados o vacíos.",
      "Integra la aplicación con una API de recetas pública. Al realizar una búsqueda, la aplicación debe consultar la API usando los ingredientes proporcionados. Gestiona adecuadamente los estados de la interfaz, mostrando un indicador de carga durante la espera y un mensaje claro si ocurre un error o si no se encuentran recetas.",
      "Diseña una vista de resultados clara y útil. Las recetas encontradas deben mostrarse como una galería de tarjetas. Cada tarjeta debe incluir, como mínimo, una imagen de la receta, su nombre, el tiempo de preparación y una indicación de la dificultad. Un plus sería resaltar en la tarjeta qué ingredientes le faltan al usuario.",
      "Desarrolla una página de detalle de la receta. Al hacer clic en una tarjeta de receta, el usuario debe ser llevado a una vista completa que muestre la imagen en grande, la lista completa de ingredientes (tanto los que tiene como los que no) y las instrucciones de preparación numeradas paso a paso.",
      "Implementa una función de 'Favoritos'. Cada receta (en la tarjeta de resultados y en la vista de detalle) debe tener un botón para guardarla como favorita. Estas recetas favoritas deben persistir localmente. Añade un filtro en la página de resultados para que el usuario pueda ver únicamente sus recetas guardadas.",
      "Mejora la experiencia de navegación con carga progresiva. En lugar de paginación tradicional, implementa 'scroll infinito' en la página de resultados. A medida que el usuario se desplaza hacia el final de la lista, la aplicación debe solicitar automáticamente más recetas a la API y añadirlas a la vista.",
    ],
  },
  {
    id: "weather-dashboard",
    title: "Dashboard del Clima",
    summary: "Clima por ciudad con gráficos.",
    details:
      "Busca ciudades y muestra clima actual, pronóstico a 5 días y gráficos simples de temperatura/lluvia.",
    prompts: [
      "Implementa una función de búsqueda de ciudades inteligente. El usuario debe poder escribir el nombre de una ciudad en un campo de búsqueda. Mientras escribe, la aplicación debe ofrecer sugerencias de autocompletado para ayudarle a encontrar la ciudad correcta. Al seleccionar una ciudad, la aplicación debe obtener y mostrar sus datos meteorológicos.",
      "Diseña un panel de control con la información del clima actual. Este componente principal debe mostrar de forma clara y visual: el nombre de la ciudad, la temperatura actual, un ícono representativo del estado del tiempo (soleado, nublado, etc.), y datos secundarios como la humedad y la velocidad del viento.",
      "Añade una sección con el pronóstico a largo plazo. Debajo del clima actual, muestra el pronóstico para los próximos 5 a 7 días. Cada día del pronóstico debe mostrar la fecha, un ícono del tiempo esperado y las temperaturas máxima y mínima.",
      "Visualiza los datos con gráficos. Incluye un gráfico simple que muestre la evolución de la temperatura a lo largo de las próximas 24 horas. Esto proporciona al usuario una vista rápida de cómo cambiará el clima durante el día.",
      "Permite la personalización de unidades y guarda las preferencias. El usuario debe poder cambiar entre el sistema métrico (°C) y el imperial (°F). Esta preferencia, junto con una lista de las ciudades buscadas recientemente, debe guardarse localmente para mejorar la experiencia en visitas futuras.",
      "Optimiza las solicitudes de datos. Para evitar llamadas innecesarias a la API, la aplicación debe cachear los resultados de las búsquedas. Si el usuario busca una ciudad que ha consultado recientemente, los datos deben cargarse desde la caché para una respuesta más rápida.",
    ],
  },
  {
    id: "markdown-notes",
    title: "Bloc de Notas Markdown",
    summary: "Editor con vista previa.",
    details:
      "Un bloc con editor Markdown, vista previa en vivo, guardado automático y exportación a archivo .md.",
    prompts: [
      "Crea un editor de Markdown con vista previa en tiempo real. La interfaz debe estar dividida en dos paneles: a un lado, un área de texto para escribir Markdown; al otro, una vista que renderiza el HTML resultante instantáneamente. Incluye una barra de herramientas con botones para acciones comunes (negrita, cursiva, insertar enlace) que ayuden al usuario a formatear el texto.",
      "Implementa un sistema de gestión de múltiples notas. El usuario debe poder crear nuevas notas, ver una lista de todas sus notas, cambiar entre ellas para editarlas y eliminarlas. La nota activa debe ser claramente indicada en la interfaz.",
      "Asegura el guardado automático y la persistencia de datos. El contenido de la nota que se está editando debe guardarse automáticamente en el almacenamiento local del navegador unos segundos después de que el usuario deje de escribir. Esto evita la pérdida de trabajo si se cierra accidentalmente la pestaña.",
      "Añade funcionalidades de importación y exportación. El usuario debe poder exportar cualquier nota a un archivo local `.md`. También debe ser posible importar un archivo `.md` existente, cargando su contenido en el editor para continuar trabajando en él.",
      "Proporciona información útil sobre el texto. Muestra un contador de palabras y una estimación del tiempo de lectura para la nota que se está editando. Esta información debe actualizarse en tiempo real a medida que el usuario escribe.",
      "Cuida la estética y la legibilidad. El diseño de la vista previa del texto renderizado debe ser agradable y fácil de leer, con una tipografía y espaciado bien definidos. Ofrece un tema opcional con alto contraste para mejorar la accesibilidad.",
    ],
  },
  {
    id: "url-shortener",
    title: "Acortador de URL",
    summary: "Crea enlaces cortos.",
    details:
      "Genera slugs cortos para URLs largas, con copia al portapapeles y un historial local de enlaces creados.",
    prompts: [
      "Desarrolla la funcionalidad principal de acortamiento de URLs. El usuario debe poder pegar una URL larga en un campo de entrada. Tras enviarla, la aplicación debe generar una URL corta única y mostrarla claramente al usuario. El formulario debe validar que la entrada sea una URL válida antes de procesarla.",
      "Facilita el uso de la URL acortada. Junto a la URL corta generada, debe haber un botón de 'Copiar' que la guarde en el portapapeles del usuario con un solo clic. La aplicación debe proporcionar una notificación visual para confirmar que la URL ha sido copiada.",
      "Implementa un historial local de enlaces. La aplicación debe guardar un registro de todas las URLs que el usuario ha acortado. Este historial, que persiste localmente, debe mostrar la URL original, la URL corta y la fecha de creación.",
      "Simula la redirección de enlaces. Aunque la aplicación sea de frontend, debe ser capaz de gestionar la redirección. Si se accede a la aplicación a través de una URL corta (ej. `app.com/slug`), esta debe buscar el `slug` en el historial local y redirigir al navegador a la URL original correspondiente.",
      "Diseña una interfaz para gestionar el historial. El historial de enlaces debe presentarse en una tabla o lista clara. El usuario debe poder buscar o filtrar en su historial y tener la opción de eliminar entradas individuales o borrar todo el historial.",
      "Añade estadísticas de uso simples. Para cada enlace en el historial, lleva un conteo de cuántas veces el usuario ha hecho clic en el botón 'Copiar'. Esta simple métrica puede dar una idea de qué enlaces son los más utilizados.",
    ],
  },
  {
    id: "pomodoro",
    title: "Temporizador Pomodoro",
    summary: "Enfoque con intervalos.",
    details:
      "Temporizador 25/5 con sesiones, sonidos y estadísticas simples de tiempo de enfoque.",
    prompts: [
      "Construye el temporizador con sus estados principales. El temporizador debe operar en tres estados: 'Enfoque' (trabajo), 'Descanso Corto' y 'Descanso Largo'. Debe tener controles claros e intuitivos para 'Iniciar', 'Pausar' y 'Reiniciar' el ciclo. La transición entre estados (de enfoque a descanso) debe ser automática al finalizar un intervalo.",
      "Permite la personalización de los intervalos. El usuario debe poder configurar la duración de cada tipo de intervalo (ej. cambiar el tiempo de enfoque de 25 a 30 minutos). Estas configuraciones personalizadas deben guardarse localmente para que persistan entre sesiones.",
      "Implementa notificaciones y alertas. Cuando un intervalo finaliza, la aplicación debe notificar al usuario, especialmente si la ventana no está en primer plano. Esto se puede hacer a través de notificaciones del navegador y/o alertas de sonido opcionales que el usuario pueda activar o desactivar.",
      "Realiza un seguimiento del progreso y muestra estadísticas. La aplicación debe registrar cada intervalo de enfoque completado. En una vista de 'Estadísticas', el usuario debe poder ver un resumen de su actividad, como el total de tiempo de enfoque por día o por semana, presentado en un gráfico simple.",
      "Añade atajos de teclado para un control rápido. Para mejorar la eficiencia, permite que el usuario controle el temporizador sin usar el ratón. Asigna teclas a las acciones más comunes, como 'Espacio' para iniciar/pausar y 'R' para reiniciar.",
      "Ofrece un modo de visualización minimalista. Incluye una opción de 'Modo Compacto' que reduzca la interfaz a su mínima expresión, mostrando solo el tiempo restante. Esto es ideal para usuarios que quieren mantener el temporizador visible en una esquina de su pantalla sin que ocupe mucho espacio.",
    ],
  },
  {
    id: "quiz-app",
    title: "Quiz de Conocimientos",
    summary: "Preguntas y resultados.",
    details:
      "Crea quizzes con categorías, temporizador por pregunta, puntaje y explicación de respuestas.",
    prompts: [
      "Desarrolla la experiencia de juego principal del quiz. El usuario debe ver una pregunta a la vez, con una serie de opciones de respuesta seleccionables. Tras elegir una opción, la aplicación debe dar feedback visual inmediato, indicando si la respuesta fue correcta o incorrecta antes de pasar a la siguiente pregunta.",
      "Estructura el contenido en categorías y dificultades. Antes de comenzar, el usuario debe poder elegir un quiz de una lista de categorías disponibles (ej. 'Ciencia', 'Historia', 'Cine'). Opcionalmente, permitirle seleccionar un nivel de dificultad que podría afectar las preguntas o el tiempo para responder.",
      "Implementa un temporizador por pregunta. Para añadir un elemento de desafío, cada pregunta debe tener un límite de tiempo para ser respondida. Si el tiempo se agota, la pregunta se considerará incorrecta y el quiz avanzará automáticamente.",
      "Crea una pantalla de resultados detallada y educativa. Al finalizar el quiz, muestra al usuario su puntaje final (ej. '8 de 10 correctas'). Más importante aún, presenta un resumen de cada pregunta, mostrando cuál fue su respuesta, cuál era la correcta y una breve explicación. Esto convierte el quiz en una herramienta de aprendizaje.",
      "Guarda el progreso y los mejores puntajes. La aplicación debe recordar localmente el mejor puntaje obtenido por el usuario en cada categoría. En la pantalla de resultados, se debe indicar si el usuario ha logrado un nuevo récord personal.",
      "Mejora la usabilidad con controles de teclado. Permite que el usuario responda a las preguntas usando las teclas numéricas (1, 2, 3, 4) correspondientes a las opciones. Esto hace que la experiencia de juego sea más rápida y accesible.",
    ],
  },
];

function useShuffledIdeas(): Idea[] {
  return useMemo(() => {
    const copy = [...IDEAS];
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }, []);
}

export default function IdeaBubbles() {
  const ideas = useShuffledIdeas();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const selected = ideas.find((i) => i.id === selectedId) ?? null;

  const handleCopy = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(
        () => setCopiedIndex((curr) => (curr === index ? null : curr)),
        1500
      );
    } catch {
      // noop
    }
  };

  return (
    <div className="w-full">
      <div className="relative mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-5xl">
        {ideas.map((idea, idx) => {
          const duration = 6 + (idx % 5);
          const delay = (idx % 7) * 0.2;
          const isSelected = selectedId === idea.id;
          return (
            <button
              key={idea.id}
              type="button"
              onClick={() => setSelectedId(idea.id)}
              className={
                "group relative isolate aspect-square w-full rounded-full overflow-hidden flex items-center justify-center p-0 shadow-sm ring-1 ring-neutral-200 dark:ring-neutral-800 transition-transform will-change-transform bg-gradient-to-br from-white to-neutral-100 text-neutral-900 dark:from-neutral-900 dark:to-neutral-950 dark:text-neutral-100 " +
                (isSelected
                  ? "scale-100"
                  : "hover:scale-105 active:scale-95 hover:ring-neutral-400/60 dark:hover:ring-neutral-500/60")
              }
              style={{
                animation: isSelected
                  ? "none"
                  : `float ${duration}s ease-in-out ${delay}s infinite`,
              }}
            >
              <div className="pointer-events-none select-none px-4 text-center">
                <div className="text-sm font-medium leading-tight">
                  {idea.title}
                </div>
                <div className="mx-auto mt-2 h-px w-8 bg-neutral-200 dark:bg-neutral-800" />
              </div>
              <div
                aria-hidden
                className="absolute inset-0 rounded-full bg-white/30 dark:bg-white/10 opacity-60 -z-10"
                style={{ mixBlendMode: "overlay" }}
              />
            </button>
          );
        })}
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <button
            type="button"
            aria-label="Close overlay"
            className="absolute inset-0 bg-black/40"
            onClick={() => setSelectedId(null)}
            onKeyDown={(e) => {
              if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setSelectedId(null);
              }
            }}
          />
          <div className="relative z-10 w-full max-w-2xl rounded-2xl border bg-background p-4 sm:p-6 shadow-lg max-h-[80vh] flex flex-col">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">
                  {selected.title}
                </h3>
                <p className="text-muted-foreground mt-1">{selected.details}</p>
              </div>
              <Button
                variant="ghost"
                onClick={() => setSelectedId(null)}
                aria-label="Close"
              >
                Close
              </Button>
            </div>

            <div className="mt-4 overflow-y-auto max-h-[60vh] pr-1">
              <h4 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                Sample prompts
              </h4>
              <ul className="mt-2 space-y-2">
                {selected.prompts.map((p, i) => (
                  <li key={p} className="group rounded-md border p-3">
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-sm whitespace-pre-wrap">{p}</p>
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => handleCopy(p, i)}
                        className="shrink-0"
                      >
                        {copiedIndex === i ? "Copied" : "Copy"}
                      </Button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </div>
  );
}
