import ClientInformation from './ClientInformation';
import Orgamization from './Orgamization';
import ProjectDetail from './ProjectDetail';
import Button from './Generic/Button';
import StepsProgress from './StepsProgress';
import { useModal } from '../hooks/useModal';

const Modal = () => {
  const {
    step,
    setStep,
    isDark,
    isModalShow,
    handleNext,
    handlePrev,
    handleClose,
  } = useModal();
  
  const steps = [
    {
      title: 'Client Information',
      component: (
        <ClientInformation
          activeStep={step}
          setActiveStep={setStep}
          handleNext={handleNext}
        />
      ),
    },
    {
      title: 'Organization Information',
      component: (
        <Orgamization
          activeStep={step}
          setActiveStep={setStep}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      ),
    },
    {
      title: 'Project Information',
      component: (
        <ProjectDetail
          activeStep={step}
          setActiveStep={setStep}
          handleNext={handleNext}
          handlePrev={handlePrev}
          handleClose={handleClose}
        />
      ),
    },
  ];

  return (
    <div className='flex items-center justify-center'>
      {isModalShow && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
          <div
            className={`relative w-full max-w-2xl p-6 ${
              isDark ? 'bg-gray-800' : 'bg-white'
            } rounded-lg shadow-lg`}
          >
            <Button
              onClick={handleClose}
              className='absolute top-2 right-2 text-gray-500 hover:text-gray-700'
              btnLabel='X'
            />
            <div className='flex items-center justify-between mt-8'>
              <StepsProgress steps={steps} activeStep={step} />
            </div>
            <div>{steps[step - 1].component}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
