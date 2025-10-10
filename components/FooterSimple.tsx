'use client'
import Link from 'next/link'
import { useState } from 'react'
import Modal from './Modal'
import { FaInstagram, FaWhatsapp, FaLinkedin, FaWeixin } from 'react-icons/fa'
import { useTexts } from '../lib/texts'

export default function FooterSimple() {
  const { t } = useTexts()
  const [isWechatModalOpen, setIsWechatModalOpen] = useState(false)

  return (
    <footer className="bg-gray-900 text-white pt-16">
      {/* 简化版：只有Navigation和Social Media，居中布局 */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {/* Navigation */}
          <div>
            <h6 className="font-bold mb-4">{t('footer.navigation.title')}</h6>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about">{t('footer.navigation.aboutUs')}</Link></li>
              <li><Link href="/student-services">{t('footer.navigation.studentServices')}</Link></li>
              <li><Link href="/adult-services">{t('footer.navigation.adultServices')}</Link></li>
              <li><Link href="/blog">{t('footer.navigation.news')}</Link></li>
            </ul>
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