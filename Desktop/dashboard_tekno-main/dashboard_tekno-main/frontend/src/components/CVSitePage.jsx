// CVSitePage.js
import "../Styles/CVSitePage.css";
import CvsiteImage from "../assets/pembe.jpg"; // Görseli içe aktarıyoruz (isteğe bağlı)

function CVSitePage() {
  return (
    
    <div className="cv-site-page">
      <div className="overlay"></div> {/* Saydamlık için kaplama katmanı */}
      
      <button className="cta">
        
        <span>CV OLUŞTUR</span>
        <svg width="15px" height="10px" viewBox="0 0 13 10">
          
          <path d="M1,5 L11,5"></path>
          
          <polyline points="8 1 12 5 8 9"></polyline>
          

        </svg>
      </button>
     
    </div>
  );
}

export default CVSitePage;