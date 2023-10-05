import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import style from "../styles/CategoryDishes.module.css"

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
        recipies: string[]
    }
    const { id } = useParams();
    const navigate = useNavigate();

    const [dishesListIds, setDishesListIds] = useState<string[]>([]);
    const [categoryDishesData, setCategoryDishesData] = useState<TCategoryDishes[]>([]);
    const [categoryDish, setCategoryDish] = useState<string | null>("");

    useEffect(() => {
        const controller = new AbortController();
        const { signal } = controller;
        async function fetchDishesList() {
            try {
                const tmpDishesList: TCateg = await fetch(`/api/categories/${id}`, { signal })
                    .then(res => res.json());
                setDishesListIds(tmpDishesList.recipies);
                setCategoryDish(tmpDishesList.category);
            } catch (error) {
                console.log("fetch_error", error);
            }
        }

        fetchDishesList();

        return () => {
            controller.abort();
        };

    }, [id]);

    useEffect(() => {
        const controller = new AbortController();
        const { signal } = controller;
        async function fetchDataDishes() {
            if (dishesListIds && dishesListIds.length > 0) {
                try {
                    const tmpCategoryDishesData: TCategoryDishes[] = await Promise.all(
                        dishesListIds.map((id: string) =>
                            fetch(`/api/recipies/${id}`, { signal }).then(res => res.json())
                        ));
                    setCategoryDishesData(tmpCategoryDishesData);
                } catch (error) {
                    console.log("fetch_error", error);
                }
            }
        }

        fetchDataDishes();

        return () => {
            controller.abort();
        };
    }, [dishesListIds]);


    if (categoryDishesData) {
        return (
            <div>
                <button onClick={() => navigate(-1)} className={style.buttonback}>go back</button>
                <h2>Dish category: {categoryDish}</h2>
                {/* <p>{categoryDishesData[0].name}</p> */}
                <ul>
                    {categoryDishesData.map((item) =>
                        <li key={item.id}>
                            <h3 ><Link to={`/dish/${item.id}`}>{item.name}</Link></h3>
                        </li>
                    )
                    }
                </ul>


            </div>
        )
    }
    else return (<div>Loading...</div>)
}

export default CategoryDishes
