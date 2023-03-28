import troll from './troll.jpg';

export default function Header() {
    return (
        <header className='head'>
           
                <img src={troll} alt='troll' className='troll' />
                <h1 className='title'>Meme Generator</h1>
           
            <p className='headProject'>React Course - Project 3</p>
        </header>
    );
}
