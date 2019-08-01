import { combineReducers } from "redux";
import testReducer from "../../features/testearea/testReducer";

const rootReducer = combineReducers({
    test: testReducer
})

export default rootReducer;