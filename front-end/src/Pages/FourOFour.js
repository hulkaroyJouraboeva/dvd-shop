import llamagif from '../assets/llamagif.gif'

export default function FourOFour() {
    return (
        <div className='error'>
            <h2>The page you're looking for does not exist</h2>
            <img src={llamagif} alt='404 error' />
        </div>
    );
};