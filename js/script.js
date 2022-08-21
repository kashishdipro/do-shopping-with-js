// Create a empty array
const cartList = [];

// Display the purchase element
function displayInList(productList) {
    let totalPrice = 0;
    const tableBody = document.getElementById('cart-products');
    tableBody.innerHTML = '';
    for(let i=0; i<productList.length; i++){
        const name = cartList[i].productName;
        const price = cartList[i].productPrice;

        totalPrice = totalPrice + price;

        // Create Table Row
        const tableRow = document.createElement('tr');
        tableRow.innerHTML = `
        <th>${i+1}</th>
        <th>${name}</th>
        <th>${price}</th>
        `;
        tableBody.appendChild(tableRow);
    }

    // Create Table Row for Calculation
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
    <th></th>
    <th>Total Price</th>
    <th>${totalPrice}</th>
    `;
    tableBody.appendChild(tableRow);

}

// Add product to cart
function addToCart(element){
    // Fetch the product name
    const productName = element.parentNode.parentNode.children[0].innerText;
    
    // Fetch the product price
    const productPrice = element.parentNode.parentNode.children[1].children[0].innerText;
    
    // Create an object and add product name and price
    const productObj = {
        productName: productName,
        productPrice: parseFloat(productPrice)
    }
    
    // Add product list into the empty array
    cartList.push(productObj);

    // Show purchase products length
    document.getElementById('count-products').innerText = cartList.length;

    //
    displayInList(cartList);
}