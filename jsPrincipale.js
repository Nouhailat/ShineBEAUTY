document.addEventListener('DOMContentLoaded', function () {
    const formulaire = document.getElementById('commandeForm');
    const validerBtn = document.getElementById('validerBtn');
    const commandesTable = document.getElementById('commandesTable').querySelector('tbody');
    const produitsSelect = document.getElementById('produits');
    const prixUnitaireInput = document.getElementById('prixUnitaire');
    
    // Update the price input based on the selected product
    produitsSelect.addEventListener('change', function () {
        const selectedProduct = produitsSelect.selectedOptions[0];
        const price = selectedProduct.getAttribute('data-price');
        prixUnitaireInput.value = price; // Update price
    });
    
    validerBtn.addEventListener('click', function () {
        const nom = document.getElementById('nom').value;
        const prenom = document.getElementById('prenom').value;
        const address = document.getElementById('address').value;
        const produit = produitsSelect.value;
        const quantite = document.getElementById('quantite').value;
        const prixUnitaire = prixUnitaireInput.value;

        if (!nom || !prenom || !address || !produit || !quantite || !prixUnitaire) {
            alert('Veuillez remplir tous les champs.');
            return;
        }

        const prixTotal = parseFloat(prixUnitaire) * parseInt(quantite);
        const nouvelleLigne = document.createElement('tr');
        nouvelleLigne.innerHTML = `
            <td>${nom}</td>
            <td>${prenom}</td>
            <td>${address}</td>
            <td>${produit}</td>
            <td>${quantite}</td>
            <td>${prixTotal.toFixed(2)}</td>
        `;
        commandesTable.appendChild(nouvelleLigne);
        formulaire.reset();
        prixUnitaireInput.value = ''; // Reset the price field
    });
    
    // Product Click Event to Show Name and Price
    const productButtons = document.querySelectorAll('.product');
    
    productButtons.forEach(button => {
        button.addEventListener('click', function () {
            const productName = this.getAttribute('data-name');
            const productPrice = this.getAttribute('data-price');
            
            // Display selected product name and price
            document.getElementById('product-name').textContent = 'Name: ' + productName;
            document.getElementById('product-price').textContent = 'Price: $' + productPrice;
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const productCards = document.querySelectorAll('.card');
    
    // Add click event listener to each product card
    productCards.forEach(card => {
        const isAvailable = card.getAttribute('data-availability') === 'true';
        
        // If the product is available, allow the click event
        if (isAvailable) {
            card.addEventListener('click', function () {
                const productName = card.getAttribute('data-name');
                const productPrice = card.getAttribute('data-price');
                
                // Display product information (you can modify this to update any section of the page)
                alert(`Produit: ${productName}`);
            });
        } else {
            // If the product is unavailable, prevent clicking
            card.style.opacity = 0.5;  // Make the product card appear "disabled"
            card.style.pointerEvents = 'none';  // Disable clicking
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const availabilityText = card.querySelector('.card-availability').textContent;

        if (availabilityText.includes('Non')) {
            const title = card.querySelector('.card-title');
            title.classList.add('unavailable');
        }
    });
});
// pour conteure li kitzad 
document.addEventListener('DOMContentLoaded', function () {
    const quantiteInput = document.getElementById('quantite');
    const prixUnitaireInput = document.getElementById('prixUnitaire');
    const messageContainer = document.querySelector('.message-container');

    // Fonction pour calculer et afficher le prix total
    function updatePrixTotal() {
        const quantite = parseInt(quantiteInput.value) || 0; // Défaut à 0 si vide
        const prixUnitaire = parseFloat(prixUnitaireInput.value) || 0; // Défaut à 0 si vide
        const prixTotal = quantite * prixUnitaire;

        if (quantite > 0 && prixUnitaire > 0) {
            messageContainer.textContent = `Prix total : ${prixTotal.toFixed(2)} €`;
        } else {
            messageContainer.textContent = ''; // Efface le message si les champs sont invalides
        }
    }

    // Écouteurs d'événements sur les champs de quantité et de prix unitaire
    quantiteInput.addEventListener('input', updatePrixTotal);
    prixUnitaireInput.addEventListener('input', updatePrixTotal);
});
// localStoreg



