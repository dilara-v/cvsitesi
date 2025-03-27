import "./CVSitePage.css";
import arkaplan from "../../assets/arkaplan.jpg";

function CVSitePage() {
                return (
                                <div
                                                className="cv-site-page"
                                                style={{
                                                                backgroundImage: `url(${arkaplan})`,
                                                                backgroundSize: "cover",
                                                                backgroundPosition: "center",
                                                                height: "100vh", // Örnek bir yükseklik
                                                }}
                                >
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