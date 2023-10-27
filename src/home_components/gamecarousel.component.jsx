import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import GameCard from './gamecard.component';
import './gamecarousel.component.css';

function GameCarousel() {
  const games = [
    {
      title: 'Mines',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      title: 'Little Tiger',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      title: 'Aviãozinho',
      imageUrl: 'https://via.placeholder.com/150',
    }
  ];

  const games2 = [
    {
      title: 'Jogo1',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      title: 'Jogo2',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      title: 'Jogo3',
      imageUrl: 'https://via.placeholder.com/150',
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: games.length, // Alterado para exibir todos os slides
    slidesToScroll: 1,
  };

  return (
    <div className="game-carousel-container">
      <div className='lista-games'>
        <h1>Jogos Hackeados</h1>
        <Slider {...settings}>
          {games.map((game, index) => (
            <div key={index}>
              <GameCard {...game} />
            </div>
          ))}
        </Slider>
        <h1>Hacks em andamento...</h1>
        <Slider {...settings}>
          {games2.map((game, index) => (
            <div key={index}>
              <GameCard {...game} />
            </div>
          ))}
        </Slider>
      </div>
    </div>

  );
}

export default GameCarousel;
