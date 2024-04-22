document.addEventListener('DOMContentLoaded', function () {
    var faqsSection = document.getElementById('faqs');
    

    document.querySelector('nav ul li a').addEventListener('click', function (event) {
        event.preventDefault();
        faqsSection.style.display = faqsSection.style.display === 'none' ? 'block' : 'none';
    });
});

console.log("Napoleonic is fat")


var sidebar = document.getElementById("sidebar");
function toggleSidebar() {
    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-250px";
    } else {
        sidebar.style.left = "0px";
    }
}
