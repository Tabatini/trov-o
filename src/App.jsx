import { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { GameCard } from './components/GameCard';
import { GameModal } from './components/GameModal';
import Slider from './components/Slider';
import { gameData } from './data/games.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {

  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('dash');
  const [favorites, setFavorites] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);
  const filteredGames = gameData
    .filter(
      (game) =>
        activeTab === 'dash' || favorites.includes(game.id)
    )
    .filter((game) =>
      game.title.toLowerCase().includes(search.toLowerCase())
    );

  const toggleFavorite = (id) => {

    const game = gameData.find((g) => g.id === id);
    const gameTitle = game ? game.title : "Jogo";

    const isFavorite = favorites.includes(id);

    if (isFavorite) {
      toast.info(`${gameTitle} removido dos favoritos`, {
        theme: "dark",
      });
    } else {
      toast.success(`${gameTitle} adicionado aos favoritos!`, {
        theme: "dark",
      });
    }

    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((favId) => favId !== id)
        : [...prev, id]
    );
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-in-out',
    });
  }, []);

  const sliderSettings = {

    slidesPerView: 1,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
    },

    loop: true,
  };

  return (
    <div className="trovão-app">

      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <main className="trovão-main">

        <Header
          search={search}
          setSearch={setSearch}
        />

        {activeTab === 'dash' && (
          <div className="container-slider">
            <Slider settings={sliderSettings}>
              {gameData.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div className="slide-content">

                    <img
                      src={slide.banner}
                      alt={slide.title}
                    />

                    <div
                      className="slide-overlay"
                      style={{
                        borderBottom: `8px solid ${slide.color}`,
                      }}
                    >
                      <span>{slide.title}</span>
                    </div>

                  </div>
                </SwiperSlide>
              ))}
            </Slider>
          </div>
        )}

        <div className="trovão-content">

          <h2 className="section-title">
            {activeTab === 'dash' && 'Dashboard'}
            {activeTab === 'favorites' && 'Favoritos'}
            {activeTab === 'profile' && 'Perfil'}
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
                  isFavorite={favorites.includes(g.id)}
                  onFavorite={() => toggleFavorite(g.id)}
                  onPlay={() => setSelectedGame(g)}
                />
              ))

            ) : (

              <p style={{ color: '#94a3b8' }}>
                Nenhum jogo encontrado...
              </p>

            )}

          </div>
        </div>
      </main>

      <GameModal
        game={selectedGame}
        onClose={() => setSelectedGame(null)}
      />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />

    </div>
  );
}

export default App;