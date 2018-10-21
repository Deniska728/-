let header = document.querySelector("header"),
      search = document.querySelector(".search"),
      icons = document.querySelector(".icons"),
      button = document.querySelector(".button"),
      nav = document.querySelector("nav");

document.querySelector("body").onresize = () => {
    if (window.outerWidth < '770'){
        search.remove();
        nav.remove(); 
    } else {
        icons.after(nav);
        nav.after(search);
    }
}

if (window.outerWidth < '770') {
    search.remove();
    nav.remove();
}

// const newNav = nav,
//       newSearch = search

// const navbar = document.createElement('div');
// navbar.classList.add('new-navbar');
// navbar.append(newNav);
// navbar.append(newSearch);


// button.onclick = () => {
//     header.after(navbar);
//     navbar.classList.toggle('toggle-open')
// }