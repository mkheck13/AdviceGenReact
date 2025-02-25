import React, { useState } from 'react';
import desktopDivide from '/src/assets/pattern-divider-desktop.svg';
import mobileDivide from '/src/assets/pattern-divider-mobile.svg';
import diceBtn from '/src/assets/icon-dice.svg';
import '../App.css';


const MainComponent = () => {

    const [data, setData] = useState();
    const [id, setId] = useState(14);
    const [quote, setQuote] = useState("Life is better when you sing about bananas.");

    const getData = (() => {
        fetch('https://api.adviceslip.com/advice')
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error(error));

        if(data){
            setId(data.slip.id)
            setQuote(data.slip.advice)
        }
    });

    return (
        <div className='w-screen h-screen'>
            <div>
                <header className='app-header'>
                    <div className='container-box'>
                        <p className='advice'>ADVICE #{id}</p>
                        <p className='quote'>"{quote}"</p>

                        <img className='desktopDivide' src={desktopDivide} alt="desktop divider" />
                        <img className='mobileDivide' src={mobileDivide} alt="mobile divider" />

                        <button className='dice' onClick={getData}>
                            <img src={diceBtn} alt="dice icon" />
                        </button>
                    </div>
                </header>
            </div>
        </div>
    );
}

export default MainComponent;