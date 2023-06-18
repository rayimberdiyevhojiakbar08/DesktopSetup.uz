const btn = document.querySelectorAll("button[data-id]");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");

let total = document.getElementById("total");

plus.addEventListener("click", () => {
    const quantity = document.getElementById("quantity");
    let total = document.getElementById("total");
    get_total_cost(parseInt( quantity.value) + 1, total);
});

minus.addEventListener("click", () => {
    const quantity = document.getElementById("quantity");
    let total = document.getElementById("total");
    get_total_cost(quantity.value - 1, total);
});

function get_total_cost(quantity, total) {
    
    $.ajax({
        url:"/total_cost",
        method:"POST",
        data: {
            id, 
            quantity,
            total: total.textContent
         },
        dataType:"JSON",
        success: function(data) {
            // window.location.reload();
            total.textContent = data.total + '.000 uzs';
        }
    });
}

btn.forEach(tag => {
tag.addEventListener("click", () => {
    let id = tag.getAttribute("data-id");
    var quantity = $('#quantity').val();

    $.ajax({
        url: "/add-to-cart",
        method: "POST",
        data: { 
          id,
          quantity
        },
        dataType: "JSON",
        success: function(data) {
          const count_items = document.getElementById("count-items");
          const set = new Set(data.map(item => item.data._id));
          count_items.textContent = set.size;
        }
      });
})
});