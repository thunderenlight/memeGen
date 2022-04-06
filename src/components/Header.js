import React from "react"
import troll from '../images/troll-face.png';
import bidness from '../images/black-bidness-cat.png';
import grumpy from '../images/grumpy-cat.png';

export default function Header() {
    return (
        <header className="header">
            <img 
                src={grumpy }
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React API - Project </h4>
        </header>
    )
}