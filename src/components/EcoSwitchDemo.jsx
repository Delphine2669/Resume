import PropTypes from 'prop-types';

function EcoSwitchDemo({ width, height }) {
    return (
        <video src="/Demo-EcoSwitch.mp4" width={width} height={height} controls
        >  Your browser does not support the video tag.</video>
    )
}
EcoSwitchDemo.propTypes ={
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
 }

export default EcoSwitchDemo