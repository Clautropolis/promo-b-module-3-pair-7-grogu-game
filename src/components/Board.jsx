import Grogu from './Grogu';

function Board() {
  return (
    <section className="board">
        <div className="cell" id="0">
            <Grogu />
        </div>
        <div className="cell" id="1"></div>
        <div className="cell" id="2"></div>
        <div className="cell" id="3"></div>
        <div className="cell" id="4"></div>
        <div className="cell" id="5"></div>
        <div className="cell" id="6"></div>
    </section>
  )
}

export default Board