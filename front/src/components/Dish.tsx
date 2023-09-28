const Dish = () => {
    const test_data = {
        "id": "15",
        "name": "Greek Salad",
        "source": "Food Network (two different recipes)",
        "instructions": "In a small bowl, whisk together the lemon juice, garlic, salt, and oil. Set aside.   In a large bowl lightly toss the lettuce with the olives, cheese, cucumber, tomatoes, onion, oregano, and black pepper. Let sit up to 2 hours.  To serve, toss salad with dressing and place sliced chicken on top.",
        "category": "Salad"
    }
    return (
        <div>
            <h2>Category: {test_data.category}</h2>
            <h3>Dish name: {test_data.name} </h3>
            <div>
                <h4>Dish recipe: </h4>
                <p> {test_data.instructions} </p>
            </div>
        </div>
    )
}

export default Dish
