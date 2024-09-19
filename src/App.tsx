import Stars from "./components/Stars/Stars";
import "./App.css";

function App() {
  const films = [
    { id: 1, name: "Супермен", count: 5 },
    { id: 2, name: "Одинокий странник", count: 3 },
  ];

  return (
    <>
      <div className="container">
        {films.map(item => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <Stars count={item.count} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
