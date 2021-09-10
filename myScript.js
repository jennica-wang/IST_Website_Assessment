function hideBannerClick() {
    document.getElementById("banner_img").style.opacity = "0%"
}

function openIndexClick() {
    document.getElementById("myIndexID").style.display = "inline";
    document.getElementById("closeIndex").style.display = "inline";
    document.getElementById("openIndex").style.display = "none";
}

function closeIndexClick() {
    document.getElementById("myIndexID").style.display = "none";
    document.getElementById("closeIndex").style.display = "none";
    document.getElementById("openIndex").style.display = "inline";
}

function openContentsClick() {
    document.getElementById("myContentsID").style.opacity = "100%";
}

function closeContentsClick() {
    document.getElementById("myContentsID").style.opacity = "10%";
}