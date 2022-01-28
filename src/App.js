import {Redirect, Route, Switch} from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import NewQuotes from "./pages/NewQuotes";
import QuoteDetails from "./pages/QuoteDetails";
import Layout from "./components/layout/Layout";
import PageNotFound from "./pages/PageNotFound";

function App() {
    return (
        <Layout>

            <Switch>
                <Route path="/" exact>
                    <Redirect to="/quotes"/>
                </Route>
                <Route path={"/quotes"} exact>
                    <AllQuotes/>
                </Route>
                <Route path={"/newquotes"}>
                    <NewQuotes/>
                </Route>
                <Route path={"/quotes/:quoteId"}>
                    <QuoteDetails/>
                </Route>
                <Route path="*">
                    <PageNotFound/>
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
