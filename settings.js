function filterMenuItems() {
    const searchTerm = document.querySelector('.search-form-settings input').value.toLowerCase();
    const menuItemsOne = document.querySelectorAll('#menu-items-one .nav-item');
    const menuItemsTwo = document.querySelectorAll('#menu-items-two .nav-item');

    filterItems(menuItemsOne, searchTerm);
    filterItems(menuItemsTwo, searchTerm);
}

function filterItems(items, searchTerm) {
    items.forEach((item) => {
        const textElement = item.querySelector('.nav-item-text');
        const text = textElement.textContent.toLowerCase();

        if (text.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
