import { useState } from "react";
import words from "./wordList.json";
import { HangmanDrawing } from "./HangmanDrawing";
import { HangmanWord } from "./HangmanWord";
import { Keyboard } from "./Keyboard";

const App = () => {
    const [wordToGuess, setWordToGuess] = useState(() => {
        return words[Math.floor(Math.random() * words.length)];
    });

    const [guessedLetter, setGuessedLetter] = useState<string[]>([]);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                maxWidth: "800px",
                alignItems: "center",
                margin: "0 auto",
                gap: "2px",
            }}
        >
            <strong style={{ fontSize: "2rem", margin: "2rem" }}>
                Lose Win
            </strong>

            <div style={{ textAlign: "center", fontSize: "2rem", gap: "2px" }}>
                <HangmanDrawing />
                <HangmanWord />
                <div
                    style={{
                        alignSelf: "stretch",
                    }}
                >
                    <Keyboard />
                </div>
            </div>
        </div>
    );
};

export default App;
