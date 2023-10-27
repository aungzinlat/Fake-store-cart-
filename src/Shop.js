import { cartObserver } from "./app/cart";
import { categoryRender } from "./app/categories";
import { productRender } from "./app/product";
import {
  cartBtnHandler,
  categoryListsHandler,
  defaultSearchBlurHandler,
  defaultSearchKeyUpHandler,
  orderNowHandler,
  searchBtnHandler,
} from "./core/handlers";
import {
  cartBtn,
  categoryLists,
  closeCart,
  defaultSearch,
  orderNow,
  searchBtn,
  searchForm,
} from "./core/selectors";
import { categories, products } from "./core/variables";

export class Shop {
  preRender() {
    categoryRender(categories);
    productRender(products);
  }
  listener() {
    closeCart.addEventListener("click", cartBtnHandler);
    cartBtn.addEventListener("click", cartBtnHandler);
    categoryLists.addEventListener("click", categoryListsHandler);
    orderNow.addEventListener("click", orderNowHandler);
    searchBtn.addEventListener("click", searchBtnHandler);

    defaultSearch.addEventListener("keyup", defaultSearchKeyUpHandler);

    defaultSearch.addEventListener("blur", defaultSearchBlurHandler);
  }

  observer() {
    cartObserver();
  }

  init() {
    this.observer();
    this.preRender();
    this.listener();
  }
}
