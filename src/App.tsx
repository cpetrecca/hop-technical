import KanbanBoard from "./components/kanbanboard/KanbanBoard";

function App() {
  return (
    <main className="w-screen h-screen bg-hop3">
      <header className="text-white text-center bg-hop1 py-4 drop-shadow ">Ejercicio Técnico para Hop.</header>
        <KanbanBoard></KanbanBoard>
    </main>
  );
}

export default App;
