import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Cars({}: Props) {
  return (
    <div>Cars 
        <Link href={"/"}>Go to root</Link>
    </div>
  )
}