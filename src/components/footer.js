export default function Footer() {
    const footer = document.getElementById("footer")
    const footerHTML = `
        <div id="footer-content" class="container mx-auto">
            <p>&copy; 2023 Made for fun 😎</p>
        </div>
    `
    footer.innerHTML = footerHTML
}