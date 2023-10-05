import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Dish = () => {

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
