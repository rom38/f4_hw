import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import style from "../styles/CategoryDishes.module.css"

const Dish = () => {

    const navigate = useNavigate();
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
                <button onClick={() => navigate(-1)} className={style.buttonback}>go back</button>
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
