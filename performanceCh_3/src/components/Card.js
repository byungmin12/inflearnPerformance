import React from 'react'

function Card(props) {
	let imgRef = React.useRef(null)
	React.useEffect(()=>{
		const callback = (entries, observer) => {
			entries.forEach(entry => {
				if(entry.isIntersecting){
					entry.target.src = props.image
					observer.unobserve(entry.target)
				}
			});
		};
		const options = {}
		const intersectionOv = new IntersectionObserver(callback, options)
		intersectionOv.observe(imgRef.current)
	},[])
	return (
		<div className="Card text-center">
			<img ref={imgRef} alt={"apply lazy loading"}/>
			<div className="p-5 font-semibold text-gray-700 text-xl md:text-lg lg:text-xl keep-all">
				{props.children}
			</div>
		</div>
	)
}

export default Card
