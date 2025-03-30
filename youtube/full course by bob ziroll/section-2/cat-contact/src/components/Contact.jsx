import phoneIcon from "../assets/phone-icon.png";
import mailIcon from "../assets/mail-icon.png";

//instead of props in Contact(props) => destructuring props
//he suggests using props here because it's easier
//to notice what is coming from the outside
export default function Contact({ img, name, phone, email }) {
	// Destructuring props
	// const person = {
	// 	img:"./nesto",
	// 	name:"neko ime",
	// 	phone:"010",
	// 	email:"a@gmail.com"
	// }
	// const {img,name}=person;

	return (
		<>
			<article className='contact-card'>
				<img
					src={img}
					alt={`Photo of ${name}`}
				/>
				<h3>{name}</h3>
				<div className='info-group'>
					<img
						src={phoneIcon}
						alt='phone icon'
					/>
					<p>{phone}</p>
				</div>
				<div className='info-group'>
					<img
						src={mailIcon}
						alt='mail icon'
					/>
					<p>{email}</p>
				</div>
			</article>
		</>
	);
}
