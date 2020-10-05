import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import Random from './Random'


const Main = () => {

    return (
        <main>
            {/* <h3>this is main</h3> */}
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                {/* <Route
                    path='/stocks/:name'
                    render={props => <Stocks stockData={stockData} {...props} />}
                /> */}
                <Route
                    path="/random">
                    <Random />
                </Route>


                {/* <Route path="/about">
                    <About />
                </Route>  */}
            </Switch>
        </main>
    )
}

export default Main