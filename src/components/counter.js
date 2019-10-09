import React, { useEffect, useState } from 'react';
import Number from './number';
import Footer from './footer';

const Counter = () => {

    const [first, setFirst] = useState(0);
    const [second, setSecond] = useState(0);
    const [third, setThird] = useState(0);
    const [fourth, setFourth] = useState(0);
    const [fifth, setFifth] = useState(0);
    const [sixth, setSixth] = useState(0);

    // toggle the background color
    const [bg, setBg] = useState(0);
    let backgroundChangeHandler = () => {
        if (bg === 0) { document.body.style.backgroundColor = "black"; setBg(1); }
        if (bg === 1) { document.body.style.backgroundColor = "#555555"; setBg(0); }
    }
    
    // Pause the counter
    var timing;
    const [playIcons, setPlayIcons] = useState('fas fa-pause');
    const [playBtn, setPlayBtn] = useState('Pause');
    const [pause, setPause] = useState(0);
    let pauseHandler = () => {
        if (pause === 0) { clearTimeout(timing); console.log(first); setFirst(first); setPause(1); setPlayBtn('Play'); setPlayIcons('fas fa-play'); }
        if (pause === 1) { timer(first, setFirst); setPause(0); setPlayBtn('Pause'); setPlayIcons('fas fa-pause') }
    }
    
    // Alert every 10 secondes
    let funnyAlert = [
        `I guess if you want children beaten, you have to do it yourself.`,
        `Look, everyone wants to be like Germany, but do we really have the pure strength of 'will'?`,
        `You seem malnourished. Are you suffering from intestinal parasites?`,
        `Calculon is gonna kill us and it's all everybody else's fault!`,
        `Who are those horrible orange men?`
    ]
    let Alert = () => {
        let random = Math.floor(Math.random() * funnyAlert.length);
        alert(funnyAlert[random]);
        if (bg === 0) { document.body.style.backgroundColor = "black"; setBg(1); }
        if (bg === 1) { document.body.style.backgroundColor = "#555555"; setBg(0); }
    }

    let timer = (varr, setter) => {
        timing = setTimeout(() => {
            setter(varr + 1);
        },1000)   
    }

    let addOne = (varr, setter) => {
        setter(varr + 1);
    }

    useEffect(() => {
        if (first === 10) { setFirst(0); addOne(second, setSecond); Alert(); } else { timer(first, setFirst) }
        if (second === 6) { setSecond(0); addOne(third, setThird); };
        if (third === 10) { setThird(0); addOne(fourth, setFourth); };
        if (fifth === 6) { setFifth(0); addOne(sixth, setSixth); };
        if (sixth === 2 && fifth === 4) { setSixth(0); setFifth(0); setThird(0); setSecond(0); setFirst(0);}
    }, [first, second, third, fourth, fifth, sixth]);

    return (
        <>
            <div className="container text-center mt-5">
                <div className="jumbotron"><h1>REACT COUNTER</h1></div>
                <button className="btn btn-danger mr-3" onClick={backgroundChangeHandler} >Toggle Background Color</button>
                <button className="btn btn-info" onClick={pauseHandler} ><i className={playIcons} ></i> {playBtn} Counter</button>
            </div>
            <div className="mainCountDiv container text-center">
                <Number num={<i className="far fa-clock"></i>} />
                <Number num={sixth} />
                <Number num={fifth} />
                <Number num={fourth} />
                <Number num={third} />
                <Number num={second} />
                <Number num={first} />
            </div>
            <Footer/>
        </>
    );
};

export default Counter;