import Product from "../model/products.model.js"

export default new class Cart {
    cartPage(req, res) {
        res.render('main/cart')
    }
    async addItem(req, res) {
      const { id } = req.body;
      const quantity = parseInt(req.body.quantity) || 1;
      const data = await Product.findById(id);
    
      if (!req.session.cart) {
        req.session.cart = [];
      }
    
      const existingItem = req.session.cart.find((item) => item.data._id === id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        req.session.cart.push({ data, quantity });
      }
    
      res.json(req.session.cart);
    }
  async removeItem(req, res) {
    var cart = req.session.cart;
    var productId = req.params.id;

    // Find the index of the item to remove
    var index = cart.findIndex(function(item) {
      return item.productId == productId;
    });

    // Remove the item from the cart
    if (index !== -1) {
      cart.splice(index, 1);
    }
    
    // Return the updated cart data
    res.json({ cart: req.session.cart });
  }

}

