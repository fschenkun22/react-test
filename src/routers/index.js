import { BrowserRouter,Switch,Route } from "react-router-dom";
import APP36 from "../APP36";
import List from "../list"
import Detail from "../detail"

const BaseRoute = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={APP36}></Route>
                <Route exact path='/list' component={List}></Route>
                <Route exact path='/detail' component={Detail}></Route>

            </Switch>
        </BrowserRouter>
    )
}

export default BaseRoute