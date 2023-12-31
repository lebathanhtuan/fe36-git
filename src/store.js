import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import productReducer from "redux/slicers/product.slice";
import categoryReducer from "redux/slicers/category.slice";
import commonReducer from "redux/slicers/common.slice";

import rootSaga from "redux/sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    product: productReducer,
    category: categoryReducer,
    common: commonReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    }),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(rootSaga);

export { store };
