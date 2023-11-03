import Links  from './links.js';

export default function Header() {
    const header = document.getElementById('header');
    const headerHTML = `
    <nav class="d-flex justify-content-between container p-3">
        <a href="${Links().home.url}">Home</a>

        <ul class="d-flex gap-2 list-unstyled m-0">
        ${Links().nav.map(link => `
            <li><a href="/${link.url}">${link.name}</a></li>
        `).join('')}
        </ul>
    </nav>
    `;

    header.innerHTML = headerHTML;
}
