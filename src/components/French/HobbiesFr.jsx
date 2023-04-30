import PropTypes from 'prop-types';

function HobbiesFr({ hobbies, photography, travel, america, journalism }) {
    return (
        <div id="Hobbies">
            <span className="overline">
                <h2>{hobbies}</h2>
            </span>
            <ul className="hobbiesUl">
                <li>{photography}</li>
                <li>{travel}</li>
                <li>{america}</li>
                <li>{journalism}</li>
            </ul>
        </div >
    )
}
HobbiesFr.propTypes ={
    hobbies: PropTypes.string.isRequired,
    photography: PropTypes.string.isRequired,
   travel: PropTypes.string.isRequired,
    america: PropTypes.string.isRequired,
   journalism: PropTypes.string.isRequired
  }

export default HobbiesFr