const links = {
  home: { name: 'Home', url: `/` },
  nav: 
  [
    { name: 'About', url: `pages/about.html` },
    { name: 'Contact', url: `pages/contact.html` },
    { name: 'Projects', url: `pages/projects.html` },
    { name: 'Blog', url: `blog` },
  ],        
}

const headerTemplate = document.createElement('template')
headerTemplate.innerHTML = `
  <!-- bootstrap -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>

  <header>
      <nav class="d-flex justify-content-between container p-3">
          <a href="${links.home.url}">Home</a>

          <ul class="d-flex gap-2 list-unstyled m-0">
          ${links.nav.map(link => `
              <li><a href="/${link.url}">${link.name}</a></li>
          `).join('')}
          </ul>
      </nav>
  </header>
`

class Header extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' })
    shadowRoot.appendChild(headerTemplate.content)
  }
}

customElements.define('header-component', Header)