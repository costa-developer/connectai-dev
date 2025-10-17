'use client'

import React from 'react'
import FormGenerator from '@/components/forms/form-generator'
import UploadButton from '@/components/upload-button'
import { Button } from '@/components/ui/button'
import { useDomain } from '@/hooks/sidebar/use-domain'

const AddDomainForm = () => {
  const { register, onAddDomain, loading, errors } = useDomain()

  return (
    <div className="mt-6 w-full  p-4 bg-white rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Add Your Business Domain</h2>
      <p className="text-sm text-gray-500 mb-4">
        Enter your domain to integrate your chatbot
      </p>

      <form className="flex flex-col gap-3" onSubmit={onAddDomain}>
        <FormGenerator
          inputType="input"
          register={register}
          label="Domain"
          name="domain"
          errors={errors}
          placeholder="mydomain.com"
          type="text"
        />

        <UploadButton register={register} label="Upload Icon" errors={errors} />

        <Button type="submit" className="w-full" variant="gradient" disabled={loading}>
          {loading ? 'Adding...' : 'Add Domain'}
        </Button>
      </form>
    </div>
  )
}

export default AddDomainForm
