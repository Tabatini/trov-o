import './GameCard.css';
import {Play} from 'lucide-react';

export function GameCard({title, category, banner, index }){
    return(
        <div className='trovão-card'
         data-aos="fade-up"
         data-aos-delay={index * 100}
        >
        

           <img src={banner} alt={title} className='card-img' />


         <div className="card-info">

            <h4>{title}</h4>
            <p>{category}</p>
            <button className="play-btn">
                <Play size={14} fill="white"/>
            </button>

         </div>

        </div>
    )
}