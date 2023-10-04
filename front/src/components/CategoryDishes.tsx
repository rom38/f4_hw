import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const CategoryDishes = () => {
    interface TCategoryDishes {
        id: string | null;
        name: string | null;
        source: string | null;
        instructions: string | null;
        category: string | null;
    }
    interface TCateg {
        category: string | null;
        id: string | null;
        recipies: Array<number> | null
    }
    let { state } = useLocation();
    console.log("state", state);
    const [categoryDishesData, setCategoryDishesData] = useState<TCategoryDishes[]>([{
        category: null, id: null, name: null, source: null, instructions: null
    }]);
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
        state.recipies.map((id: string) => {

            fetch(`/api/recipies/${id}`)
                .then(res => res.json())
                .then((data: TCategoryDishes) => {
                    console.log("recipies", data);
                    return setCategoryDishesData([...categoryDishesData, data]);
                })
        })
    }, [])

    return (
        <div>
            <h2>Dish categories: </h2>
            {/* <p>{categoryDishesData[0].name}</p> */}
            {categoryDishesData.map((item) =>
                <>
                    <h3>{item.name}</h3>
                    {/* <Link to={`/list-dishes/${item.id}`}>ссылка</Link> */}
                </>
            )
            }

        </div>
    )
}

export default CategoryDishes