import SwaggerUI from "swagger-ui-react";
import { useParams } from "react-router-dom";
import "swagger-ui-react/swagger-ui.css"


const SwaggerUIWidget = () => {
    return (
        <SwaggerUI url="/api/openapi" />
    )
}

export default SwaggerUIWidget;