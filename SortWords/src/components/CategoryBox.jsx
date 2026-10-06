function CategoryBox({
                         category,
                         index,
                         isDragging,
                         onDragStart,
                         onDragOver,
                         onDrop
                     }) {
    return (
        <div
            className={`category-box ${isDragging ? "dragging" : ""}`}
            draggable
            onDragStart={() => onDragStart(index)}
            onDragOver={(event) => onDragOver(event)}
            onDrop={() => onDrop(index)}
        >
            <div className="category-icon">
                {category.icon}
            </div>

            <h2>{category.sanskritName}</h2>

            <p>{category.name}</p>
        </div>
    );
}

export default CategoryBox;