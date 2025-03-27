import { ORDER_BURGER } from "./BurgerTypes";
//Action creators
export const orderBurger = (number) => {
  return {
    //type: "ORDER_PIZZA",
    type: ORDER_BURGER,
    payload: number,
  };
};
