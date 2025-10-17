'use client'

import React from 'react'
import AppDrawer from '@/components/drawer'
import FormGenerator from '@/components/forms/form-generator'
import UploadButton from '@/components/upload-button'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { useDomain } from '@/hooks/sidebar/use-domain'

const AddDomainForm = () => {
  const { register, onAddDomain, loading, errors } = useDomain()

  return (
    <AppDrawer
      title="Add your business domain"
      description="Add your domain address to integrate your chatbot"
      onOpen={
        <div className="cursor-pointer text-gray-500 rounded-full border-2 p-1">
          <Plus />
        </div>
      }
    >
      <form className="mt-3 w-6/12 flex flex-col gap-3" onSubmit={onAddDomain}>
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
        <Button type="submit" className="w-full" variant="gradient">
          Add Domain
        </Button>
      </form>
    </AppDrawer>
  )
}

export default AddDomainForm
