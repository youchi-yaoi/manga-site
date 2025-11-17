let currentPage = 0;
const pages = document.querySelectorAll("#manga-reader img");

document.getElementById("next").addEventListener("click", () => {
    if (currentPage < pages.length - 1) {
        pages[currentPage].style.display = "none";
        currentPage++;
        pages[currentPage].style.display = "block";
    }
});

document.getElementById("prev").addEventListener("click", () => {
    if (currentPage > 0) {
        pages[currentPage].style.display = "none";
        currentPage--;
        pages[currentPage].style.display = "block";
    }
});

// إظهار أول صفحة فقط عند التحميل
pages.forEach((page, index) => page.style.display = index === 0 ? "block" : "none");

// الوضع الليلي
const darkModeToggle = document.getElementById("dark-mode-toggle");
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
