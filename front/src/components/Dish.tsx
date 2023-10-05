import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Dish = () => {
    const dishData_2 = {
        "id": "15",
        "name": "Greek Salad",
        "source": "Food Network (two different recipes)",
        "instructions": "In a small bowl, whisk together the lemon juice, garlic, salt, and oil. Set aside.   In a large bowl lightly toss the lettuce with the olives, cheese, cucumber, tomatoes, onion, oregano, and black pepper. Let sit up to 2 hours.  To serve, toss salad with dressing and place sliced chicken on top.",
        "category": "Salad"
    }
    interface TCategoryDishes {
        id: string | null;
        name: string | null;
        source: string | null;
        instructions: string | null;
        category: string | null;
    }
    const { idDish } = useParams();
    const [dishData, setDishData] = useState<TCategoryDishes | any>(null)
    useEffect(() => {
        const controller = new AbortController();
        const { signal } = controller;
        async function fetchDish() {
            try {
                const tmpDishdata: TCategoryDishes = await fetch(`/api/recipies/${idDish}`, { signal }).then(res => res.json());
                setDishData(tmpDishdata);
                console.log("fetch_error", tmpDishdata);
            } catch (error) {
                console.log("fetch_error", error);
            }
        }

        fetchDish();

        return () => {
            controller.abort();
        };

    }, [idDish]);
    if (dishData) {
        return (
            <div>

                <h3>Dish name: {dishData.name} </h3>
                <div>
                    <h4>Dish recipe: </h4>
                    <p> {dishData.instructions} </p>
                </div>
            </div>
        )
    }
    else return (<div>Loading...</div>)
}


export default Dish
