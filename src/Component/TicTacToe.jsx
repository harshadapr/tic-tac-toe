import React, { useRef, useState, useEffect } from 'react'
import "./TicTacToe.css"
import circle from "../Images/circle.png"
import cross from "../Images/cross.png"
import winnerGif from "../Images/animation.gif";
import celebration from "../Images/celebration1.webp"


let data = ["", "", "", "", "", "", "", "", ""];


export default function TicTacToe() {



    let [count, setCount] = useState(0);
    let [lock, setlock] = useState(false);

    const [showWinnerGif, setShowWinnerGif] = useState(false);

    // useEffect(() => {
    //     if (lock) {
    //         setShowWinnerGif(true);
    //     } else {
    //         setShowWinnerGif(false);
    //     }
    // }, [lock]);


    let titleRef = useRef(null)
    let Check_box1 = useRef(null)
    let Check_box2 = useRef(null)
    let Check_box3 = useRef(null)
    let Check_box4 = useRef(null)
    let Check_box5 = useRef(null)
    let Check_box6 = useRef(null)
    let Check_box7 = useRef(null)
    let Check_box8 = useRef(null)
    let Check_box9 = useRef(null)




    let box_array = [Check_box1, Check_box2, Check_box3, Check_box4, Check_box5, Check_box6, Check_box7, Check_box8, Check_box9]

    const Toogling_func = (e, num) => {
        if (lock) {
            return 0;
        }
        if (count % 2 === 0) {
            e.target.innerHTML = '<span class="bold-white">X</span>';
            data[num] = "x";
            setCount(++count);

        }
        else {
            e.target.innerHTML = '<span class="bold-white">o</span>';
            data[num] = "0";
            setCount(++count);
        }
        find_Winner()

    }



    const find_Winner = () => {
        const winPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (const pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (data[a] && data[a] === data[b] && data[a] === data[c]) {
                Result(data[a]);
                return;
            }
        }

        if (!data.includes("")) {
            declareTie();
        }
    };



    const Result = (winner) => {
        setlock(true);
        if (winner === 'x') {
            titleRef.current.innerHTML = `Congratulations <img src="${celebration}"> Winner is  <img src=${cross}> <img src="${celebration}"> `
        }
        else {
            titleRef.current.innerHTML = `Congratulations <img src="${celebration}"> Winner is <img src=${circle}> <img src="${celebration}">`
        }
        if (winner === null) {
            declareTie();
        }
    }

    const declareTie = () => {
        setlock(true);
        titleRef.current.innerHTML = "Ooops 🤭 !!! It's a tie! 😃 😃";
    };

    const reset = (e) => {
        setlock(false);
        data = ["", "", "", "", "", "", "", "", ""];
        // titleRef.current.innerHTML = 'Heloo 👋 <span>The Game is Started AGAIN!!! </span>'
        titleRef.current.innerHTML = 'Hello <span class="waving-hand">👋</span> <span>The Game is Started AGAIN!!!</span>';




        box_array.map((e) => {
            e.current.innerHTML = "";
        })
    }


    return (
        <div className='Container'>


            <h1 className='title' ref={titleRef}>Let's Play <span>TIC-TAC-TOE </span></h1>
            {/* <h1 className={`title ${showWinnerGif ? 'winner-animation' : ''}`} ref={titleRef}>
                Ticac-toe <span>winn</span>
          
          
          </h1> */}

            <div className='board'>
                <div className="row1">
                    <div className="Check_boxes" ref={Check_box1} onClick={(e) => { Toogling_func(e, 0) }}></div>
                    <div className="Check_boxes" ref={Check_box2} onClick={(e) => { Toogling_func(e, 1) }}></div>
                    <div className="Check_boxes" ref={Check_box3} onClick={(e) => { Toogling_func(e, 2) }}></div>

                </div>

                <div className="row2">
                    <div className="Check_boxes" ref={Check_box4} onClick={(e) => { Toogling_func(e, 3) }}></div>
                    <div className="Check_boxes" ref={Check_box5} onClick={(e) => { Toogling_func(e, 4) }}></div>
                    <div className="Check_boxes" ref={Check_box6} onClick={(e) => { Toogling_func(e, 5) }}></div>

                </div>


                <div className="row3">
                    <div className="Check_boxes" ref={Check_box7} onClick={(e) => { Toogling_func(e, 6) }}></div>
                    <div className="Check_boxes" ref={Check_box8} onClick={(e) => { Toogling_func(e, 7) }}></div>
                    <div className="Check_boxes" ref={Check_box9} onClick={(e) => { Toogling_func(e, 8) }}></div>

                </div>



            </div>
            <button className='reset' onClick={() => { reset() }}>Restart</button>
        </div>
    )
}
