import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navigation = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    role: ['ADMIN', 'SALES', 'ORDER_MANAGEMENT'],
  },
  {
    name: 'Leads',
    href: '/leads',
    role: ['ADMIN', 'SALES'],
  },
  {
    name: 'Quotes',
    href: '/quotes',
    role: ['ADMIN', 'SALES'],
  },
  {
    name: 'Orders',
    href: '/orders',
    role: ['ADMIN', 'SALES', 'ORDER_MANAGEMENT'],
  },
  {
    name: 'Products',
    href: '/products',
    role: ['ADMIN', 'SALES', 'ORDER_MANAGEMENT'],
  },
  {
    name: 'Vendors',
    href: '/vendors',
    role: ['ADMIN', 'ORDER_MANAGEMENT'],
  },
]

interface NavigationProps {
  userRole?: string
}

export function Navigation({ userRole = 'SALES' }: NavigationProps) {
  const pathname = usePathname()

  const filteredNavigation = navigation.filter((item) =>
    item.role.includes(userRole)
  )

  return (
    <nav className="flex space-x-4 px-4 py-2">
      {filteredNavigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={cn(
            'px-3 py-2 text-sm font-medium rounded-md',
            pathname === item.href
              ? 'bg-primary-100 text-primary-700'
              : 'text-gray-600 hover:text-gray-900'
          )}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  )
} 