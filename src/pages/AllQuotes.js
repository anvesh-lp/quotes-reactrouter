import QuoteList from "../components/quotes/QuoteList";

const DummyQuotes = [
    {
        id: "1", author: "Anvesh", text: "learning react router"
    },
    {
        id: "2", author: "Ganesh", text: "learning react router is grear"
    }
]

const AllQuotes = () => {
    return (
        <QuoteList quotes={DummyQuotes}/>
    )
}

export default AllQuotes;