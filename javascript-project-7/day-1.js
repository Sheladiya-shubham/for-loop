
let vuitton = document.getElementById('vuitton');
let louis = document.getElementById('louis');
let model = document.getElementById('model');
let fashion = document.getElementById('fashion');
let pname = document.getElementById('pname');
let pdes = document.getElementById('pdes');
let pcat = document.getElementById('pcat');
let pprice = document.getElementById('pprice');
let psize = document.getElementById('psize');
let button = document.getElementById('pbtn');
let backbtn = document.getElementById('backbtn');
let viewbtn = document.getElementById('viewbtn');
const pimage = document.getElementById('pimage');
const cardContainer = document.getElementById('card-container');

vuitton.addEventListener('click', () => {
    louis.style.display = 'none';
    fashion.style.display = 'block';
});

backbtn.addEventListener('click', () => {
    fashion.style.display = 'none';
    louis.style.display = 'block';
    model.style.display = 'block';
});

button.addEventListener('click', (e) => {
    e.preventDefault();  

    let imageFile = pimage.files[0];
    let imageURL = imageFile ? URL.createObjectURL(imageFile) : ''; 
    let product = {
        productname: pname.value,
        description: pdes.value,
        category: pcat.value,
        price: pprice.value,
        size: psize.value,
        image: imageURL,
    };

    let data = JSON.parse(localStorage.getItem("products")) || [];
    data.push(product); 
    localStorage.setItem("products", JSON.stringify(data));

    pname.value = "";
    pdes.value = "";
    pcat.value = "";
    pprice.value = "";
    psize.value = "";
    pimage.value = "";

    loadCards();
});

const loadCards = () => {
    const products = JSON.parse(localStorage.getItem('products')) || [];  
    cardContainer.innerHTML = ''; 

    products.forEach((product) => {
        const card = `
        <div class="card m-3" style="width: 18rem;">
            <img src="${product.image}" class="card-img-top" alt="Product Image">
            <div class="card-body">
                <h5 class="card-title">${product.productname}</h5>
                <p class="card-text">
                    <strong>Description:</strong> ${product.description}<br>
                    <strong>Category:</strong> ${product.category}<br>
                    <strong>Size:</strong> ${product.size}
                </p>
                <strong>Price:</strong> ${product.price}<br>
                 <button  class="btn btn-primary">ADD TO CART</button>
            </div>
        </div>
        `;
        cardContainer.innerHTML += card; 
    });
};
loadCards();






























