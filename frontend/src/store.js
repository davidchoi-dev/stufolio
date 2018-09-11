import { createStore, applyMiddleware } from "redux";
import { reducer } from "./modules";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage
};

const persistedReducer = persistReducer(persistConfig, reducer);

export default () => {
    let store = createStore(persistedReducer, applyMiddleware(thunk));
    let persistor = persistStore(store);
    return { store, persistor };
};
