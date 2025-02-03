import local from '../services/localStorage';

function ResetButton({setGroguPosition, setCookiesQty, setEggsQty,setFrogsQty, setName, setGameStatus}) {

    const handleReset = () => {
        setGroguPosition(0);
        setCookiesQty(["cookie", "cookie", "cookie"]);
        setEggsQty(["egg", "egg", "egg"]);
        setFrogsQty(["frog", "frog", "frog"]);
        setName('');
        setGameStatus('En curso');
        local.clear()
    }
  return (
    <button className="restart-button" onClick={handleReset}>Reiniciar Juego</button>
  )
}

export default ResetButton