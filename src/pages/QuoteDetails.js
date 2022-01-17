import {Fragment} from "react";
import {Route, useParams} from "react-router-dom";
import Comments from "../components/comments/Comments";

const QuoteDetails = () => {
    const param = useParams();
    return (
        <Fragment>
            <h1>Quote Details page</h1>
            <p>{param.quoteId}</p>
            <Route path={`/quotes/:quoteId/comments`}>
                <Comments/>
            </Route>
        </Fragment>
    )
}

export default QuoteDetails;