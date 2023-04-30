import PropTypes from 'prop-types';

function EcoSwitchDemo({ width, height }) {
    return (
        <video src="Videos/Demo-EcoSwitch.mov" width={width} height={height} controls
        >  Your browser does not support the video tag.</video>
    )
}
EcoSwitchDemo.propTypes ={
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
 }

export default EcoSwitchDemo