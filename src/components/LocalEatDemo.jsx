import PropTypes from 'prop-types';

function LocalEatDemo({ width, height }) {
    return (
        <video src="/Demo-LocalEat.mp4" width={width} height={height} controls
        >  Your browser does not support the video tag.</video>
    )}
    LocalEatDemo.propTypes ={
       width: PropTypes.number.isRequired,
       height: PropTypes.number.isRequired
    }


export default LocalEatDemo