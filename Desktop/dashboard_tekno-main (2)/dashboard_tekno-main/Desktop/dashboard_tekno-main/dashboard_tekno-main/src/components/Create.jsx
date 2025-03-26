"use client"

import { useState } from "react"
import jsPDF from "jspdf"
import roboto from "./fonts/roboto-normal";
import "../Styles/Create.css"
import { Phone, MapPin, Mail, Briefcase, GraduationCap, Award } from "lucide-react"

const Create = () => {
  const [formData, setFormData] = useState({
    profilePhoto: null,
    firstName: "",
    lastName: "",
    title: "",
    phone: "",
    location: "",
    email: "",
    education: "",
    experience: "",
    skills: "",
    languages: "",
    about: "",
    color: "#3b4a6b", // Varsayılan kenar çubuğu rengi
  })

  const [step, setStep] = useState(1)
  const [isGenerating, setIsGenerating] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handlePhotoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setFormData({
          ...formData,
          profilePhoto: event.target.result,
        })
      }
      reader.readAsDataURL(e.target.files[0])
    }
  }

  const handleColorChange = (e) => {
    setFormData({
      ...formData,
      color: e.target.value,
    })
  }

  const handleNextStep = (e) => {
    e.preventDefault()
    setStep(step + 1)
  }

  const handlePrevStep = (e) => {
    e.preventDefault()
    setStep(step - 1)
  }

  const generateCV = async () => {
    setIsGenerating(true)

    try {
      const doc = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      })
      
      // Türkçe karakter desteği için fontu tanımla
      doc.addFileToVFS("Roboto.ttf", roboto)
      doc.addFont("Roboto.ttf", "Roboto", "normal")
      doc.setFont("Roboto")
      

      // Kenar çubuğu
      doc.setFillColor(formData.color)
      doc.rect(0, 0, 60, 297, "F")

      // İsim baş harfleri
      doc.setFontSize(24)
      doc.setTextColor(255, 255, 255)
      doc.text(formData.firstName.charAt(0) + formData.lastName.charAt(0), 30, 25, { align: "center" })

      // DIGITAL yazısı
      doc.setFontSize(12)
      doc.text(formData.title.toUpperCase(), 30, 35, { align: "center" })

      // İletişim bilgileri
      doc.setFontSize(9)
      doc.text(formData.phone, 30, 60, { align: "center" })
      doc.text(formData.location, 30, 70, { align: "center" })
      doc.text(formData.email, 30, 80, { align: "center" })

      // Ana içerik alanı
      doc.setTextColor(0, 0, 0)
      doc.setFontSize(18)
      doc.text(`${formData.firstName} ${formData.lastName}`, 70, 30)

      doc.setFontSize(12)
      doc.text(formData.title, 70, 40)

      // Hakkında
      if (formData.about) {
        doc.setFontSize(14)
        doc.text("Hakkında", 70, 60)
        doc.setFontSize(10)
        const aboutLines = doc.splitTextToSize(formData.about, 130)
        doc.text(aboutLines, 70, 70)
      }

      // Eğitim
      let yPos = formData.about ? 70 + doc.splitTextToSize(formData.about, 130).length * 5 + 10 : 70

      if (formData.education) {
        doc.setFontSize(14)
        doc.text("Eğitim", 70, yPos)
        doc.setFontSize(10)
        const educationLines = doc.splitTextToSize(formData.education, 130)
        doc.text(educationLines, 70, yPos + 10)
        yPos += educationLines.length * 5 + 20
      }

      // İş Deneyimi
      if (formData.experience) {
        doc.setFontSize(14)
        doc.text("İş Deneyimi", 70, yPos)
        doc.setFontSize(10)
        const experienceLines = doc.splitTextToSize(formData.experience, 130)
        doc.text(experienceLines, 70, yPos + 10)
        yPos += experienceLines.length * 5 + 20
      }

      // Yetenekler
      if (formData.skills) {
        doc.setFontSize(14)
        doc.text("Yetenekler", 70, yPos)
        doc.setFontSize(10)
        const skillsLines = doc.splitTextToSize(formData.skills, 130)
        doc.text(skillsLines, 70, yPos + 10)
        yPos += skillsLines.length * 5 + 20
      }

      // Diller
      if (formData.languages) {
        doc.setFontSize(14)
        doc.text("Diller", 70, yPos)
        doc.setFontSize(10)
        const languagesLines = doc.splitTextToSize(formData.languages, 130)
        doc.text(languagesLines, 70, yPos + 10)
      }

      // Profil fotoğrafı
      if (formData.profilePhoto) {
        try {
          doc.addImage(formData.profilePhoto, "JPEG", 150, 15, 40, 40, undefined, "FAST")
        } catch (error) {
          console.error("Profil fotoğrafı eklenirken hata oluştu:", error)
        }
      }

      // PDF'i indir
      doc.save(`${formData.firstName}_${formData.lastName}_CV.pdf`)
    } catch (error) {
      console.error("PDF oluşturma hatası:", error)
      alert("CV oluşturulurken bir hata oluştu. Lütfen tekrar deneyin.")
    }

    setIsGenerating(false)
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <form className="form" onSubmit={handleNextStep}>
            <h2 className="form-title">Kişisel Bilgiler</h2>
            <div className="form-grid">
              {/* Profil Fotoğrafı */}
              <div>
                <div className="photo-container">
                  {formData.profilePhoto ? (
                    <img
                      src={formData.profilePhoto || "/placeholder.svg"}
                      alt="Profil Fotoğrafı"
                      className="photo-preview"
                    />
                  ) : (
                    <label className="photo-label">
                      <div>profil fotoğrafı</div>
                      <input type="file" accept="image/*" className="photo-input" onChange={handlePhotoChange} />
                    </label>
                  )}
                </div>
              </div>

              {/* İsim ve Soyisim */}
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="isim"
                  className="input"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
                <div className="spacer"></div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="soyisim"
                  className="input"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Ünvan */}
              <div className="full-width">
                <input
                  type="text"
                  name="title"
                  placeholder="ünvan (örn: Yazılım Geliştirici)"
                  className="input"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Telefon */}
              <div>
                <div className="input-with-icon">
                  <Phone size={16} />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="telefon numarası"
                    className="input"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              {/* Konum */}
              <div>
                <div className="input-with-icon">
                  <MapPin size={16} />
                  <input
                    type="text"
                    name="location"
                    placeholder="konum"
                    className="input"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              {/* E-posta */}
              <div className="full-width">
                <div className="input-with-icon">
                  <Mail size={16} />
                  <input
                    type="email"
                    name="email"
                    placeholder="e-posta adresi"
                    className="input"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              {/* Şablon Rengi */}
              <div className="full-width">
                <label className="label">Şablon Rengi</label>
                <div className="color-picker">
                  <input type="color" value={formData.color} onChange={handleColorChange} className="color-input" />
                  <span className="color-value">{formData.color}</span>
                </div>
              </div>
            </div>

            <div className="button-container">
              <button type="submit" className="button primary">
                Sonraki Adım
              </button>
            </div>
          </form>
        )

      case 2:
        return (
          <form className="form" onSubmit={handleNextStep}>
            <h2 className="form-title">Hakkında</h2>
            <div className="form-section">
              <textarea
                name="about"
                placeholder="Kendiniz hakkında kısa bir açıklama yazın"
                className="textarea"
                value={formData.about}
                onChange={handleInputChange}
                rows={6}
              ></textarea>
            </div>

            <div className="button-group">
              <button type="button" className="button secondary" onClick={handlePrevStep}>
                Geri Dön
              </button>

              <button type="submit" className="button primary">
                Sonraki Adım
              </button>
            </div>
          </form>
        )

      case 3:
        return (
          <form className="form" onSubmit={handleNextStep}>
            <h2 className="form-title">Eğitim</h2>
            <div className="form-section">
              <div className="section-icon">
                <GraduationCap size={24} />
              </div>
              <textarea
                name="education"
                placeholder="Eğitim bilgilerinizi girin (okul, bölüm, yıl)"
                className="textarea"
                value={formData.education}
                onChange={handleInputChange}
                rows={6}
              ></textarea>
            </div>

            <div className="button-group">
              <button type="button" className="button secondary" onClick={handlePrevStep}>
                Geri Dön
              </button>

              <button type="submit" className="button primary">
                Sonraki Adım
              </button>
            </div>
          </form>
        )

      case 4:
        return (
          <form className="form" onSubmit={handleNextStep}>
            <h2 className="form-title">İş Deneyimi</h2>
            <div className="form-section">
              <div className="section-icon">
                <Briefcase size={24} />
              </div>
              <textarea
                name="experience"
                placeholder="İş deneyimlerinizi girin (şirket, pozisyon, yıl)"
                className="textarea"
                value={formData.experience}
                onChange={handleInputChange}
                rows={6}
              ></textarea>
            </div>

            <div className="button-group">
              <button type="button" className="button secondary" onClick={handlePrevStep}>
                Geri Dön
              </button>

              <button type="submit" className="button primary">
                Sonraki Adım
              </button>
            </div>
          </form>
        )

      case 5:
        return (
          <form className="form">
            <h2 className="form-title">Yetenekler ve Diller</h2>
            <div className="form-section">
              <div className="section-icon">
                <Award size={24} />
              </div>
              <label className="label">Yetenekler</label>
              <textarea
                name="skills"
                placeholder="Yeteneklerinizi girin (programlama dilleri, araçlar, vb.)"
                className="textarea"
                value={formData.skills}
                onChange={handleInputChange}
                rows={4}
              ></textarea>
            </div>

            <div className="form-section">
              <label className="label">Diller</label>
              <textarea
                name="languages"
                placeholder="Bildiğiniz dilleri ve seviyelerini girin (İngilizce - İleri, vb.)"
                className="textarea"
                value={formData.languages}
                onChange={handleInputChange}
                rows={4}
              ></textarea>
            </div>

            <div className="button-group">
              <button type="button" className="button secondary" onClick={handlePrevStep}>
                Geri Dön
              </button>

              <button type="button" className="button primary" onClick={generateCV} disabled={isGenerating}>
                {isGenerating ? "CV Oluşturuluyor..." : "CV Oluştur ve İndir"}
              </button>
            </div>
          </form>
        )

      default:
        return null
    }
  }

  return (
    <div className="create-page">
      <div className="form-container">
        <div className="steps-container">
          <div className="steps">
            <div className={`step ${step >= 1 ? "active" : ""}`}>
              <div className="step-number">1</div>
              <div className="step-text">Kişisel Bilgiler</div>
            </div>
            <div className={`step ${step >= 2 ? "active" : ""}`}>
              <div className="step-number">2</div>
              <div className="step-text">Hakkında</div>
            </div>
            <div className={`step ${step >= 3 ? "active" : ""}`}>
              <div className="step-number">3</div>
              <div className="step-text">Eğitim</div>
            </div>
            <div className={`step ${step >= 4 ? "active" : ""}`}>
              <div className="step-number">4</div>
              <div className="step-text">İş Deneyimi</div>
            </div>
            <div className={`step ${step >= 5 ? "active" : ""}`}>
              <div className="step-number">5</div>
              <div className="step-text">Yetenekler</div>
            </div>
          </div>
        </div>

        <div className="preview-container">
          <div className="cv-preview">
            <div className="cv-sidebar" style={{ backgroundColor: formData.color }}>
              <div className="cv-initials">
                {formData.firstName && formData.lastName
                  ? formData.firstName.charAt(0) + formData.lastName.charAt(0)
                  : "SS"}
              </div>
              <div className="cv-title">{formData.title ? formData.title.toUpperCase() : "DIGITAL"}</div>
              <div className="cv-contact">
                {formData.phone && (
                  <div className="cv-contact-item">
                    <Phone size={12} />
                    <span>{formData.phone}</span>
                  </div>
                )}
                {formData.location && (
                  <div className="cv-contact-item">
                    <MapPin size={12} />
                    <span>{formData.location}</span>
                  </div>
                )}
                {formData.email && (
                  <div className="cv-contact-item">
                    <Mail size={12} />
                    <span>{formData.email}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="cv-content">
              {formData.profilePhoto && (
                <img src={formData.profilePhoto || "/placeholder.svg"} alt="Profil" className="cv-profile-photo" />
              )}
              <h1 className="cv-name">
                {formData.firstName} {formData.lastName}
              </h1>
              <p className="cv-position">{formData.title}</p>
            </div>
          </div>
        </div>

        {renderStep()}
      </div>
    </div>
  )
}

export default Create

