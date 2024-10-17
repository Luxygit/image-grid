import React from 'react';
import './App.css';

const images = [
  {
    id: 1,
    src: '../public/logo192.png',
    link: 'https://example.com/1',
    alt: 'Image 1',
  },
  {
    id: 2,
    src: '../public/source(1).jpg',
    link: 'https://example.com/2',
    alt: 'Image 2',
  },
  {
    id: 3,
    src: 'https://via.placeholder.com/300',
    link: 'https://example.com/3',
    alt: 'Image 3',
  },
  {
    id: 4,
    src: 'https://via.placeholder.com/300',
    link: 'https://example.com/4',
    alt: 'Image 4',
  },
  {
    id: 5,
    src: 'https://via.placeholder.com/300',
    link: 'https://example.com/5',
    alt: 'Image 5',
  },
  {
    id: 6,
    src: 'https://via.placeholder.com/300',
    link: 'https://example.com/6',
    alt: 'Image 6',
  },
];

function App() {
  return (
    <div className='App'>
      <h1>Image Grid</h1>
      <div className='grid'>
        {images.map((image) => (
          <a
            href={image.link}
            key={image.id}
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={image.src} alt={image.alt} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default App;
