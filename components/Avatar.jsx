// Avatar.jsx

import Image from 'next/image'

export default function Avatar() {
    return (
        <Image src="https://i.imgur.com/ih0ORWA.jpg" alt="Avatar" width={100} height={100} className="rounded-full"/>
    )
}