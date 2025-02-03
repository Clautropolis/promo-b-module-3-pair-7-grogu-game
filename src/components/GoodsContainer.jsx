

function GoodsContainer({dice, frogs, eggs, cookies}) {

    const cookiesHtml = cookies.map ((eachCookie, index) => {
        return <div key={index}className="goods-item">🍪</div>
    })
    const eggsHtml = eggs.map((eachEgg, index) => {
        return <div key={index}className="goods-item">🥚</div>
    })
    const frogsHtml = frogs.map((eachFrog, index) => {
        return <div key={index}className="goods-item">🐸</div>
    })

  return (
    <>
        <section className="goods-container">
            {cookiesHtml}
        </section>
        <section className="goods-container">
            {eggsHtml}
        </section>
        <section className="goods-container">
            {frogsHtml}
        </section>
    </> 
    
  )
}

export default GoodsContainer
