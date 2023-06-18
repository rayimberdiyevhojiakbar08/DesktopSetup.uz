import products from "../model/products.model.js"
class ProductShowPage {
    async keyboards(req, res) {
        const keyboards = await products.find({ type_product: "keyboard" })
        res.render('main/product', { data:keyboards, title: "Klaviaturlar" })
    }
    async mouses(req, res) {
        const mouses = await products.find({ type_product: "mouse" })
        res.render('main/product', { data:mouses, title: "Sichqonchalar" })
    }
    async screens(req, res) {
        const screens = await products.find({ type_product: "screen" })
        res.render('main/product', { data:screens, title: "Monitorlar" })
    }
    async microphones(req, res) {
        const microphones = await products.find({ type_product: "microphone" })
        res.render('main/product', { data:microphones, title: "Mikrofonlar" })
    }
    async headphones(req, res) {
        const headphones = await products.find({ type_product: "headphone" })
        res.render('main/product', { data:headphones, title: "Quloqchinlar" })
    }
    async chairs(req, res) {
        const chairs = await products.find({ type_product: "chair" })
        res.render('main/product', { data:chairs, title: "Stullar" })
    }
    async desks(req, res) {
        const desks = await products.find({ type_product: "desk" })
        res.render('main/product', { data:desks, title: "Stollar" })
    }
    async others(req, res) {
        const others = await products.find({ type_product: "other" })
        res.render('main/product', { data:others, title: "Boshqa Mahsulotlar" })
    }
    
}

export default new ProductShowPage()