const form = document.querySelector('.form'),
    about = document.querySelector('.about'),
    aside = document.querySelector('aside'),
    posts = document.querySelector('.posts');

if (window.outerWidth < '770') {
    posts.before(form);
    aside.remove();
    form.style.display = 'flex'
} else {
    form.style.display = 'block'
}

document.querySelector('body').onresize = () => {
    if (window.outerWidth < '770') {
        form.style.display = 'flex'
        posts.before(form);
        aside.remove();
    } else {
        form.style.display = 'block'
        posts.after(aside);
        about.after(form);
    }
}