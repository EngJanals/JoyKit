class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: white;
          color: #4B5563;
          padding: 3rem 1.5rem;
          text-align: center;
          border-top: 1px solid #E5E7EB;
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          text-align: left;
        }
        .footer-logo {
          font-family: 'Rubik', sans-serif;
          font-weight: 700;
          font-size: 1.5rem;
          background: linear-gradient(to right, #8B5CF6, #6366F1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1rem;
          display: inline-block;
        }
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-links li {
          margin-bottom: 0.75rem;
        }
        .footer-links a {
          color: #4B5563;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-links a:hover {
          color: #8B5CF6;
        }
        .social-links {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-top: 2rem;
        }
        .social-links a {
          color: #8B5CF6;
          background: #EDE9FE;
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }
        .social-links a:hover {
          background: #8B5CF6;
          color: white;
        }
        .copyright {
          margin-top: 2rem;
          color: #9CA3AF;
          font-size: 0.875rem;
        }
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            text-align: center;
          }
        }
      </style>
      <footer>
        <div class="footer-content">
          <div>
            <div class="footer-logo">HobbyBox</div>
            <p>Monthly mystery hobby kits for curious minds aged 10-20.</p>
          </div>
          <div>
            <h3>Explore</h3>
            <ul class="footer-links">
              <li><a href="#">How It Works</a></li>
              <li><a href="#">Past Boxes</a></li>
              <li><a href="#">Testimonials</a></li>
            </ul>
          </div>
          <div>
            <h3>Company</h3>
            <ul class="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3>Legal</h3>
            <ul class="footer-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Refund Policy</a></li>
            </ul>
          </div>
        </div>
        <div class="social-links">
          <a href="#"><i data-feather="instagram"></i></a>
          <a href="#"><i data-feather="twitter"></i></a>
          <a href="#"><i data-feather="facebook"></i></a>
          <a href="#"><i data-feather="youtube"></i></a>
        </div>
        <div class="copyright">
          &copy; ${new Date().getFullYear()} HobbyBox. All rights reserved.
        </div>
      </footer>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);