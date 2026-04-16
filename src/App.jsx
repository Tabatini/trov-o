import { useState, useEffect } from 'react'; 
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { gameData } from './data/games.js';
import { GameCard } from './components/GameCard';
import AOS from 'aos';
import "aos/dist/aos.css";
import "./App.css";


function App() {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState("dash");
 
  const filteredGames = gameData
  .filter(() => activeTab === "dash")
  .filter((game) => game.title.toLowerCase().includes(search.toLowerCase()));
  
useEffect(() => {
AOS.init({
    duration: 1000,
    once:false,
    easing: "ease-in-out",
  })
 },[]);



  return (
    <div className='trovão-app'>
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className='trovão-main'>
        
        <Header search={search} setSearch={setSearch} />

        <div className="trovão-content">

          <h2 className="section-title">
            {activeTab === "dash" && "Dashboard"}
            {activeTab === "favorites" && "Favoritos"}
            {activeTab === "profile" && "Perfil"}

          </h2>

          <div className="trovão-grid">
            {filteredGames.length > 0 ? (
              filteredGames.map((g, index) => (
                <GameCard
                  key={g.id}
                  title={g.title}
                  category={g.category}
                  banner={g.banner}
                  index={index}
                />
              ))
            ) : (
              <p style={{ color: "#94a3b8" }}>
                Nenhum jogo encontrado...
              </p>
            )}      
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;