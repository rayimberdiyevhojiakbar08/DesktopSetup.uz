import { Router } from "express";
import cartController from "../controller/cart.controller.js";
const cartrouter = new Router();

cartrouter.get('/cart', cartController.cartPage);

cartrouter.post('/add-to-cart', cartController.addItem)
cartrouter.post('/cart/remove', cartController.removeItem)

export default cartrouter
