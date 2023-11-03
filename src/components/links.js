export default function Links() {
    const links = {
        home: { name: 'Home', url: '/index.html' },

        nav: 
        [
          { name: 'About', url: 'pages/about.html' },
          { name: 'Contact', url: 'pages/contact.html' },
          { name: 'Projects', url: 'pages/projects.html' },
          { name: 'Blog', url: 'blog/' },
        ],

        footer: 
        [
          { name: 'Privacy Policy', url: 'pages/privacy-policy.html' },
          { name: 'Terms of Service', url: 'pages/terms-of-service.html' },
        ],          
    }

    return links;
}