import CategoriesContainer from './components/categories-container/CategoriesContainer';
// import './categories.styles.scss';
function App() {
  const categories = [
    {
      id: 1,
      title: 'Oferte speciale',
      imageUrl: 'https://images.tuitravelcenter.ro/gallery/89a6fb3c-4e33-40c0-95f0-3941c7a9372b.jpg',
    },
    {
      id: 2,
      title: 'Sejururi',
      imageUrl: 'https://images.tuitravelcenter.ro/gallery/2acb3bf1-26d6-4dab-a541-3423029831f1.jpg',
    },
    {
      id: 3,
      title: 'Circuite',
      imageUrl: 'https://tuitravelcenter.ro/build/assets/thumbnail_small-Angkor-Wat-shutterstock_707816683-168712f6.jpg',
    },
    {
      id: 4,
      title: 'Vacanțe exotice',
      imageUrl: 'https://images.tuitravelcenter.ro/gallery/AFGz45bjd1YgeWXsrU77RFZYwvD0WB6S4vGoY3dy.jpeg',
    },
    {
      id: 5,
      title: 'City break',
      imageUrl: 'https://images.tuitravelcenter.ro/gallery/49a0ff79-fe5b-4c95-98d8-3a92d8784897.jpg',
    },
  ];

  return (
    <CategoriesContainer categories={categories}/>
);
}

export default App;
