import marker from "../assets/marker.png";
export default function Entry() {
	return (
		<article className='journal-entry'>
			<div className='main-image-container'>
				{/* a div is needed because of additional image styling */}
				<img
					src='https://scrimba.com/links/travel-journal-japan-image-url'
					alt='mount fuji'
					className='main-image'
				/>
			</div>
			<div className='info-container'>
				<img
					src={marker}
					alt='map marker icon'
					className='marker'
				/>
				<span className='country'>Japan</span>
				<a href='https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu'>
					View on Google Maps
				</a>
				<h2 className='entry-title'>Mount Fuji</h2>
				<p className='trip-dates'>12 Jan, 2021 - 24 Jan, 2021</p>
				<p className='entry-text'>
					Mount Fuji is the tallest mountian in Japan, standing at 3,776
					meters(12,380 feet). Mount Fuji is the single most popular tourist
					site in Japan, for both Japanese and foreign tourists.
				</p>
			</div>
		</article>
	);
}
