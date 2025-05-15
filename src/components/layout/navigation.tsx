'use client';

import React from 'react'
import Link from 'next/link'

const navigation = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Leads', href: '/leads' },
  { name: 'Quotes', href: '/quotes' },
  { name: 'Orders', href: '/orders' },
  { name: 'Products', href: '/products' },
  { name: 'Vendors', href: '/vendors' },
]

export function Navigation() {
  return (
    <nav className="flex space-x-4 px-4 py-2">
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:text-gray-900"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  )
}
