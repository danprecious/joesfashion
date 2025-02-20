import React from 'react'
import AnimateWrapper from './animateWrapper'
import Image from 'next/image'

const ImageCard = ({ delay, height, width, minHeight, imgSrc, imgAlt }) => {

    const classNames = () => {
        return (
            <div className="lg:h-[40%] lg:w-[20%]  min-h-[17em]"></div>
        )
    }

    return (
        <div className={`lg:h-[${height}] lg:w-[${width}]  transition-all duration-100 w-full my-1 min-h-[${minHeight}] rounded-lg overflow-hidden`}>
            <AnimateWrapper delay={delay}>
                <div className="w-full h-full bg-stone-600 overflow-hidden rounded-lg">
                    <Image alt={imgAlt} width={1000} height={1000} src={imgSrc} className="image h-full" />
                </div>
            </AnimateWrapper>
        </div>
    )
}

export default ImageCard
