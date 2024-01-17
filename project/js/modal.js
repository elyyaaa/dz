// MODEL

const modal= document.querySelector(".modal");
const modalTriggerButton = document.querySelector("#btn-get");
const modalCloseButton = document.querySelector(".modal_close");
let isModalShown = false;
const openModal = () => {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
};

const closeModal = () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
};

const showModalOnScrollEnd = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= documentHeight && !isModalShown) {
        openModal();
        isModalShown = true;
        window.removeEventListener("scroll", showModalOnScrollEnd);
    }
};

modalTriggerButton.onclick = () => openModal();
modalCloseButton.onclick = () => closeModal();

modal.onclick = (event) => {
    if (event.target === modal) {
        closeModal();
    }
};
window.addEventListener("scroll", showModalOnScrollEnd);
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        openModal();
    }, 10000);
});