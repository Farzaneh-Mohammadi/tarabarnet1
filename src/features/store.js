import { configureStore } from "@reduxjs/toolkit";
// import { rootReducer } from "./reducer/rootReducer";


import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST,PURGE, REGISTER} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers }  from "redux";
import productReducer from "./productSlice";


// // ---- use redux-persist to save on localStorage ----

const persistConfig = {
  key: "root",
  storage,
};

 const rootReducer = combineReducers({ reducer: productReducer });

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

// const store = configureStore({ reducer: persistedReducer });
// const persistor = persistStore(store);

export { store };













