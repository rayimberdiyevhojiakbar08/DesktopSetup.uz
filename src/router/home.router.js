import { Router } from "express";
import homeController from "../controller/home.controller.js";

const router = new Router()

router.get('/', homeController.homePage);
router.get('/productsFilter', homeController.filterBy_Cost_Color);

router.post('/add-to-cart', homeController.addCart);
router.post('/search-product', homeController.searchResults);

export default router