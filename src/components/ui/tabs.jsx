'use client'

import * as TabsPrimitive from '@radix-ui/react-tabs'
import * as React from 'react'

import { cn } from '@/lib/utils'

function Tabs ({ className, ...props }) {
  return (
    <TabsPrimitive.Root
      data-slot='tabs'
      className={cn('flex flex-col gap-0', className)}
      {...props}
    />
  )
}

function TabsList ({ className, ...props }) {
  return (
    <TabsPrimitive.List
      data-slot='tabs-list'
      className={cn('flex w-full items-center justify-center', className)}
      {...props}
    />
  )
}

function TabsTrigger ({ className, ...props }) {
  return (
    <TabsPrimitive.Trigger
      data-slot='tabs-trigger'
      className={cn(
        'font-medium tracking-wider rounded-xl px-6 py-1.5 text-sm text-white/50',
        'hover:text-white/80',
        'data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:font-extrabold',
        className
      )}
      {...props}
    />
  )
}

function TabsContent ({ className, ...props }) {
  return (
    <TabsPrimitive.Content
      data-slot='tabs-content'
      className={cn(
        'w-[93vw] lg:w-[45vw] h-full self-center rounded-xl outline-none border border-white/50 bg-white/5 p-2 lg:p-4',
        className
      )}
      {...props}
    />
  )
}

export { Tabs, TabsContent, TabsList, TabsTrigger }
