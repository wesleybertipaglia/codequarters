var root = window.location.host

export default function Links() {
    const links = {
      home: { name: 'Home', url: `/index.html` },

      nav: 
      [
        { name: 'About', url: `${root}/pages/about.html` },
        { name: 'Contact', url: `${root}/pages/contact.html` },
        { name: 'Projects', url: `${root}/pages/projects.html` },
        { name: 'Blog', url: `${root}/blog` },
      ],

      footer: 
      [
        { name: 'Privacy Policy', url: 'pages/privacy-policy.html' },
        { name: 'Terms of Service', url: 'pages/terms-of-service.html' },
      ],          
    }

    return links;
}