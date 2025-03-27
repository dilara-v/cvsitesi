"use client"

import { useState } from "react"
import "./example.css"

// Örnek şablon verisi
const templates = [
                {
                                id: 1,
                                title: "Modern CV Şablonu",
                                description: "Modern ve şık bir tasarım, profesyonel iş başvuruları için ideal.",
                                category: "Modern",
                                tags: ["modern", "profesyonel", "temiz"],
                                image: "/assets/arkaplan.jpg", // Assets klasöründen gerçek resim
                },
                {
                                id: 2,
                                title: "Kreatif CV Şablonu",
                                description: "Yaratıcı meslekler için renkli ve dikkat çekici bir tasarım.",
                                category: "Kreatif",
                                tags: ["kreatif", "renkli", "tasarım"],
                                image: "https://via.placeholder.com/300x400.png?text=Kreatif+CV",
                },
                {
                                id: 3,
                                title: "Minimalist CV Şablonu",
                                description: "Sade ve minimalist bir tasarım, her sektöre uygun.",
                                category: "Minimalist",
                                tags: ["minimalist", "sade", "profesyonel"],
                                image: "https://via.placeholder.com/300x400.png?text=Minimalist+CV",
                },
                {
                                id: 4,
                                title: "Kurumsal CV Şablonu",
                                description: "Kurumsal iş başvuruları için resmi ve profesyonel bir tasarımı.",
                                category: "Kurumsal",
                                tags: ["kurumsal", "resmi", "profesyonel"],
                                image: "https://via.placeholder.com/300x400.png?text=Kurumsal+CV",
                },
]

