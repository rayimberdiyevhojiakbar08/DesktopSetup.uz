import products from "../model/products.model.js"
class Home {
    async homePage(req, res) {
        const keyboard = await products.find({ type_product: "keyboard" }).limit(4)
        const mouse = await products.find({ type_product: "mouse" }).limit(4)
        const screen = await products.find({ type_product: "screen" }).limit(4)
        const microphone = await products.find({ type_product: "microphone" }).limit(4)
        const headphone = await products.find({ type_product: "headphone" }).limit(4)
        const chair = await products.find({ type_product: "chair" }).limit(4)
        const desk = await products.find({ type_product: "desk" }).limit(4)
        const other = await products.find({ type_product: "other" }).limit(4)
        res.render('main/home', { keyboard, mouse, screen, microphone, desk, headphone, chair, other })
    }
      async searchResults(req, res) {
          let search = req.body.title;
          if(search) {
              let regexForTitle= new RegExp(search, "i");
              let result = await products.find({ title: { $regex:regexForTitle }});
              if (result.length !== 0) {
                  res.render("main/searchresult", {data:result});
              } else {
                  res.render("main/searchresult", {data:0});
              }
          }else {
              res.redirect('/');
          }

      }
      async filterBy_Cost_Color(req, res) {
        const { color, minCost, maxCost, url } = req.query;

        let query = {};
      
        if (color) {
          query.color = color;
        }
      
        if (minCost && maxCost) {
          query.buy_cost = { $gte: minCost, $lte: maxCost };
        } else if (minCost) {
          query.buy_cost = { $gte: minCost };
        } else if (maxCost) {
          query.buy_cost = { $lte: maxCost };
        }
      
        let Products;
      
        if (url === '/keyboards') {
          Products = await products.find({ type_product: 'keyboard', ...query });
        } else if (url === '/mouses') {
          Products = await products.find({ type_product: 'mouse', ...query });
        } else if (url === '/screens') {
          Products = await products.find({ type_product: 'screen', ...query });
        } else if (url === '/microphones') {
          Products = await products.find({ type_product: 'microphone', ...query });
        } else if (url === '/headphones') {
          Products = await products.find({ type_product: 'headphone', ...query });
        } else if(url === '/chairs') {
          Products = await products.find({ type_product: 'chair', ...query });
        } else if(url === '/desks') {
          Products = await products.find({ type_product: 'desk', ...query });
        } else if(url === '/others') {
          Products = await products.find({ type_product: 'other', ...query });
        }
         else {
          Products = await products.find(query);
        }
      
        res.json(Products);
        }
        async addCart(req, res) {
            const { id } = req.body;
            const quantity = parseInt(req.body.quantity) || 1;
            const data = await products.findById(id);
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
}
export default new Home();