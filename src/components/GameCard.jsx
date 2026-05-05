import './GameCard.css';
import { Play, Heart } from 'lucide-react';

export function GameCard({ title, category, banner, index, isFavorite, onFavorite, onPlay }) {
    return (
        <div className='trovão-card'
            data-aos="fade-up"
            data-aos-delay={index * 100}
        >


            <img src={banner} alt={title} className='card-img' />

            <button
                className={`favorite-btn ${isFavorite ? "active" : ''}`}
                onClick={onFavorite}
            >

                <Heart
                    size={15}
                    fill={isFavorite ? "#eeff00" : "transparent"}
                    stroke={isFavorite ? "#7c3aed" : "white"}
                />


            </button>

            <div className="card-info">

                <h4>{title}</h4>
                <p>{category}</p>
                <button className="play-btn" onClick={onPlay}>
                    <Play size={14} fill="white" /> Jogar
                </button>

            </div>

        </div>
    );
}