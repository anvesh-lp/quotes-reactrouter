import QuoteForm from "../components/quotes/QuoteForm";

const NewQuotes=()=>{
    const quoteFormHandler = (data) => {
      console.log(data)
    }
    return (
        <QuoteForm onAddQuote={quoteFormHandler}/>
    )
}

export default NewQuotes;