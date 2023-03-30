export const Main =()=>{
    return (  
        <main>
            <div className='sq-outer'>
                <div className='sq-inner'>
                    <h1 className='title'>Tenzies</h1>
                    <p className='text'>
                        Roll until all dice are the same. Click each die to
                        freeze it at its current value between rolls.
                    </p>
                    <div className='nums'>
                        <div className='squares'>
                            <span className='square'>1</span>
                            <span className='square'>1</span>
                            <span className='square'>1</span>
                            <span className='square'>1</span>
                            <span className='square'>1</span>
                            <span className='square'>1</span>
                            <span className='square'>1</span>
                            <span className='square'>1</span>
                            <span className='square'>1</span>
                            <span className='square'>1</span>
                        </div>
                        <button>Roll</button>
                    </div>
                </div>
            </div>
        </main>)
}