'use client'
import { useState } from 'react'
import { useTexts } from '../lib/texts'

interface NewsletterSubscribeProps {
  className?: string
}

export default function NewsletterSubscribe({ className = '' }: NewsletterSubscribeProps) {
  const { t } = useTexts()
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email.trim()) {
      setMessage(t('newsletter.invalidEmail'))
      setIsSuccess(false)
      return
    }

    if (!validateEmail(email)) {
      setMessage(t('newsletter.invalidEmail'))
      setIsSuccess(false)
      return
    }

    setIsLoading(true)
    setMessage('')

    try {
      const response = await fetch('/api/subscribe-newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setMessage(t('newsletter.successMessage'))
        setIsSuccess(true)
        setEmail('')
      } else {
        setMessage(data.error || t('newsletter.errorMessage'))
        setIsSuccess(false)
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error)
      setMessage(t('newsletter.errorMessage'))
      setIsSuccess(false)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={`bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-8 ${className}`}>
      <div className="max-w-md mx-auto text-center">
        <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          {t('newsletter.title')}
        </h3>
        
        <p className="text-gray-600 mb-6">
          {t('newsletter.description')}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('newsletter.emailPlaceholder')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-colors"
              disabled={isLoading}
            />
          </div>
          
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-sky-500 text-white font-medium py-3 px-6 rounded-lg hover:bg-sky-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? t('newsletter.subscribing') : t('newsletter.subscribeCta')}
          </button>
        </form>

        {message && (
          <div className={`mt-4 p-3 rounded-lg text-sm ${
            isSuccess 
              ? 'bg-green-100 text-green-700 border border-green-200' 
              : 'bg-red-100 text-red-700 border border-red-200'
          }`}>
            {message}
          </div>
        )}
      </div>
    </div>
  )
}