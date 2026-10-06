function FallingWord({ word }) {

    if (!word) {
        return null;
    }

    return (
        <div className="falling-word">

            <h1>{word.word}</h1>

            <p>{word.meaning}</p>

        </div>
    );
}

export default FallingWord;