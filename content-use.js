const contentUseLink = document.querySelector("[data-content-use]");
const contentUseDialog = document.querySelector(".du-content-use");

if (contentUseLink && contentUseDialog && typeof contentUseDialog.showModal === "function") {
    contentUseLink.setAttribute("aria-haspopup", "dialog");
    contentUseLink.addEventListener("click", (event) => {
        if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        contentUseDialog.showModal();
        event.preventDefault();
    });
    contentUseDialog.addEventListener("close", () => contentUseLink.focus());
}
