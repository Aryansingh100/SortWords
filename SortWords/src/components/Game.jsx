import { useState } from "react";

import { categories, words } from "../data/gameData";

import CategoryBox from "./CategoryBox";
import FallingWord from "./FallingWord";

function Game() {
    const [currentWord, setCurrentWord] = useState(words[0]);

    // Current order of the boxes
    const [boxOrder, setBoxOrder] = useState(categories);

    // Stores which box is currently being dragged
    const [draggedIndex, setDraggedIndex] = useState(null);

    // Called when the player starts dragging a box
    const handleDragStart = (index) => {
        setDraggedIndex(index);
    };

    // Allows another box to receive the drop
    const handleDragOver = (event) => {
        event.preventDefault();
    };

    // Called when the dragged box is dropped
    const handleDrop = (dropIndex) => {
        if (draggedIndex === null) {
            return;
        }

        // Don't do anything if dropped on itself
        if (draggedIndex === dropIndex) {
            setDraggedIndex(null);
            return;
        }

        const newBoxOrder = [...boxOrder];

        // Swap the two boxes
        [
            newBoxOrder[draggedIndex],
            newBoxOrder[dropIndex]
        ] = [
            newBoxOrder[dropIndex],
            newBoxOrder[draggedIndex]
        ];

        setBoxOrder(newBoxOrder);

        setDraggedIndex(null);
    };

    return (
        <div className="game">

            <div className="game-header">
                <h1>Sanskrit Word Sort</h1>
            </div>

            <div className="game-area">

                <FallingWord word={currentWord} />

                <div className="category-container">

                    {boxOrder.map((category, index) => (
                        <CategoryBox
                            key={category.id}
                            category={category}
                            index={index}
                            isDragging={draggedIndex === index}
                            onDragStart={handleDragStart}
                            onDragOver={handleDragOver}
                            onDrop={handleDrop}
                        />
                    ))}

                </div>

            </div>

        </div>
    );
}

export default Game;