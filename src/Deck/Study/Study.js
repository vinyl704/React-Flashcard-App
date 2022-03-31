import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { readDeck } from "../../utils/api";
import StudyCard from "./StudyCard";
import StudyPage from "./StudyPage";
import StudyNotEnough from "./StudyNotEnough";

export default function Study(){
    const { deckId } = useParams();
    const [deck, setDeck] = useState({ name: "Loading...", cards: []});
    const [cardNum, setCardNum] = useState(1);

    const history = useHistory();
    useEffect(() => {
        readDeck(deckId).then(setDeck);
    }, [deckId]);
    const cardCountNum = deck.cards.length;
    const nextHandler = () => {
        if(cardNum === cardCountNum) {
            const restartToHome = !window.confirm("Restart cards?\n\nClick 'cancel' to return to the home page.")
            return restartToHome ? history.push("/") : setCardNum(1)
        }
        setCardNum((prevState) => Math.min(cardCountNum, prevState + 1))
    }
    const cardTitleText = `Card ${cardNum} of ${cardCountNum}`;
    const card = deck.cards[cardNum - 1];
    const nextBtn = (<button type="button" className="btn btn-primary" onClick={nextHandler}>
    Next
</button>)

    //checking card count to know what to render
    if(cardCountNum <= 2){
        return(<div>

            <StudyPage name={deck.name} deckId={deckId} />
                <StudyNotEnough deckId={deckId}  cardCountNum={cardCountNum}/>
        </div>
            
        )
    }
    return (
        <div>

        <StudyPage name={deck.name} deckId={deckId} />
            <StudyCard card={card} title={cardTitleText} nextBtn={nextBtn}/>
                
           
        </div>
        
    )
}
