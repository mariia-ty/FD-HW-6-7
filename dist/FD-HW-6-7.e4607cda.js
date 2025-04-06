//HW 6
/*
import { test } from './functions.js';

test();
*/ //import Handlebars, { log } from "handlebars";
const input = document.getElementById("bookmarkInput");
const addBtn = document.getElementById("addBookmarkBtn");
const list = document.getElementById("bookmarkList");
let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
function addBm() {
    list.innerHTML = "";
    bookmarks.forEach((url, index)=>{
        const li = document.createElement("li");
        li.innerHTML = `
      <a href="${url}" target="_blank">${url}</a>
      <button onclick="deleteBm(${index})">X</button>
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
    addBm();
});
function deleteBm(index) {
    bookmarks.splice(index, 1);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    addBm();
}
addBm();
const save = document.getElementById("saveBtn2");
save.addEventListener("click", ()=>{
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);
});
window.addEventListener("load", ()=>{
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");
    if (savedUsername) document.getElementById("username").value = savedUsername;
    if (savedPassword) document.getElementById("password").value = savedPassword;
});

//# sourceMappingURL=FD-HW-6-7.e4607cda.js.map
