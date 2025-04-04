//HW 6
/*
import { test } from './functions.js';

test();
*/ //import Handlebars, { log } from "handlebars";
const input = document.getElementById("bookmarkInput");
const addBtn = document.getElementById("addBookmarkBtn");
const list = document.getElementById("bookmarkList");
let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
function renderBookmarks() {
    list.innerHTML = "";
    bookmarks.forEach((url, index)=>{
        const li = document.createElement("li");
        li.innerHTML = `
      <a href="${url}" target="_blank">${url}</a>
      <button onclick="deleteBookmark(${index})">X</button>
    `;
        list.appendChild(li);
    });
}
addBtn.addEventListener("click", ()=>{
    const url = input.value.trim();
    if (!url) return;
    bookmarks.push(url);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    input.value = "";
    renderBookmarks();
});
function deleteBookmark(index) {
    bookmarks.splice(index, 1);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    renderBookmarks();
}
renderBookmarks();

//# sourceMappingURL=FD-HW-6-7.e4607cda.js.map
