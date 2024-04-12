import './CompanyPage.css';

function CompanyPage() {
  return (
    <div className="company-page-container">
      <section className="about-section">
        <h2>About Sumazon</h2>
        <p>Sumazon is a leading online retailer, offering a wide range of products to customers worldwide. Founded in [year], we strive to provide the best shopping experience and highest quality products.</p>
      </section>
      <section className="news-section">
        <h2>News</h2>
        <p>Stay updated with the latest news and announcements from Sumazon.</p>
        <ul>
          <li>Recent News 1</li>
          <li>Recent News 2</li>
          <li>Recent News 3</li>
        </ul>
      </section>
      <section className="careers-section">
        <h2>Careers</h2>
        <p>Join our team! Explore career opportunities at Sumazon and be part of our innovative and dynamic workforce.</p>
        <a href="/careers">View Open Positions</a>
      </section>
      <section className="investors-section">
        <h2>Investors</h2>
        <p>Learn more about Sumazons financial performance and information for investors.</p>
        <a href="/investors">Investor Relations</a>
      </section>
      <section className="purpose-section">
        <h2>Purpose</h2>
        <p>At Sumazon, our purpose is to [purpose statement]. We are committed to [commitment statement].</p>
      </section>
      <section className="sustainability-section">
        <h2>Sustainability</h2>
        <p>Discover how Sumazon is working towards sustainability and environmental responsibility.</p>
        <a href="/sustainability">Learn More</a>
      </section>
    </div>
  );
}

export default CompanyPage;
