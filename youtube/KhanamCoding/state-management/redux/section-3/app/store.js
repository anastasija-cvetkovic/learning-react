const configureStore = require("@reduxjs/toolkit").configureStore;
const pizzaReducer = require("../features/pizza/pizzaSlice");
const burgerReducer = require("../features/burger/burgerSlice");
// const reduxLogger = require("redux-logger");
// const logger = reduxLogger.createLogger();
const productReducer = require("../features/product/productSlice");

const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
    burger: burgerReducer,
    product: productReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
module.exports = store;
