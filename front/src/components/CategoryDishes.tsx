import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useRef } from "react";

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
    // let { state } = useLocation();
    const { id } = useParams();


    // console.log("state", state);
    const [dishesListIds, setDishesListIds] = useState<string[]>([]);
    const [categoryDishesData, setCategoryDishesData] = useState<TCategoryDishes[]>([]);
    let flagFetchRecipies: any = useRef();
    flagFetchRecipies.current = true;

    useEffect(() => {
        fetch(`/api/categories/${id}`)
            .then(res => res.json())
            .then((data: TCateg) => {
                console.log("category", data);
                return setDishesListIds(data.recipies);
            })
    }, [id]);

    // useEffect(() => {
    //     // const abortController = new AbortController();
    //     let ignore = false;
    //     if (dishesListIds && flagFetchRecipies.current && categoryDishesData.length === 0) {
    //         let tmpCategoryDishesData: TCategoryDishes[] = [];
    //         dishesListIds.map((id: string) => {

    //             fetch(`/api/recipies/${id}`)
    //                 .then(res => res.json())
    //                 .then((data: TCategoryDishes) => {
    //                     console.log("recipies", data);
    //                     if (!ignore) {
    //                         // setCategoryDishesData((categoryDishesData) => [...categoryDishesData, data]);
    //                         tmpCategoryDishesData.push(data);
    //                     };
    //                 })

    //         })
    //         console.log("tmpcategoryDishesData", tmpCategoryDishesData);
    //         setCategoryDishesData(tmpCategoryDishesData);
    //         flagFetchRecipies.current = false;
    //     }
    //     return () => {
    //         ignore = true;
    //     };
    // }, [dishesListIds])

    const controller = new AbortController();
    const { signal } = controller;
    useEffect(() => {
        async function fetchDataDishes() {
            if (dishesListIds.length > 0) {
                try {
                    const tmpCategoryDishesData: TCategoryDishes[] = await Promise.all(dishesListIds.map((id: string) =>
                        fetch(`/api/recipies/${id}`).then(res => res.json())
                    ));
                    setCategoryDishesData(tmpCategoryDishesData);
                } catch (error) {
                    console.error(error);
                }
            }
        }

        fetchDataDishes();

        return () => {
            controller.abort();
        };
    }, [dishesListIds]);



    return (
        <div>
            <h2>Dish categories: </h2>
            {/* <p>{categoryDishesData[0].name}</p> */}
            <ul>
                {categoryDishesData.map((item) =>
                    <li key={item.id}>
                        <h3 >{item.name}</h3>
                        {/* <Link to={`/list-dishes/${item.id}`}>ссылка</Link> */}
                    </li>
                )
                }
            </ul>

        </div>
    )
}

export default CategoryDishes
