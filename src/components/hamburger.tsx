'use client'

import { AlignJustify } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useState } from 'react'
import Drawer from '@/components/drawer'
import * as React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function ThemeSwitcher() {
    const { setTheme, theme } = useTheme()
    const [isDrawerActive, setIsDrawerActive] = useState(false)
    return (
        <>
            <Button
                size="icon"
                className="fixed right-10 top-10 z-50"
                onClick={()=>setIsDrawerActive(true)}
            >
                <AlignJustify className="stroke-text hidden h-6 w-6 w500:h-4 w500:w-4 dark:inline" />
                <AlignJustify className="stroke-text inline h-6 w-6 w500:h-4 w500:w-4 dark:hidden" />


                <span className="sr-only">Toggle theme</span>
            </Button>
            <Drawer active={isDrawerActive} setActive={setIsDrawerActive} >
                <Link className="block w-full text-text border-b-2 border-border dark:border-darkBorder bg-main px-5 py-4 hover:bg-mainAccent"
                    href="/identity" >
                        Identity
                </Link>
                <Link className="block w-full text-text border-b-2 border-border dark:border-darkBorder bg-main px-5 py-4 hover:bg-mainAccent"
                    href="/welfare">
                        Welfare
                </Link>
                <Link className="block w-full text-text border-b-2 border-border dark:border-darkBorder bg-main px-5 py-4 hover:bg-mainAccent"
                    href="/blog">
                        Blog
                </Link>
                <Link className="block w-full text-text border-b-2 border-border dark:border-darkBorder bg-main px-5 py-4 hover:bg-mainAccent"
                    href="/saathi-connect">
                        Connect
                </Link>
                <Link className="block w-full text-text border-b-2 border-border dark:border-darkBorder bg-main px-5 py-4 hover:bg-mainAccent"
                    href="/about">
                        About Us
                </Link>
                <div className="block w-full text-text border-b-2 border-border dark:border-darkBorder bg-main px-5 py-4 hover:bg-mainAccent"
                        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                    Change Theme
                </div>
            </Drawer>
        </>
    )
}
