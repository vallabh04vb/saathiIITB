'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import * as React from 'react'

import { Button } from '@/components/ui/button'

export function Saathilogo() {
  const { setTheme, theme } = useTheme()

  return (
    <>
      <Button
        size="icon"
        className="fixed left-10 top-10 z-50"
      >
        <span className="sr-only">Toggle theme</span>
      </Button>
    </>
  )
}