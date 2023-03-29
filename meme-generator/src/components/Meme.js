import memesData from '../memesData';
import { useState } from 'react';

export default function Meme() {
    // const [memeImage,setMemeImage]=useState("http://i.imgflip.com/1bij.jpg");

    const [meme,setMeme]=useState({
        topText:'',
        bottomText:'',
        randomImage:"http://i.imgflip.com/1bij.jpg"});   
    // const meme={topText,bottomText,randomImage};
    
    const [allMemeImages,setAllMemeImages]=useState(memesData);

    function getMemeImage() {
        const memesArray= allMemeImages.data.memes;
        const randomNum= Math.floor(Math.random()*memesArray.length);
        const url=memesArray[randomNum].url;
        
        setMeme(prevMeme=>({
            ...prevMeme,
            randomImage:url            
        }));     
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
                <img src={meme.randomImage} className='meme' onMouseOver={hadnleMouseOverImg}></img>
            </div>
        </main>
    );
}
