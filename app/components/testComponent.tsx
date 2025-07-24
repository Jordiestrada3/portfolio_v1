"use client"
import { useState } from "react";

type SnakeProps = {
    titol: string;
    paragraf?: string;
};

export default function TestComponent({ titol, paragraf }: SnakeProps) {

    const [background, setBackground] = useState(false)

    const styleTrue = { backgroundColor: 'red' }
    const styleFalse = { backgroundColor: 'green' }


    return (
        <div style={background ? styleTrue : styleFalse}>
            <h1>{titol}</h1>
            <p>{paragraf}</p>
            <button onClick={() => setBackground(!background)}>Press</button>
        </div>

    )
}