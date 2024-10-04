// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// TODO: buatlah variabel yang menampung data orders
let orders = [];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  console.log("=== ORDER LIST ===");
  let totalPrice = 0;
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    totalPrice += item.price;
  }
  let order = {
    id: generateUniqueId(),
    customerName: customerName,
    items: items,
    totalPrice: totalPrice,
    status: "Menunggu",
  };
  orders.push(order);
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  console.log("===STATUS ORDER===");
  return (orders.find((order) => order.id === orderId).status = status);
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  console.log("===TOTAL KEUNTUGAN===");
  let statOrder = orders.filter((order) => order.status == "Selesai");
  for (let i = 0; i < orders.length; i++) {
    return statOrder[i].totalPrice;
  }
}
// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  console.log("===ORDER SELESAI===");
  let delOrder = orders.find((order) => order.id === id);
  return orders.splice(orders.indexOf(delOrder), 1);
}

export {
  orders,
  addOrder,
  updateOrderStatus,
  calculateTotalRevenue,
  deleteOrder,
};
