import React from 'react'

function Card(props) {
    let imgRef = React.useRef(null)
    React.useEffect(() => {
        const callback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const tag = entry.target
                    const siblingTag = tag.previousSibling
                    siblingTag.함 = props.webp
                    tag.src = props.image

                    observer.unobserve(tag)
                }
            });
        };
        const options = {}
        const intersectionOv = new IntersectionObserver(callback, options)
        intersectionOv.observe(imgRef.current)
    }, [])
    return (
        <div className="Card text-center">
            <picture>
                <source type="image/webp"/>
                <img ref={imgRef} alt={"apply lazy loading"}/>
            </picture>
            <div className="p-5 font-semibold text-gray-700 text-xl md:text-lg lg:text-xl keep-all">
                {props.children}
            </div>
        </div>
    )
}

export default Card
