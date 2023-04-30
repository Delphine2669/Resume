import PropTypes from 'prop-types';
function ButtonSwitch({french, english}) {

    return <>
        <div className="buttonLSwitch">
            <button onClick={french} className="buttonFrench">French</button> <span></span><span></span>
            <button onClick={english} className="buttonEnglish">English</button>
        </div>
    </>
}

ButtonSwitch.propTypes ={
   french: PropTypes.string.isRequired,
   english:PropTypes.string.isRequired}

export default ButtonSwitch