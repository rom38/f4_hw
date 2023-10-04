//import style from './App.module.css';
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import HomePage from "./HomePage";
import BlogPage from "./BlogPage";
import AboutPage from "./AboutPage";
import NotFoundPage from "./NotFoundPage";
import SinglePage from "./SinglePage";
import { Layout } from "./Layout";
import Categories from "./Categories";
import SwaggerUIWidget from "./SwaggerUIWidget";
import Dish from "./Dish";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="posts" element={<BlogPage />} />
                    <Route path="categories" element={<Categories />} />
                    <Route path="dish" element={<Dish />} />

                    <Route path="posts/:id" element={<SinglePage />} />

                    <Route path="about" element={<AboutPage />} />
                    <Route path="swagger" element={<SwaggerUIWidget />} />

                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
