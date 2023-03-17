import Image from 'next/image'

import styles from '../styles/Gallerie.module.css'

export default function Gallerie({images}) {
    return <div className={styles.gallerie}>
        {images.map((imageData, index) => 
            <Image 
                src={imageData.src} 
                alt={imageData.alt} 
                width={imageData.width} 
                height={imageData.height}
                key={index} />    
        )}
    </div>
}