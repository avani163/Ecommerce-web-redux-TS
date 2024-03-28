import { createStore, applyMiddleware, compose } from "redux";
import { thunk, ThunkMiddleware } from "redux-thunk"; // Assuming you are using Redux Thunk middleware
import reducers from "./redusers/index";
// import { RootState } from "../redux/constans/action-Types"; // Assuming you have defined RootState type

//  const composeEnhancers: any = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;
const composeEnhancers =
  (window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] as typeof compose) || compose;

type RootState = ReturnType<typeof reducers>;
type AppThunk = ThunkMiddleware<RootState>;

const store = createStore<any, any, any, any>(
  reducers,
  composeEnhancers(applyMiddleware<AppThunk>(thunk as any))
);

export default store;
