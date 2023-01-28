// Avatar.jsx

import Image from 'next/image'

export default function Avatar() {
    return (
        <Image src="/avatar.JPG" alt="Avatar" width={100} height={100} className="rounded-full"/>
    )
}