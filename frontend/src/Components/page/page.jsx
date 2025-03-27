"use client"

import { useState } from "react"
import styles from "./auth.module.css"

export default function AuthPage() {
                const [isLogin, setIsLogin] = useState(true)

                return (
                                <div className={styles.container}>
                                                <div className={styles.formContainer}>
                                                                <div className={styles.tabs}>
                                                                                <button className={`${styles.tab} ${isLogin ? styles.activeTab : ""}`} onClick={() => setIsLogin(true)}>
                                                                                                Giriş
                                                                                </button>
                                                                                <button className={`${styles.tab} ${!isLogin ? styles.activeTab : ""}`} onClick={() => setIsLogin(false)}>
                                                                                                Kayıt Ol
                                                                                </button>
                                                                </div>

                                                                {isLogin ? (
                                                                                <div className={styles.formCard}>
                                                                                                <h2 className={styles.title}>Giriş Yap</h2>
                                                                                                <p className={styles.subtitle}>CV sitenize giriş yapın</p>

                                                                                                <form className={styles.form}>
                                                                                                                <div className={styles.formGroup}>
                                                                                                                                <label htmlFor="email" className={styles.label}>
                                                                                                                                                Email
                                                                                                                                </label>
                                                                                                                                <input id="email" type="email" placeholder="ornek@mail.com" className={styles.input} />
                                                                                                                </div>

                                                                                                                <div className={styles.formGroup}>
                                                                                                                                <label htmlFor="password" className={styles.label}>
                                                                                                                                                Şifre
                                                                                                                                </label>
                                                                                                                                <input id="password" type="password" className={styles.input} />
                                                                                                                                <a href="#" className={styles.forgotPassword}>
                                                                                                                                                Şifremi unuttum
                                                                                                                                </a>
                                                                                                                </div>

                                                                                                                <button type="submit" className={styles.submitButton}>
                                                                                                                                Giriş Yap
                                                                                                                </button>

                                                                                                                <p className={styles.switchText}>
                                                                                                                                Hesabınız yok mu?{" "}
                                                                                                                                <button type="button" className={styles.switchButton} onClick={() => setIsLogin(false)}>
                                                                                                                                                Kayıt Olun
                                                                                                                                </button>
                                                                                                                </p>
                                                                                                </form>
                                                                                </div>
                                                                ) : (
                                                                                <div className={styles.formCard}>
                                                                                                <h2 className={styles.title}>Kayıt Ol</h2>
                                                                                                <p className={styles.subtitle}>CV sitenize kayıt olun</p>

                                                                                                <form className={styles.form}>
                                                                                                                <div className={styles.formGroup}>
                                                                                                                                <label htmlFor="fullname" className={styles.label}>
                                                                                                                                                Ad Soyad
                                                                                                                                </label>
                                                                                                                                <input id="fullname" type="text" placeholder="Ad Soyad" className={styles.input} />
                                                                                                                </div>

                                                                                                                <div className={styles.formGroup}>
                                                                                                                                <label htmlFor="register-email" className={styles.label}>
                                                                                                                                                Email
                                                                                                                                </label>
                                                                                                                                <input id="register-email" type="email" placeholder="ornek@mail.com" className={styles.input} />
                                                                                                                </div>

                                                                                                                <div className={styles.formGroup}>
                                                                                                                                <label htmlFor="register-password" className={styles.label}>
                                                                                                                                                Şifre
                                                                                                                                </label>
                                                                                                                                <input id="register-password" type="password" className={styles.input} />
                                                                                                                </div>

                                                                                                                <div className={styles.formGroup}>
                                                                                                                                <label htmlFor="confirm-password" className={styles.label}>
                                                                                                                                                Şifre Tekrar
                                                                                                                                </label>
                                                                                                                                <input id="confirm-password" type="password" className={styles.input} />
                                                                                                                </div>

                                                                                                                <button type="submit" className={styles.submitButton}>
                                                                                                                                Kayıt Ol
                                                                                                                </button>

                                                                                                                <p className={styles.switchText}>
                                                                                                                                Zaten hesabınız var mı?{" "}
                                                                                                                                <button type="button" className={styles.switchButton} onClick={() => setIsLogin(true)}>
                                                                                                                                                Giriş Yapın
                                                                                                                                </button>
                                                                                                                </p>
                                                                                                </form>
                                                                                </div>
                                                                )}
                                                </div>
                                </div>
                )
}