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
            <ol>
                {categoryData.map((item) =>
                    <>
                        <h3><li> <Link to={`/list-dishes/${item.id}`}>{item.category}</Link></li></h3>
                    </>
                )
                }
            </ol>

        </div>
    )
}

export default Categories
