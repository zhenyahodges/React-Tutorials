import memesData from '../memesData';
import { useEffect, useState } from 'react';

export default function Meme() {

    const [meme, setMeme] = useState({
        first: '',
        second: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg',
    });
    
    const [allMemes, setAllMemes] = useState([]);

   useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes));
    }, []);


    function getMemeImage() {
         const randomNum = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNum].url;

        setMeme((prevMeme) => ({
            ...prevMeme,
            randomImage: url,
        }));
    }


    function handleChange(event) {
        const {name, value} = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }));
    }
    // function hadnleMouseOverImg() {
    //     // console.log('mouseover');
    // }

    return (
        <main>
            <div className='form'>
                <div className='form-input-wrap'>
                    <input
                        id='first'
                        className='form-input first'
                        type='text'
                        placeholder=' shut up'
                        name="first"
                        value={meme.first}
                        onChange={handleChange}
                    ></input>
                    <input
                        id='second'
                        className='form-input second'
                        type='text'
                        placeholder=' and take my money'
                        name="second"
                    value={meme.second}
                    onChange={handleChange}
                    ></input>
                </div>

                <button className='form-btn' onClick={getMemeImage}>
                    Get a new meme image
                </button>
                <div className='meme'>
                    <img src={meme.randomImage} className='meme--image' />
                    <h2 className='meme--text top'>{meme.first}</h2>
                    <h2 className='meme--text bottom'>{meme.second}</h2>
                </div>
            </div>
        </main>
    );
}
