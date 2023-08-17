
// let sum = 0;
// let appendCount = 0;
// function priceCalculate(event) {
//     const itemName = event.parentNode.parentNode.childNodes[1].innerText;

//     const ol = document.createElement('ol');
//     ol.innerText = itemName;
//     ol.classList.add('my-2', 'bg-red-400', 'py-3', 'px-2', 'text-white', 'text-2xl')
//     const itemsContainer = document.getElementById('product-list');

//     const price = parseInt(event.parentNode.childNodes[1].innerText.split(' ')[1]);
//     if (appendCount < 5) {
//         itemsContainer.appendChild(ol);
//         sum += price;

//         const total = document.getElementById('total');
//         total.innerText = sum;
//         const totalInNumber = parseInt(total.innerText);
//         const discount = (30 * totalInNumber) / 100;

//         const discountElement = document.getElementById('discount');
//         discountElement.innerText = discount;

//         const grandTotal = sum - discount;

//         const grand = document.getElementById('grand');
//         grand.innerText = grandTotal;
//         appendCount++
//     } else {
//         alert("Limit reached 5! ")
//     }
// }

let sum = 0;
let appendCount = 0;
const itemLimits = {}; // Object to track item counts

function priceCalculate(event) {
    const itemName = event.parentNode.parentNode.childNodes[1].innerText;

    // Check if item limit is reached
    if (itemLimits[itemName] === undefined || itemLimits[itemName] < 5) {
        const ol = document.createElement('ol');
        ol.innerText = itemName;
        ol.classList.add('my-2', 'bg-red-400', 'py-3', 'px-2', 'text-white', 'text-2xl')
        const itemsContainer = document.getElementById('product-list');

        const price = parseInt(event.parentNode.childNodes[1].innerText.split(' ')[1]);

        itemsContainer.appendChild(ol);
        sum += price;

        const total = document.getElementById('total');
        total.innerText = sum;
        const totalInNumber = parseInt(total.innerText);
        const discount = (30 * totalInNumber) / 100;

        const discountElement = document.getElementById('discount');
        discountElement.innerText = discount;

        const grandTotal = sum - discount;

        const grand = document.getElementById('grand');
        grand.innerText = grandTotal;

        // Update the item count in the object
        if (itemLimits[itemName] === undefined) {
            itemLimits[itemName] = 1;
        } else {
            itemLimits[itemName]++;
        }

        appendCount++;
    } else {
        alert(`You can't buy more than 5 ${itemName}`);
    }
}
