class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: white;
          padding: 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          position: sticky;
          top: 0;
          z-index: 100;
        }
        .logo {
          font-family: 'Rubik', sans-serif;
          font-weight: 700;
          font-size: 1.5rem;
          background: linear-gradient(to right, #8B5CF6, #6366F1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .nav-links {
          display: flex;
          gap: 1.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        a {
          color: #4B5563;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }
        a:hover {
          color: #8B5CF6;
        }
        .cta {
          background: linear-gradient(to right, #8B5CF6, #6366F1);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          font-weight: 600;
        }
        .cta:hover {
          opacity: 0.9;
          color: white;
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
        }
      </style>
      <nav>
        <div class="logo">HobbyBox</div>
        <ul class="nav-links">
          <li><a href="#"><i data-feather="box"></i> How It Works</a></li>
          <li><a href="#"><i data-feather="clipboard"></i> Survey</a></li>
          <li><a href="#" class="cta"><i data-feather="mail"></i> Join Beta</a></li>
        </ul>
      </nav>
    `;
  }
}
customElements.define('custom-navbar', CustomNavbar);