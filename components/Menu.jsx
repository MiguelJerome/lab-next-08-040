import Link from 'next/link'

export default function Menu() {
    return <nav>
        <ul>
            <li><Link href="/images">Images</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/test">Test</Link></li>
            <li><Link href="/forms">Forms</Link></li>
        </ul>
    </nav>
}