import phoneIcon from "../assets/phone-icon.png";
import mailIcon from "../assets/mail-icon.png";

export default function Contact(props) {
	return (
		<>
			<article className='contact-card'>
				<img
					src={props.img}
					alt={`Photo of ${props.name}`}
				/>
				<h3>{props.name}</h3>
				<div className='info-group'>
					<img
						src={phoneIcon}
						alt='phone icon'
					/>
					<p>{props.phone}</p>
				</div>
				<div className='info-group'>
					<img
						src={mailIcon}
						alt='mail icon'
					/>
					<p>{props.email}</p>
				</div>
			</article>
		</>
	);
}
