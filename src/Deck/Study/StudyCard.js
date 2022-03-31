import React, { useEffect, useState } from "react";

export default function StudyCard({ card, title, nextBtn }) {
    const viewNext = { front: "back", back: "front"}
    const [view, setView] = useState('front');
    const [flipped, setFlipped] = useState(false);
    function flipHandler() {
        setView((prevState) => viewNext[prevState]);
        setFlipped(true)
    }
    useEffect(() => { 
        setView('front')
        setFlipped(false)
    }, [card]);
    return(
        <div className={`card ${view} study-card`}>
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text">{card[view]}</p>
                <button type="button" className="btn btn-secondary mr-2" onClick={flipHandler}>
                    Flip
                    
                </button>
                {/* Only renders button after the card is flipped once */}
                {flipped && nextBtn}
            </div>
        </div>
    )
}
