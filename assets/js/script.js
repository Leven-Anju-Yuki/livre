document.addEventListener('DOMContentLoaded', function () {
    const bookForm = document.getElementById('bookForm');
    const cartList = document.getElementById('cartList');

    bookForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Récupérer les données saisies dans le formulaire
        const title = document.getElementById('bookTitle').value;
        const author = document.getElementById('bookAuthor').value;
        const description = document.getElementById('bookDescription').value;

        // Créer un nouvel élément <li> avec les détails du livre
        const newBook = document.createElement('li');
        newBook.innerHTML = `<p><b>titre du livre </b><br>${title}<br><b>non de l'auteur</b> <br>${author}<br> <b>ca description</b> <br>${description}</p>`;

        // Ajouter ce nouvel élément à la liste des livres
        cartList.appendChild(newBook);

        // Réinitialiser le formulaire
        bookForm.reset();
    });
});
