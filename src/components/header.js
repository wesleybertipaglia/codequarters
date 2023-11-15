const BASE_URL = window.location.origin

const links = {
  home: { name: 'Home', url: `${BASE_URL}/` },
  nav: 
  [
    { name: 'About', url: `${BASE_URL}/pages/about.html` },
    { name: 'Contact', url: `${BASE_URL}/pages/contact.html` },
    { name: 'Projects', url: `${BASE_URL}/pages/projects.html` },
    { name: 'Blog', url: `${BASE_URL}/blog` },
  ],        
}

const headerTemplate = `
  <header>
      <nav class="d-flex justify-content-between container p-3">
          <a href="${links.home.url}">Home</a>

          <ul class="d-flex gap-2 list-unstyled m-0">
          ${links.nav.map(link => `
              <li><a href="${link.url}">${link.name}</a></li>
          `).join('')}
          </ul>
      </nav>
  </header>
`

class Header extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = headerTemplate
  }
}

customElements.define('header-component', Header)