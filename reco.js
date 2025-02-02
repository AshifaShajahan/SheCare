let previousSearches = [];
    const products = [
        { name: "Organic Cotton Pads", price: 30 * 83, link: "https://www.amazon.in/dp/B09G5YNNH1", website: "Amazon", image: "https://via.placeholder.com/100x100?text=Organic+Cotton+Pads", type: "Pads", brand: "Store A" },
        { name: "Reusable Menstrual Cup", price: 45 * 83, link: "https://www.nykaa.com/search/result/?q=menstrual+cup", website: "Nykaa", image: "https://via.placeholder.com/100x100?text=Menstrual+Cup", type: "Menstrual Cup", brand: "Store B" },
        { name: "Period Underwear", price: 50 * 83, link: "https://www.zivame.com/period-panties.html", website: "Zivame", image: "https://via.placeholder.com/100x100?text=Period+Underwear", type: "Underwear", brand: "Store C" },
        { name: "Tampons (Unscented)", price: 20 * 83, link: "https://www.flipkart.com/search?q=tampons", website: "Flipkart", image: "https://via.placeholder.com/100x100?text=Tampons", type: "Tampons", brand: "Store D" }
    ];
    
    document.getElementById("search-button").addEventListener("click", function() {
        const query = document.getElementById("search-box").value;
        if (query) {
            previousSearches.push(query);
            updatePreviousSearches();
        }
    });

    document.getElementById("priceRange").addEventListener("input", function() {
        document.getElementById("price-value").textContent = this.value * 83;
        filterProducts();
    });

    document.getElementById("filter-button").addEventListener("click", function() {
        const filterOptionsDiv = document.getElementById("filter-options");
        filterOptionsDiv.style.display = filterOptionsDiv.style.display === "none" ? "block" : "none";
    });

    function updatePreviousSearches() {
        const list = document.getElementById("previous-searches");
        list.innerHTML = "";
        previousSearches.forEach(search => {
            const li = document.createElement("li");
            li.textContent = search;
            list.appendChild(li);
        });
    }

    function filterProducts() {
        const maxPrice = document.getElementById("priceRange").value * 83;
        const selectedType = document.getElementById("product-type").value;
        const selectedBrand = document.getElementById("product-brand").value;
        
        const recommendationsDiv = document.getElementById("recommendations");
        recommendationsDiv.innerHTML = "";

        products.filter(p => 
            p.price <= maxPrice && 
            (!selectedType || p.type === selectedType) && 
            (!selectedBrand || p.brand === selectedBrand)
        ).forEach(product => {
            const productDiv = document.createElement("div");
            productDiv.className = "product";
            productDiv.innerHTML = `<img src="${product.image}" alt="${product.name}">
                                    <strong>${product.name}</strong><br>Price: ₹${product.price}<br>Website: ${product.website} 
                                    <a href="${product.link}" target="_blank">Buy Now</a>`;
            recommendationsDiv.appendChild(productDiv);
        });
    }

    filterProducts();