import { createStore } from "redux";

// any is bad practisch but for now (because there is no state yet) we use it.
const reducerFn = (state: any, action: any) => {};

const store = createStore(reducerFn);

export default store;
