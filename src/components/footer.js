const footerTemplate = `
  <footer>
      <div id="footer-content" class="container mx-auto">
      <p>&copy; 2023 Made for fun 😎</p>
      </div>
  </footer>
`
class Footer extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = footerTemplate
  }
}

customElements.define('footer-component', Footer)