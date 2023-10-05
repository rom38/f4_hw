import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
const Categories = () => {
    interface TCateg {
        category: string | null;
        id: string | null;
        recipies: Array<number> | null
    }
    const [categoryData, setCategoryData] = useState<TCateg[]>([{ category: null, id: null, recipies: null }]);

    useEffect(() => {
        const controller = new AbortController();
        const { signal } = controller;
        async function fetchCategoryList() {
            try {
                const tmpCategoryData: TCateg[] = await fetch(`/api/categories/`, { signal })
                    .then(res => res.json());
                setCategoryData(tmpCategoryData);
            } catch (error) {
                console.log("fetch_error", error);
            }
        }

        fetchCategoryList();

        return () => {
            controller.abort();
        };

    }, []);

    return (
        <div>
            <h2>Dish categories: </h2>
            <ol>
                {categoryData.map((item) =>
                    <>
                        <h3><li key={item.id}> <Link to={`/list-dishes/${item.id}`}>{item.category}</Link></li></h3>
                    </>
                )}
            </ol>
        </div>
    )
}

export default Categories
