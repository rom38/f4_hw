import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { Link } from "react-router-dom";
const Categories = () => {
    interface TCateg {
        category: string | null;
        id: string | null;
        recipies: Array<number> | null
    }
    const [categoryData, setCategoryData] = useState<[TCateg]>([{ category: null, id: null, recipies: null }]);
    // const test_data = {
    //     "id": "15",
    //     "name": "Greek Salad",
    //     "source": "Food Network (two different recipes)",
    //     "instructions": "In a small bowl, whisk together the lemon juice, garlic, salt, and oil. Set aside.   In a large bowl lightly toss the lettuce with the olives, cheese, cucumber, tomatoes, onion, oregano, and black pepper. Let sit up to 2 hours.  To serve, toss salad with dressing and place sliced chicken on top.",
    //     "category": "Salad"
    // }
    // const test_data_c = [
    //     "Salade",
    //     "Main",
    //     "Dessert"]
    useEffect(() => {
        fetch("/api/categories/")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                return setCategoryData(data)
            })
    }, [])

    return (
        <div>
            <h2>Dish categories: </h2>
            {categoryData.map((item) =>
                <>
                    <h3>{item.category}</h3>
                    <Link to={`/list-dishes/${item.id}`}>ссылка</Link>
                </>
            )
            }

        </div>
    )
}

export default Categories
