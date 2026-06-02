import "./GameModal.css";
import { X, Trophy, Users, Clock } from "lucide-react";

export function GameModal({ game, onClose }) {
    if (!game) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>

                <button className="close-btn" onClick={onClose}>
                    <X />
                </button>

                <img src={game.banner} alt={game.title} className="modal-banner" />

                <div className="modal-body">
                    <span className="modal-category">{game.category}</span>

                    <h2>{game.title}</h2>

                    <p className="description">
                        Prepare-se para a aventura em {game.title}! Entre em um mundo cheio de desafios, ação e diversão, onde cada momento traz novas surpresas. Teste suas habilidades, explore cenários incríveis e enfrente obstáculos emocionantes enquanto busca a vitória. Seja sozinho ou com amigos, {game.title} garante uma experiência envolvente e inesquecível. Está pronto para começar?
                    </p>

                    <div className="game-stats">
                        <div className="stat">
                            <Trophy size={18} />
                            <span>Ranking: #01</span>
                        </div>

                        <div className="stat">
                            <Users size={18} />
                            <span>Online: 25k</span>
                        </div>

                        <div className="stat">
                            <Clock size={18} />
                            <span>Tempo: 40h</span>
                        </div>
                    </div>

                    <button className="start-game-btn">
                        INICIAR JOGADA
                    </button>
                </div>
            </div>
        </div>
    );
}