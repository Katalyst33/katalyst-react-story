import  { useState, useEffect, useRef } from 'react';
import './effect.css'


type TextSwapProps = {
    textArray: string[];
}

function TextSwap({ textArray }: TextSwapProps) {

    console.log(textArray)

    // const words = textArray || [];
    const words =  textArray


    const [typedWord, setTypedWord] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const typingSpeed = useRef(150).current; // milliseconds

    useEffect(() => {
        if (charIndex < words[wordIndex].length && !isDeleting) {
            setTimeout(() => {
                setTypedWord((prev) => prev + words[wordIndex][charIndex]);
                setCharIndex(charIndex + 1);
            }, typingSpeed);
        } else if (isDeleting) {
            setTimeout(() => {
                setTypedWord((prev) => prev.substring(0, prev.length - 1));
                setCharIndex(charIndex - 1);
            }, typingSpeed);
        }

        if (charIndex === words[wordIndex].length) {
            setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setWordIndex((wordIndex + 1) % words.length);
        }
    }, [charIndex, isDeleting, wordIndex, words]);

    const splitWord = typedWord.split(" ");
    const firstPart = splitWord[0];
    const secondPart = splitWord.length > 1 ? splitWord[1] : "";

    return (
        <div className="text-4xl font-semibold tracking-tight sm:text-6xl" id="word-container">


            {firstPart && <span className="text-gray-200 px-2">{firstPart}</span>}
            {secondPart && <span className="text-primary-500">{secondPart}</span>}
            <span className="cursor">|</span>
        </div>
    );
}

export default TextSwap;
