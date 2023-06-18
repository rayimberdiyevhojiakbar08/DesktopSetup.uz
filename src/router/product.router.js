import { Router } from "express";
import productController from "../controller/product.controller.js";

const router = new Router()

router.get('/keyboards', productController.keyboards);
router.get('/mouses', productController.mouses);
router.get('/screens', productController.screens);
router.get('/microphones', productController.microphones);
router.get('/headphones', productController.headphones);
router.get('/chairs', productController.chairs);
router.get('/desks', productController.desks);
router.get('/others', productController.others);

export default router