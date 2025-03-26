import "../Styles/Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="subscribe-row">
        <div className="container">
          <div className="footer-row-wrapper">
            <div className="footer-subscribe-wrapper">
              <div className="footer-subscribe">
                <div className="footer-subscribe-top">
                  <h5 className="subscribe-title">
                Daha fazla bilgi için e-postalarımızı alın.
                  </h5>
                  <p className="subscribe-desc">
                  email 
                  </p>
                </div>
                <div className="footer-subscribe-bottom">
                  <form>        
                    <input
                      type="text"
                      placeholder="Enter your email address."
                    />
                    <button className="btn">Gönder</button>
                  </form>
                         
                </div>
              </div>
            </div>
            <div className="footer-contact-wrapper">
              <div className="footer-contact-top">
                <h3 className="contact-title">
                  Bize Ulaşın? <br />
                  (+90) 123 456 78 90
                </h3>
             
              </div>
              <div className="footer-contact-bottom">
                <div className="download-app">
                  <a href="#">
                    <img src="img/footer/app-store.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="img/footer/google-play.png" alt="" />
                  </a>
                </div>
                <p className="privacy-text">
              İLETİŞİM İÇİN BİZE ULAŞIN
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      

    </footer>
  );
};

export default Footer;