const Example = () => {
                const [searchTerm, setSearchTerm] = useState("")
                const [isModalOpen, setIsModalOpen] = useState(false) // Modal açık/kapalı durumu
                const [selectedTemplate, setSelectedTemplate] = useState(null) // Seçilen şablon

                // Arama terimine göre şablonları filtreleme
                const filteredTemplates = templates.filter((template) => {
                                const searchLower = searchTerm.toLowerCase()
                                return (
                                                template.title.toLowerCase().includes(searchLower) ||
                                                template.description.toLowerCase().includes(searchLower) ||
                                                template.category.toLowerCase().includes(searchLower) ||
                                                template.tags.some((tag) => tag.toLowerCase().includes(searchLower))
                                )
                })

                const handleSearch = (e) => {
                                setSearchTerm(e.target.value)
                }

                // Şablonu Görüntüle butonuna tıklandığında modalı aç
                const handleViewTemplate = (template) => {
                                setSelectedTemplate(template)
                                setIsModalOpen(true)
                }

                // Modalı kapat
                const handleCloseModal = () => {
                                setIsModalOpen(false)
                                setSelectedTemplate(null)
                }

                return (
                                <div className="template-search-page">
                                                {/* Arama Çubuğu */}
                                                <form action="#" className="search" onSubmit={(e) => e.preventDefault()}>
                                                                <button className="search__button">
                                                                                <div className="search__icon">
                                                                                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                                                                                                <title>magnifying-glass</title>
                                                                                                                <path d="M17.545 15.467l-3.779-3.779c0.57-0.935 0.898-2.035 0.898-3.21 0-3.417-2.961-6.377-6.378-6.377s-6.186 2.769-6.186 6.186c0 3.416 2.961 6.377 6.377 6.377 1.137 0 2.2-0.309 3.115-0.844l3.799 3.801c0.372 0.371 0.975 0.371 1.346 0l0.943-0.943c0.371-0.371 0.236-0.84-0.135-1.211zM4.004 8.287c0-2.366 1.917-4.283 4.282-4.283s4.474 2.107 4.474 4.474c0 2.365-1.918 4.283-4.283 4.283s-4.473-2.109-4.473-4.474z"></path>
                                                                                                </svg>
                                                                                </div>
                                                                </button>
                                                                <input
                                                                                type="text"
                                                                                className="search__input"
                                                                                placeholder="Search..."
                                                                                value={searchTerm}
                                                                                onChange={handleSearch}
                                                                />
                                                                <button className="mic__button">
                                                                                <div className="mic__icon">
                                                                                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 83.44 122.88">
                                                                                                                <g>
                                                                                                                                <path d="M45.04,95.45v24.11c0,1.83-1.49,3.32-3.32,3.32c-1.83,0-3.32-1.49-3.32-3.32V95.45c-10.16-0.81-19.32-5.3-26.14-12.12 C4.69,75.77,0,65.34,0,53.87c0-1.83,1.49-3.32,3.32-3.32s3.32,1.49,3.32,3.32c0,9.64,3.95,18.41,10.31,24.77 c6.36,6.36,15.13,10.31,24.77,10.31h0c9.64,0,18.41-3.95,24.77-10.31c6.36-6.36,10.31-15.13,10.31-24.77 c0-1.83,1.49-3.32,3.32-3.32s3.32,1.49,3.32,3.32c0,11.48-4.69,21.91-12.25,29.47C64.36,90.16,55.2,94.64,45.04,95.45L45.04,95.45z M41.94,0c6.38,0,12.18,2.61,16.38,6.81c4.2,4.2,6.81,10,6.81,16.38v30c0,6.38-2.61,12.18-6.81,16.38c-4.2,4.2-10,6.81-16.38,6.81 s-12.18-2.61-16.38-6.81c-4.2-4.2-6.81-10-6.81-16.38v-30c0-6.38,2.61-12.18,6.81-16.38C29.76,2.61,35.56,0,41.94,0L41.94,0z M53.62,11.51c-3-3-7.14-4.86-11.68-4.86c-4.55,0-8.68,1.86-11.68,4.86c-3-3-4.86-7.14-4.86-11.68v30c0,4.55,1.86,8.68,4.86,11.68 c3,3,7.14,4.86,11.68,4.86c4.55,0,8.68-1.86,11.68-4.86c3-3,4.86-7.14,4.86-11.68v-30C58.49,18.64,56.62,14.51,53.62,11.51 L53.62,11.51z"></path>
                                                                                                                </g>
                                                                                                </svg>
                                                                                </div>
                                                                </button>
                                                                <button className="picture__button">
                                                                                <div className="picture__icon">
                                                                                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 122.88 101.28">
                                                                                                                <g>
                                                                                                                                <path d="M28.94,12.53V4.77c0-1.31,0.54-2.51,1.4-3.37C31.2,0.54,32.39,0,33.7,0h55.47c1.31,0,2.51,0.54,3.37,1.4 c0.86,0.86,1.4,2.06,1.4,3.37v7.77h25.23c1.02,0,1.95,0.42,2.62,1.09c0.67,0.67,1.09,1.6,1.09,2.62v15.73v50.94v14.67 c0,1.02-0.42,1.95-1.09,2.62c-0.67,0.67-1.6,1.09-2.62,1.09H3.7c-1.02,0-1.95-0.42-2.62-1.09C0.42,99.52,0,98.6,0,97.58V82.91 V31.97V16.24c0-1.02,0.42-1.95,1.09-2.62c0.67-0.67,1.6-1.09,2.62-1.09H28.94L28.94,12.53z M61.9,32.86 c12.98,0,23.5,10.52,23.5,23.5c0,1.82-0.21,3.59-0.6,5.29c-0.95,4.68-3.26,8.86-6.51,12.11c-4.31,4.31-10.27,6.98-16.85,6.98 c-6.58,0-12.54-2.67-16.85-6.98c-4.31-4.31-6.98-10.27-6.98-16.85c0-6.58,2.67-12.54,6.98-16.85c2.37-2.37,5.24-4.24,8.43-5.45 C55.76,33.48,58.76,32.86,61.9,32.86L61.9,32.86z M31.54,4.77v7.77h59.8V4.77c0-0.59-0.24-1.14-0.64-1.53 c-0.39-0.39-0.93-0.64-1.53-0.64H33.7c-0.59,0-1.14,0.24-1.53,0.64C31.78,3.63,31.54,4.17,31.54,4.77L31.54,4.77z M2.6,81.61h36.3 c-0.38-0.34-0.75-0.7-1.11-1.06C31.75,74.5,28,66.14,28,56.91c0-9.23,3.74-17.58,9.79-23.63H2.6V81.61L2.6,81.61z M42.14,84.21H2.6 v13.37c0,0.3,0.12,0.58,0.32,0.77c0.2,0.2,0.47,0.32,0.78,0.32h115.48c0.3,0,0.58-0.12,0.77-0.32c0.2-0.2,0.32-0.47,0.32-0.77 V84.21H80.74c-5.45,3.86-12.11,6.13-19.3,6.13C54.25,90.34,47.59,88.07,42.14,84.21L42.14,84.21z M43.26,81.81 c0.04,0.03,0.08,0.05,0.12,0.08c5.08,3.68,11.32,5.84,18.06,5.84s12.99-2.17,18.06-5.84c0.04-0.03,0.08-0.06,0.12-0.08 c1.29-0.94,2.5-1.98,3.62-3.1c5.58-5.58,9.03-13.29,9.03-21.8c0-8.51-3.45-16.22-9.03-21.8c-0.73-0.73-1.5-1.43-2.31-2.09 c-0.03-0.02-0.06-0.05-0.09-0.07c-5.3-4.3-12.05-6.87-19.4-6.87c-7.35,0-14.1,2.57-19.4,6.87c-0.03,0.03-0.06,0.05-0.09,0.07 c-0.8,0.66-1.58,1.35-2.31,2.09c-5.58,5.58-9.03,13.29-9.03,21.8c0,8.51,3.45,16.22,9.03,21.8C40.76,79.83,41.97,80.87,43.26,81.81 L43.26,81.81z M83.98,81.61h36.3V33.27H85.09c6.05,6.05,9.79,14.41,9.79,23.63c0,9.23-3.74,17.59-9.8,23.64 C84.72,80.91,84.35,81.26,83.98,81.61L83.98,81.61z M2.6,30.67h38.11c5.7-4.51,12.9-7.2,20.73-7.2s15.03,2.69,20.73,7.2h38.11 V16.24c0-0.3-0.12-0.58-0.32-0.77c-0.2-0.2-0.47-0.32-0.77-0.32H3.7c-0.3,0-0.58,0.12-0.78,0.32c-0.2,0.2-0.32,0.47-0.32,0.77 V30.67L2.6,30.67z"></path>
                                                                                                                </g>
                                                                                                </svg>
                                                                                </div>
                                                                </button>
                                                </form>

                                                {/* Filtrelenmiş Şablonları Listeleme */}
                                                <div className="template-list">
                                                                <h2>CV Şablonları</h2>
                                                                {filteredTemplates.length > 0 ? (
                                                                                <div className="template-grid">
                                                                                                {filteredTemplates.map((template) => (
                                                                                                                <div key={template.id} className="template-card">
                                                                                                                                <div className="template-image">
                                                                                                                                                <img src={template.image || "/placeholder.svg"} alt={template.title} />
                                                                                                                                </div>
                                                                                                                                <div className="template-content">
                                                                                                                                                <h3>{template.title}</h3>
                                                                                                                                                <p>{template.description}</p>
                                                                                                                                                <p>
                                                                                                                                                                <strong>Kategori:</strong> {template.category}
                                                                                                                                                </p>
                                                                                                                                                <p>
                                                                                                                                                                <strong>Etiketler:</strong> {template.tags.join(", ")}
                                                                                                                                                </p>
                                                                                                                                                <button className="view-template-btn" onClick={() => handleViewTemplate(template)}>
                                                                                                                                                                Şablonu Görüntüle
                                                                                                                                                </button>
                                                                                                                                </div>
                                                                                                                </div>
                                                                                                ))}
                                                                                </div>
                                                                ) : (
                                                                                <p className="no-results">Aradığınız kriterlere uygun şablon bulunamadı.</p>
                                                                )}
                                                </div>

                                                {/* Modal */}
                                                {isModalOpen && selectedTemplate && (
                                                                <div className="modal-overlay">
                                                                                <div className="modal-content">
                                                                                                <div className="modal-header">
                                                                                                                <h3>{selectedTemplate.title}</h3>
                                                                                                                <button className="close-modal-btn" onClick={handleCloseModal}>
                                                                                                                                ✕
                                                                                                                </button>
                                                                                                </div>
                                                                                                <div className="modal-body">
                                                                                                                <img
                                                                                                                                src={selectedTemplate.image || "/placeholder.svg"}
                                                                                                                                alt={selectedTemplate.title}
                                                                                                                                className="template-preview"
                                                                                                                />
                                                                                                </div>
                                                                                                <div className="modal-footer">
                                                                                                                <button className="close-btn" onClick={handleCloseModal}>
                                                                                                                                Kapat
                                                                                                                </button>
                                                                                                                <button className="use-template-btn">Bu Şablonu Kullan</button>
                                                                                                </div>
                                                                                </div>
                                                                </div>
                                                )}
                                </div>
                )
}

export default Example

