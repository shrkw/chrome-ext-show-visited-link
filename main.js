'use strict';

const links = document.querySelectorAll("body > main > article > div.l-searchResult > div.l-searchResult__list > div > a");
for (let l of links) {
    l.text = l.href;
}

const style = document.createElement("style");
style.textContent = 'a:visited {color: #609}';
document.body.appendChild(style);
