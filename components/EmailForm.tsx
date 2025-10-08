'use client'
import { useState } from 'react'
import { useTexts } from '../lib/texts'

interface EmailFormProps {
  onClose?: () => void
  className?: string
  title?: string
  description?: string
}

export default function EmailForm({ 
  onClose, 
  className = "", 
  title = "Request a Tutor or Consultation",
  description = ""
}: EmailFormProps) {
  const { t } = useTexts()
  const [formData, setFormData] = useState({
    title: '',
    firstName: '',
    surname: '',
    email: '',
    telephone: '',
    address1: '',
    address2: '',
    postcode: '',
    country: '',
    studentName: '',
    schoolYear: '',
    currentSchool: '',
    goal: '',
    servicesRequired: '',
    tutoringRequirements: [] as string[],
    datesAndTimes: '',
    additionalInfo: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const serviceOptions = t('form.options.services.options') as string[];
  const requirementOptions = t('form.options.requirements') as string[];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleCheckboxChange = (requirement: string) => {
    setFormData(prev => ({
      ...prev,
      tutoringRequirements: prev.tutoringRequirements.includes(requirement)
        ? prev.tutoringRequirements.filter(r => r !== requirement)
        : [...prev.tutoringRequirements, requirement]
    }))
  }

  const validateForm = () => {
    const requiredFields = ['title', 'firstName', 'surname', 'email', 'telephone', 'servicesRequired', 'tutoringRequirements']
    
    for (const field of requiredFields) {
      if (field === 'tutoringRequirements') {
        if (formData.tutoringRequirements.length === 0) {
          setErrorMessage(t('form.validation.selectRequirements'))
          return false
        }
      } else if (!formData[field as keyof typeof formData] || (formData[field as keyof typeof formData] as string).trim() === '') {
        setErrorMessage(t('form.validation.requiredFields'))
        return false
      }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setErrorMessage(t('form.validation.invalidEmail'))
      return false
    }

    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      setStatus('error')
      return
    }

    setIsLoading(true)
    setStatus('idle')

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({
          title: '',
          firstName: '',
          surname: '',
          email: '',
          telephone: '',
          address1: '',
          address2: '',
          postcode: '',
          country: '',
          studentName: '',
          schoolYear: '',
          currentSchool: '',
          goal: '',
          servicesRequired: '',
          tutoringRequirements: [],
          datesAndTimes: '',
          additionalInfo: ''
        })
        setTimeout(() => {
          if (onClose) onClose()
        }, 2000)
      } else {
        const errorData = await response.json()
        setStatus('error')
        setErrorMessage(errorData.error || t('form.error'))
      }
    } catch (error) {
      setStatus('error')
      setErrorMessage(t('form.validation.networkError'))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={`${className} max-h-[80vh] overflow-y-auto px-1 sm:px-0`}>
      <h6 className="font-bold mb-3 sm:mb-4 text-gray-900 text-base sm:text-lg">{title}</h6>
      {description && <p className="text-sm mb-4 text-gray-600">{description}</p>}
      
      {/* 状态消息 */}
      {status === 'success' && (
        <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
          {t('form.success')}
        </div>
      )}
      {status === 'error' && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
        {/* Personal Information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t('form.fields.title')} <span className="text-red-500">*</span>
            </label>
            <select
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
              required
              disabled={isLoading}
            >
                <option value="">{t('form.options.titles.select')}</option>
                <option value="Mr">{t('form.options.titles.mr')}</option>
                <option value="Mrs">{t('form.options.titles.mrs')}</option>
                <option value="Ms">{t('form.options.titles.ms')}</option>
                <option value="Dr">{t('form.options.titles.dr')}</option>
                <option value="Prof">{t('form.options.titles.prof')}</option>
              </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t('form.fields.firstName')} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
              required
              disabled={isLoading}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t('form.fields.surname')} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
              required
              disabled={isLoading}
            />
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t('form.fields.email')} <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
              required
              disabled={isLoading}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t('form.fields.telephone')} <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="telephone"
              value={formData.telephone}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
              required
              disabled={isLoading}
            />
          </div>
        </div>

        {/* Address Information */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{t('form.fields.address1')}</label>
          <input
            type="text"
            name="address1"
            value={formData.address1}
            onChange={handleInputChange}
            className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
            disabled={isLoading}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{t('form.fields.address2')}</label>
          <input
            type="text"
            name="address2"
            value={formData.address2}
            onChange={handleInputChange}
            className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
            disabled={isLoading}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{t('form.fields.postcode')}</label>
            <input
              type="text"
              name="postcode"
              value={formData.postcode}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
              disabled={isLoading}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{t('form.fields.country')}</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
              disabled={isLoading}
            />
          </div>
        </div>

        {/* Student Information */}
        <div className="border-t pt-4">
          <h6 className="font-semibold text-gray-800 mb-3">{t('form.sections.studentInfo')}</h6>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t('form.fields.studentName')}</label>
              <input
                type="text"
                name="studentName"
                value={formData.studentName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                disabled={isLoading}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t('form.fields.schoolYear')}</label>
              <input
                type="text"
                name="schoolYear"
                value={formData.schoolYear}
                onChange={handleInputChange}
                className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                disabled={isLoading}
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">{t('form.fields.currentSchool')}</label>
            <input
              type="text"
              name="currentSchool"
              value={formData.currentSchool}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
              disabled={isLoading}
            />
          </div>
        </div>

        {/* Goal */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{t('form.fields.goal')}</label>
          <textarea
            name="goal"
            value={formData.goal}
            onChange={handleInputChange}
            rows={3}
            className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none"
            disabled={isLoading}
          />
        </div>

        {/* Services Required */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t('form.fields.servicesRequired')} <span className="text-red-500">*</span>
          </label>
          <select
            name="servicesRequired"
            value={formData.servicesRequired}
            onChange={handleInputChange}
            className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
            required
            disabled={isLoading}
          >
            <option value="">{t('form.options.services.select')}</option>
            {serviceOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        {/* Tutoring Requirements */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('form.fields.tutoringRequirements')} <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {requirementOptions.map(requirement => (
              <label key={requirement} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.tutoringRequirements.includes(requirement)}
                  onChange={() => handleCheckboxChange(requirement)}
                  className="rounded border-gray-300 text-sky-600 focus:ring-sky-500"
                  disabled={isLoading}
                />
                <span className="text-sm text-gray-700">{requirement}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Dates and Times */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t('form.fields.datesAndTimes')} <span className="text-red-500">*</span>
          </label>
          <input
            type="datetime-local"
            name="datesAndTimes"
            value={formData.datesAndTimes}
            onChange={handleInputChange}
            className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
            required
            disabled={isLoading}
          />
        </div>

        {/* Additional Information */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Any other information</label>
          <p className="text-xs text-gray-500 mb-2">Please give details of any special educational needs</p>
          <textarea
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none"
            disabled={isLoading}
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-sky-500 text-white py-3 rounded hover:bg-sky-600 transition disabled:opacity-50 disabled:cursor-not-allowed font-medium"
          disabled={isLoading}
        >
          {isLoading ? t('form.submitting') : t('form.submit')}
        </button>
      </form>
    </div>
  )
}