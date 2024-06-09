"use client"
import { useSearchParams } from 'next/navigation'
import React from 'react'

const Page = () => {
    const params = useSearchParams();
    const tests = params.get('tests');
    const arrayTests = JSON.parse(tests);
  return (
    <div>
      
    </div>
  )
}

export default Page
