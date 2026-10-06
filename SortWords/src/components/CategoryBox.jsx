function CategoryBox({ category }) {
    return (
        <div className="category-box">

            <div className="category-icon">
                {category.icon}
            </div>

            <h2>{category.sanskritName}</h2>

            <p>{category.name}</p>

        </div>
    );
}

export default CategoryBox;