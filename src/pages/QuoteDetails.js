import {Fragment} from "react";
import {Route, useParams} from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";


const DummyQuotes = [
    {
        id: "1", author: "Anvesh", text: "learning react router"
    },
    {
        id: "2", author: "Ganesh", text: "learning react router is grear"
    }
]

const QuoteDetails = () => {
    const param = useParams();
    const quote = DummyQuotes.find((q) => q.id === param.quoteId);
    if (!quote){
        return <p>
            Quotes not found!!!
        </p>
    }
    return (
        <Fragment>
            <HighlightedQuote text={quote.text} author={quote.author}/>
            <Route path={`/quotes/:quoteId/comments`}>
                <Comments/>
            </Route>
        </Fragment>
    )
}

export default QuoteDetails;