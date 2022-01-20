import { HashRouter as Router,Switch,Route, NavLink } from "react-router-dom";

import { lazy, Suspense } from "react";

const List = lazy(()=>{
    return import('../list')
})

const App =lazy(()=>{
    return import('../App')
})

const App1 = lazy(()=>{
    return import('../App1')
})

const App2 = lazy(()=>{
    return import('../App2')
})

const App3 = lazy(()=>{
    return import('../App3')
})


const App4 = lazy(()=>{
    return import('../App4')
})

const App5 = lazy(()=>{
    return import('../App5.js')
})


const BaseRoute = () =>{
    return(
        <>       
            <Router>
                <NavLink to='list'>List</NavLink>
                <NavLink to='detail'>Detail</NavLink>
                <NavLink to='App1'>App1</NavLink>
                <NavLink to='App2'>APP2</NavLink>
                <NavLink to='App3'>APP3</NavLink>
                <NavLink to='App4'>APP4</NavLink>
                <NavLink to='App5'>APP5</NavLink>

                <Switch>
                    <Suspense fallback={<h1>loading</h1>}>
                        <Route exact path='/' component={App}></Route>
                        <Route exact path='/list' component={List}></Route>
                        <Route exact path='/App1' component={App1}></Route>
                        <Route exact path='/App2' component={App2}/>
                        <Route exact path='/App3' component={App3}/>
                        <Route exact path='/App4' component={App4}/>
                        <Route exact path='/App5' component={App5}/>
                    </Suspense>
                </Switch>
            </Router>
        </>
    )
}

export default BaseRoute