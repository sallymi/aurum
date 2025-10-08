'use client'
import Link from 'next/link'
import { useState } from 'react'
import Modal from './Modal'
import EmailForm from './EmailForm'
import { FaInstagram, FaWhatsapp, FaLinkedin, FaWeixin } from 'react-icons/fa'
import { useTexts } from '../lib/texts'

export default function FooterAthena() {
  const { t } = useTexts()
  const [isWechatModalOpen, setIsWechatModalOpen] = useState(false)

  return (
    <footer className="bg-gray-900 text-white pt-16">
      {/* 一行两列：左 = Navigation + Social（一行两列），右 = 白色 Consultation */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-start">
        {/* 左半：Navigation + Social 一行两列 */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Navigation */}
          <div>
            <h6 className="font-bold mb-4">{t('footer.navigation.title')}</h6>
            <ul className="space-y-2 text-sm"><li><Link href="/about">{t('footer.navigation.aboutUs')}</Link></li><li><Link href="/student-services">{t('footer.navigation.studentServices')}</Link></li><li><Link href="/adult-services">{t('footer.navigation.adultServices')}</Link></li></ul>
          </div>
          {/* Social Media */}
          <div>
            <h6 className="font-bold mb-4">{t('footer.socialMedia.title')}</h6>
            <div className="flex gap-4 text-2xl">
              <a href="https://wa.me/+33632134167" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </a>
              <button 
                onClick={() => setIsWechatModalOpen(true)}
                className="hover:text-green-500 transition-colors"
                title={t('footer.socialMedia.wechatTitle')}
              >
                <FaWeixin />
              </button>
              {/* <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a> */}
            </div>
          </div>
        </div>

        {/* 右半：白色背景区域占 50% */}
        <div className="bg-white rounded-xl p-6 shadow-inner text-gray-900">
          <EmailForm />
        </div>
      </div>

      {/* 微信弹窗 */}
      <Modal isOpen={isWechatModalOpen} onClose={() => setIsWechatModalOpen(false)}>
        <div className="text-center">
          <h3 className="text-xl font-bold mb-4 text-gray-900">{t('footer.wechatModal.title')}</h3>
          <div className="mb-4">
            <div className="w-48 h-48 mx-auto bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.691 2.188C8.691 1.533 8.158 1 7.503 1s-1.188.533-1.188 1.188.533 1.188 1.188 1.188 1.188-.533 1.188-1.188zM5.785 7.503c0-.655-.533-1.188-1.188-1.188S3.409 6.848 3.409 7.503s.533 1.188 1.188 1.188 1.188-.533 1.188-1.188zM20.597 11.104c-.655 0-1.188.533-1.188 1.188s.533 1.188 1.188 1.188 1.188-.533 1.188-1.188-.533-1.188-1.188-1.188zM17.785 17.503c0-.655-.533-1.188-1.188-1.188s-1.188.533-1.188 1.188.533 1.188 1.188 1.188 1.188-.533 1.188-1.188z"/>
                </svg>
                <p className="text-sm">{t('footer.wechatModal.qrCodeText')}</p>
                <p className="text-xs text-gray-400 mt-1">{t('footer.wechatModal.scanText')}</p>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-600">
            {t('footer.wechatModal.description')}
          </p>
        </div>
      </Modal>

      {/* Copyright 一行居中 */}
      <div className="text-center text-xs text-gray-400 py-6">{t('footer.copyright')}</div>
    </footer>
  )
}

// 社交媒体图标组件
// const FaInstagram = () => (
//   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//     <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.849 0-3.204.012-3.584.069-4.849.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.74 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.74 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.74 24 12 24s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98C23.986 15.667 24 15.26 24 12s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98C15.667.014 15.26 0 12 0z"/>
//   </svg>
// )

// const FaWechat = () => (
//   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//     <path d="M8.691 2.188C8.691 1.533 8.158 1 7.503 1s-1.188.533-1.188 1.188.533 1.188 1.188 1.188 1.188-.533 1.188-1.188zM5.785 7.503c0-.655-.533-1.188-1.188-1.188S3.409 6.848 3.409 7.503s.533 1.188 1.188 1.188 1.188-.533 1.188-1.188zM20.597 11.104c-.655 0-1.188.533-1.188 1.188s.533 1.188 1.188 1.188 1.188-.533 1.188-1.188-.533-1.188-1.188-1.188zM17.785 17.503c0-.655-.533-1.188-1.188-1.188s-1.188.533-1.188 1.188.533 1.188 1.188 1.188 1.188-.533 1.188-1.188zM8.691 11.104c-.655 0-1.188.533-1.188 1.188s.533 1.188 1.188 1.188 1.188-.533 1.188-1.188-.533-1.188-1.188-1.188zM11.503 17.503c0-.655-.533-1.188-1.188-1.188s-1.188.533-1.188 1.188.533 1.188 1.188 1.188 1.188-.533 1.188-1.188zM14.315 11.104c-.655 0-1.188.533-1.188 1.188s.533 1.188 1.188 1.188 1.188-.533 1.188-1.188-.533-1.188-1.188-1.188z"/>
//   </svg>
// )

// const FaLinkedin = () => (
//   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//     <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
//   </svg>
// )