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

    let timer = (varr, setter) => {
        setTimeout(() => {
            setter(varr + 1);
        },1000)   
    }

    let addOne = (varr, setter) => {
        setter(varr + 1);
    }

    useEffect(() => {
        if (first === 10) { setFirst(0); addOne(second, setSecond); } else { timer(first, setFirst) }
        if (second === 6) { setSecond(0); addOne(third, setThird); };
        if (third === 10) { setThird(0); addOne(fourth, setFourth); };
        if (fifth === 6) { setFifth(0); addOne(sixth, setSixth); };
        if (sixth === 2 && fifth === 4) { setSixth(0); setFifth(0); setThird(0); setSecond(0); setFirst(0);}
    }, [first, second, third, fourth, fifth, sixth]);

    return (
        <>  
            <div className="container text-center mt-5">
                <div class="jumbotron"><h1>REACT COUNTER</h1></div>
            </div>
            
            <div className="mainCountDiv container text-center">
            
                <Number num={<i class="far fa-clock"></i>} />
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