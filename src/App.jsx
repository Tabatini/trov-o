import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { gameData } from './data/games.js';
import  "./App.css";
import { GameCard } from './components/GameCard';

function App() {


  return (
    <div className='trovão-app'>
      <Sidebar />

      <main className='trovão-main'>
        <Header />

        <div className="trovão-content">
          <h2 className="section-title">Jogos Recentes</h2>
          <div className="trovão-grid">

            {gameData.map((g) => (
              <GameCard
                key={g.id}
                title={g.title}
                category={g.category}
                banner={g.banner}
              />
            ))}

          </div>
        </div>
      </main>
    </div>


  );
}

export default App
