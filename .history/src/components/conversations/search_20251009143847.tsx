import React, { useState } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

type Domain = {
  name: string
  id: string
  icon: string
}

type Props = {
  register: UseFormRegister<FieldValues>
  domains?: Domain[]
}

const ConversationSearch = ({ register, domains = [] }: Props) => {
  const [query, setQuery] = useState('')

  // Filter domains based on input
  const filteredDomains = domains.filter((domain) =>
    domain.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="flex flex-col py-1 relative">
      <input
        type="text"
        placeholder="Search domain..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="px-3 py-1 text-sm border-[1px] rounded-lg w-full"
      />
      {query && filteredDomains.length > 0 && (
        <ul className="absolute z-10 bg-white border rounded-lg mt-1 w-full max-h-40 overflow-auto shadow-md">
          {filteredDomains.map((domain) => (
            <li
              key={domain.id}
              onClick={() => {
                setQuery(domain.name)
              }}
              className="px-3 py-2 cursor-pointer hover:bg-gray-100"
            >
              {domain.name}
            </li>
          ))}
        </ul>
      )}
      <input type="hidden" {...register('domain')} value={query} />
    </div>
  )
}

export default ConversationSearch
