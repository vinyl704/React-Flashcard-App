import React from "react";
import { Link, useParams } from "react-router-dom";

export default function StudyNotEnough({ cardCountNum }) {
  const {deckId} = useParams()
  return (
    <div>
      <h3>Not Enough cards</h3>
      <p>
        You need at least 3 cards in your deck, your deck has {cardCountNum}
        cards.
      </p>
      
      <Link
                to={`/decks/${deckId}/cards/new`}
                className="btn btn-primary"
                title="Add Card"
            >
                <span className="oi oi-plus" /> Add Cards
            </Link>
    </div>
  );
}
