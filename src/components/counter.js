import React, { useEffect, useState } from 'react';



const Counter = () => {

    const [first, setFirst] = useState(0);
    const [second, setSecond] = useState(0);
    // const [third, setThird] = useState(0);
    // const [fourth, setFourth] = useState(0);
    // const [fifth, setFifth] = useState(0);
    // const [sixth, setSixth] = useState(0);

    let timer = (varr, setter) => {
        setTimeout(() => {
            setter(varr + 1);
        },1000)   
    }


    useEffect(() => {
        if (first === 9) timer(second, setSecond);
        if (first === 10) {
            setFirst(0);
        } else {
            timer(first, setFirst);
        }
    },[first]);

    

    


    return (
        <>
            <div className="mainCountDiv container text-center">
                <div className="num_tiles">
                    {second}
                </div>
                <div className="num_tiles">
                    {first}
                </div>
                
            </div>
        </>
    );
};

export default Counter;