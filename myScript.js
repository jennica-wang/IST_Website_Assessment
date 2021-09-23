// When the open index button is clicked, the index will be shown, the close index button will be shown and the open index button will be hidden.
function openIndexClick() {
    document.getElementById("myIndexID").style.display = "inline";
    document.getElementById("closeIndex").style.display = "inline";
    document.getElementById("openIndex").style.display = "none";
}

// When the close index button is clicked, the index will be hidden, the close index button will be hidden and the open index button will be shown.
function closeIndexClick() {
    document.getElementById("myIndexID").style.display = "none";
    document.getElementById("closeIndex").style.display = "none";
    document.getElementById("openIndex").style.display = "inline";
}