import PropTypes from 'prop-types';
function StepsProgress({ steps, activeStep }) {
  return steps.map((_, index) => (
    <div
      key={index}
      className={`flex items-center ${
        steps.length !== index + 1 ? 'w-full' : ''
      }`}
    >
      <div
        className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${
          activeStep > index + 1
            ? 'bg-green-600 text-white'
            : activeStep === index + 1
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-400'
        }`}
      >
        {index + 1}
      </div>
      <div
        className={`text-sm mt-2 text-center ${
          activeStep > index + 1
            ? 'text-green-600'
            : activeStep === index + 1
            ? 'text-blue-600 font-bold'
            : 'text-gray-400'
        }`}
      ></div>
      {index < steps.length - 1 && (
        <div
          className={`flex-1 h-1 mx-2 ${
            activeStep > index + 1 ? 'bg-green-600' : 'bg-gray-200'
          }`}
        ></div>
      )}
    </div>
  ));
}

StepsProgress.propTypes = {
  steps: PropTypes.array,
  activeStep: PropTypes.number,
};

export default StepsProgress;
