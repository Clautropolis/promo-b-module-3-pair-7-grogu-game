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

import Header from './Header';
import Board from './Board';
import { useEffect, useState } from 'react';
import '../styles/App.scss'
import Dice from './Dice';
import Form from './Form';
import GameStatus from './GameStatus';
import local from '../services/localStorage';


function App() {
  const [grogu, setGroguPosition] = useState(local.get("groguPosition", 0));
  
  const [cookies, setCookiesQty] = useState(local.get("cookiesQty", ["cookie", "cookie", "cookie"]));
  const [eggs, setEggsQty] = useState(local.get("eggsQty", ["egg", "egg", "egg"]));
  const [frogs, setFrogsQty] = useState(local.get("frogsQty", ["frog", "frog", "frog"]));
  const [dice, setDice] = useState(0);
  const [gameStatus, setGameStatus] = useState ('En curso');
  const [name, setName] = useState ('');

  useEffect(() => {
    local.set("groguPosition", grogu);
    local.set("eggsQty", eggs);
    local.set("cookiesQty", cookies);
    local.set("frogsQty", frogs);

    if(grogu === 6) {
      setGameStatus("¡¡Grogu se ha comido el cargamento!! Has perdido")
    } else if (grogu !== 6 && cookies.length === 0 && frogs.length === 0 && eggs.length === 0) {
      setGameStatus("Ganaste, Mando completa la misión")
    }
  }, [grogu, eggs, cookies, frogs]);


  const handleClick = () => { 
    rollDice ();
  }

  function rollDice() {
    const randomNumber = (Math.floor(Math.random()*4) +1);
    setDice(randomNumber);


    if(randomNumber === 4) {
      setGroguPosition(grogu + 1);
      setGameStatus('Grogu avanza una posición')
    } else if (randomNumber === 3) {
      if (cookies.length>0) {
        setCookiesQty(cookies.slice(1));
        setGameStatus(`${name} ha guardado una caja de galletas en la zona segura`) 
      } else {
        setGameStatus('Todas las galletas ya han sido guardadas')
      }

    } else if (randomNumber === 2) {
      if (eggs.length>0) {
        setEggsQty(eggs.slice(1));
        setGameStatus(`${name} ha guardado un huevo en la zona segura`) 
      } else {
        setGameStatus('Todos los huevos ya han sido guardados')
      }
    }  else if (randomNumber === 1) {
      if (frogs.length>0) {
        setFrogsQty(frogs.slice(1));
        setGameStatus(`${name} ha guardado una rana en la zona segura`) 
      } else {
        setGameStatus('Todas las ranas ya han sido guardadas')
      }
    } 
  }


  return (
      <>
      <Header />
      
      <main className="page">
        <Board grogu = {grogu} />
        <Form setName={setName} name={name}/>

        <section className="dice-container">

        <Dice handleClick={handleClick}/>

        <GameStatus gameStatus={gameStatus}/>

        
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
