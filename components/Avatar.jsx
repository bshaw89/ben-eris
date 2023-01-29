// Avatar.jsx

import Image from 'next/image'

export default function Avatar() {
    return (
        <Image src="/static/images/ben-eris-avatar.jpg" alt="Avatar" width={100} height={100} className="rounded-full"/>
    )
}