import React from "react";
import { useParams, useEffect, Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

export default function study() {
  const { deckId } = useParams();
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">
            <AiFillHomeHome size={20} />
          </Link>
        </li>
        <li className="breadcrumb-item">
          <a href="/">Home</a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Data
        </li>
      </ol>
    </nav>
  );
}
