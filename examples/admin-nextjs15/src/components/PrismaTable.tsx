'use client'

import React from 'react'
import { PrismaTable } from '@paljs/admin'
import { useRouter, useSearchParams } from 'next/navigation'

const Table: React.FC<{ model: string }> = ({ model }) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  // Convert searchParams to object
  const query = Object.fromEntries(searchParams.entries())

  return <PrismaTable useSet={false} model={model} push={router.push} query={query} />
}

export default Table
