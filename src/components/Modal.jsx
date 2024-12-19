import { useState } from 'react';
import ClientInformation from './ClientInformation';
import Orgamization from './Orgamization';
import ProjectDetail from './ProjectDetail';
import { useDataContext } from '../contexts/DataContext';
import Button from './Generic/Button';
import { useTheme } from '../contexts/ThemeContext';

const Modal = () => {
  const { isDark } = useTheme();
  const { setIsModalShow, setFormData, isModalShow } = useDataContext();
  const [step, setStep] = useState(1);

  const handleNext = () => setStep((prev) => prev + 1);
  const handlePrev = () => setStep((prev) => prev - 1);

  const handleClose = () => {
    setIsModalShow(false);
    setStep(1);
    setFormData({ id: new Date().getTime() });
  };
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
              {steps.map((stepName, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    steps.length !== index + 1 ? 'w-full' : ''
                  }`}
                >
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${
                      step > index + 1
                        ? 'bg-green-600 text-white'
                        : step === index + 1
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-400'
                    }`}
                  >
                    {index + 1}
                  </div>
                  <div
                    className={`text-sm mt-2 text-center ${
                      step > index + 1
                        ? 'text-green-600'
                        : step === index + 1
                        ? 'text-blue-600 font-bold'
                        : 'text-gray-400'
                    }`}
                  ></div>
                  {index < steps.length - 1 && (
                    <div
                      className={`flex-1 h-1 mx-2 ${
                        step > index + 1 ? 'bg-green-600' : 'bg-gray-200'
                      }`}
                    ></div>
                  )}
                </div>
              ))}
            </div>
            <div>{steps[step - 1].component}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
