import { useParams } from "react-router-dom";

const SinglePage = () => {
    const { id } = useParams();
    return (
        <>
            <h1>SinglePage</h1>
            <div>{id}</div>
        </>
    )
}

export default SinglePage;
