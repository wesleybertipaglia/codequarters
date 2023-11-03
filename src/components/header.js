export default function Header() {
    const header = document.getElementById("header")
    const headerHTML = `
    <nav id="header-content" class="d-flex justify-content-between container p-3">
        <a href="/index.html">Home</a>

        <ul class="d-flex gap-2 list-unstyled m-0">
            <li><a href="/pages/about.html">Aboout</a></li>
            <li><a href="/pages/contact.html">Contact</a></li>
            <li><a href="/pages/projects.html">Projects</a></li>
            <li><a href="/blog/">Blog</a></li>
        </ul>
    </nav>
    `
    header.innerHTML = headerHTML
}