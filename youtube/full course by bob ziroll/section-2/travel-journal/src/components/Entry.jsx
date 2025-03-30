import marker from "../assets/marker.png";
export default function Entry(props) {
	return (
		<article className='journal-entry'>
			<div className='main-image-container'>
				{/* a div is needed because of additional image styling */}
				{/*now that we are passing an object named entry,
					we need to access entry(props.entry.img.src,props.entry.country etc) instead of before when we were passing multiple props we were accessing them with props.img.src, props.country etc 
					if we have {... entry}, react knows how to assign props*/}
				<img
					src={props.img.src}
					alt={props.img.alt}
					className='main-image'
				/>
			</div>
			<div className='info-container'>
				<img
					src={marker}
					alt='map marker icon'
					className='marker'
				/>
				<span className='country'>{props.country}</span>
				<a href={props.googleMapsLink}>View on Google Maps</a>
				<h2 className='entry-title'>{props.title}</h2>
				<p className='trip-dates'>{props.dates}</p>
				<p className='entry-text'>{props.text}</p>
			</div>
		</article>
	);
}
