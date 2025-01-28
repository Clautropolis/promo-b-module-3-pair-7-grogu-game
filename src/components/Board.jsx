import Grogu from './Grogu';

function Board({grogu}) {
  //const board = [0, 1, 2, 3, 4, 5, 6];
  const board = Array(7).fill(null);
  console.log(board);

  
  const boardHTML = board.map((cell, index)=> 
  <div className="cell" id={index} key={index}>
    {grogu === index ?
    <Grogu />
    : 
    <p></p>}
  </div>);
  


  return (
    <section className="board">
      {boardHTML}
    </section>
  )
}

export default Board