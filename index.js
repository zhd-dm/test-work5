let popupContainer = document.querySelector('.popup-container');

let createShop = document.querySelector('.main-content-button');
createShop.addEventListener('click', () => {
    popupContainer.style.visibility = "visible";

});

let closePopup = document.querySelector('.popup-header-close');
closePopup.addEventListener('click', () => {
    popupContainer.style.visibility = "hidden";
});

let sidebarItems = document.querySelector('.sidebar-menu-list').children;

for (let i = 0; i < sidebarItems.length; i++) {
    sidebarItems[i].setAttribute('index', `${i}`);

    let sidebarItem = document.querySelector(`[index="${i}"] > .sidebar-item-hover`);

    sidebarItems[i].addEventListener('mouseenter', () => {
        sidebarItem.style.visibility = "visible";
    });

    sidebarItems[i].addEventListener('mouseleave', () => {
        sidebarItem.style.visibility = "hidden";
    });
};