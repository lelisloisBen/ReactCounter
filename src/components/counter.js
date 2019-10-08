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
        if (first === 10) {
            setFirst(0);
            timer(second, setSecond)

        } else {
            timer(first, setFirst)
        }
    },[first]);

    // useEffect(() => {
    //     setTimeout(() => {
    //         if (second === 10) {
    //             setSecond(0);
    //             timer(second, setSecond)
    //         } else {
    //             timer(second, setSecond)
    //         }
    //     },9000)
    // },[second]);

    

    


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