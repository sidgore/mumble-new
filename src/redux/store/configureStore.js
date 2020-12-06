import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { AsyncStorage } from "react-native";
import Reactotron from "../../../ReactotronConfig";

//import { devToolsEnhancer } from "redux-devtools-extension";
import { layoutReducer } from "../reducers/layoutReducer";
import { tokenReducer } from "../reducers/tokenReducer";
import { mumblesReducer } from "../reducers/mumblesReducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  layout: layoutReducer,
  userToken: tokenReducer,
  mumbles: mumblesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(persistedReducer, Reactotron.createEnhancer());
  let persistor = persistStore(store);

  return { store, persistor };
};
