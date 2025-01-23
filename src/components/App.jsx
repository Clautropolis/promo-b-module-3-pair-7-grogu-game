{/*
PASOS A SEGUIR:
1. Estado inicial: Grogu en posición 1 y los array de galletas, huevos y ranas tienen que tener 3 delementos cada uno. Y el dado está vacío o 0.
2. Lanzar el dado: Escuchamos un click sobre "Lanzar el dado", hacemos un mathRandom para generar un número aleatorio entre 1 y 4, asignamos cada numero a una variable.
3. Mover a Grogu: Hacemos un condicional si el valor del dado es igual a 1, Grogu avanza. Podemos hacerlo con un array, usando un bucle que incremente la posición de Grogu en el array. o añadiendo un elemento al array cada vez que sale 1 y que Grogu siempre esté al final de ese array.
4. Descargar mercancías: Si en el condicional sale 2, 3 o 4. Hacemos un if dentro del if. Si es 2 eliminamos del array de galletas, si es 3 del de huevos y si es 4 de las ranas. Hay que actualizar la mercancía, asegurarnos de que React re-renderiza la mercancía.
5. Verificar el fin del juego: Hacemos un condicional con varias condiciones. Si todos los arrays de mercancía están vacios, y Grogu no está en la posición 7, gana el jugador. Y sino, gana Grogu. 
6. Reiniciar el juego: Ponemos un evento en el botón de "Reiniciar juego" que devuelve la página al estado inicial (1).
7. Interfaz de usuario: Asegurarnos aue la página se renderiza cada vez que lanzamos en el juego.
8. BONUS Cuando una mercancía se vacía por completo, eliminar ese número de las opciones del dado.
9. BONUS Al lanzar el dado, que aparezca un mensaje con la acción realizada.
*/}


import { useState } from 'react';
import '../styles/App.scss'


function App() {
  const [grogu, setGroguPosition] = useState(0);
  // const board = [0, 1, 2, 3, 4, 5, 6];
  // const [cookies, setCookiesQty] = useState([cookie, cookie, cookie]);
  // const [eggs, setEggsQty] = useState([egg, egg, egg]);
  // const [frogs, setFrogsQty] = useState([frog, frog, frog]);
  const [dice, setDice] = useState(0);
  //const [status, setStatus] = useState('');
  
  function rollDice() {
    const randomNumber = (Math.floor(Math.random()*4) +1);
    setDice(randomNumber);

    if(dice === 4) {
      setGroguPosition(grogu +1);
      console.log(grogu);
    }

  }
  const handleClick = (ev) => {
    rollDice ();
    
  }

  return (
      <>
      <header>
      <h1>¡Cuidado con Grogu!</h1>
      </header>
      <main className="page">
        <section className="board">
        <div className="cell" id="0"><div className="grogu">👣</div></div>
        <div className="cell" id="1"></div>
        <div className="cell" id="2"></div>
        <div className="cell" id="3"></div>
        <div className="cell" id="4"></div>
        <div className="cell" id="5"></div>
        <div className="cell" id="6"></div>
        </section>

        <section>
        <button className="dice" onClick={handleClick}>Lanzar Dado</button>
        <div className="game-status">En curso</div>
        </section>

        <section className="goods-container">
        <div className="goods-item">🍪</div>
        <div className="goods-item">🍪</div>
        <div className="goods-item">🍪</div>
        </section>
        <section className="goods-container">
        <div className="goods-item">🥚</div>
        <div className="goods-item">🥚</div>
        <div className="goods-item">🥚</div>
        </section>
        <section className="goods-container">
        <div className="goods-item">🐸</div>
        <div className="goods-item">🐸</div>
        <div className="goods-item">🐸</div>
        </section>
        <section>
        <button className="restart-button">Reiniciar Juego</button>
        </section>
    </main>
      
  </>
    
  );
}

export default App
