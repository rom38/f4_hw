import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css"


const SwaggerUIWidget = () => {
    return (
        <SwaggerUI url="/api/openapi" />
    )
}

export default SwaggerUIWidget;