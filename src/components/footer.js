const footerTemplate = document.createElement('template')

footerTemplate.innerHTML = `
  <!-- bootstrap -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>

  <footer>
      <div id="footer-content" class="container mx-auto">
      <p>&copy; 2023 Made for fun 😎</p>
      </div>
  </footer>
`
class Footer extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' })

    shadowRoot.appendChild(footerTemplate.content)
  }
}

customElements.define('footer-component', Footer)