// import memeimg from './memeimg.png';
import memesData from '../memesData';
import { useState } from 'react';

export default function Meme() {
    const [memeImage,setMemeImage]=useState('');

    function getMemeImage() {
        const memesArray= memesData.data.memes;
        const randomNum= Math.floor(Math.random()*memesArray.length);
        const meme=memesArray[randomNum].url;
        setMemeImage(prevMeme=>prevMeme=meme);
        // return memeImage;
    }
    function hadnleMouseOverImg() {
        // console.log('mouseover');
    }
    return (
        <main>
            <div className='form'>
                <div className='form-input-wrap'>
                    <input
                        id='first'
                        className='form-input first'
                        type='text'
                        placeholder=' shut up'
                    ></input>
                    <input
                        id='second'
                        className='form-input second'
                        type='text'
                        placeholder=' and take my money'
                    ></input>
                </div>

                <button className='form-btn' onClick={getMemeImage}>
                    Get a new meme image
                </button>
                <img src={memeImage} className='meme' onMouseOver={hadnleMouseOverImg}></img>
            </div>
        </main>
    );
}
