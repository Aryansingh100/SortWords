import { useState } from "react";

import { categories, words } from "../data/gameData";

import CategoryBox from "./CategoryBox";
import FallingWord from "./FallingWord";

function Game() {

    const [currentWord, setCurrentWord] = useState(words[0]);

    return (
        <div className="game">

            <div className="game-header">
                <h1>Sanskrit Word Sort</h1>
            </div>

            <div className="game-area">

                <FallingWord word={currentWord} />

                <div className="category-container">

                    {categories.map((category) => (
                        <CategoryBox
                            key={category.id}
                            category={category}
                        />
                    ))}

                </div>

            </div>

        </div>
    );
}

export default Game;