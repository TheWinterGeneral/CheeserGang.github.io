document.addEventListener('DOMContentLoaded', function () {
    var faqsSection = document.getElementById('faqs');
    var sidebar = document.getElementById("sidebar");

    document.querySelector('nav ul li a').addEventListener('click', function (event) {
        event.preventDefault();
        faqsSection.style.display = faqsSection.style.display === 'none' ? 'block' : 'none';

    });

	
});
a

function toggleSidebar() {
	if (sidebar.style.left === "0px") {
		sidebar.style.left = "-250px";
	} else {
		sidebar.style.left = "0px";
	}
}