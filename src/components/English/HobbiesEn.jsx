import PropTypes from 'prop-types';

function HobbiesEn({ hobbies, photography, travel, america, journalism }) {
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
HobbiesEn.propTypes ={
   hobbies: PropTypes.string.isRequired,
   photography: PropTypes.node.isRequired,
   travel: PropTypes.string.isRequired,
   america: PropTypes.string.isRequired,
  journalism: PropTypes.node.isRequired
 }



export default HobbiesEn