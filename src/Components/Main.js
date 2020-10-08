import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import Random from './Random/Random'
import Search from './Search/Search'
import Result from './Result/Result'
 

const Main = () => {

    return (
        <main>
            {/* <h3>this is main</h3> */}
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route
                    path='/search/:objectID'
                    render={props => <Result {...props} />}
                />
                <Route
                    path="/random">
                    <Random />
                </Route>
                <Route path="/search">
                    <Search />
                </Route>
            </Switch>
        </main>
    )
}

export default Main