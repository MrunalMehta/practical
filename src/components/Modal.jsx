/* eslint-disable react/prop-types */
import { useState } from 'react';
import ClientInformation from './ClientInformation';
import Orgamization from './Orgamization';
import ProjectDetail from './ProjectDetail';

const Modal = ({ isOpen, setIsOpen, setTableData, cloneTableData, formData, setFormData, isEditMode, setIsEditMode, tableData }) => {
  const [step, setStep] = useState(1);
  // const [formData, setFormData] = useState({id: new Date().getTime()});

  const handleNext = () => setStep((prev) => prev + 1);
  const handlePrev = () => setStep((prev) => prev - 1);
  const handleClose = ({submittedFromLastStep=false}) => {
    setIsOpen(false);
    setStep(1);
    setFormData({})
    /* if(submittedFromLastStep && !isEditMode){
      console.log('formData', formData)
      setTableData((prev) => [...prev, formData]);
    } */
  };
  const steps = [
    {
      title: 'Client Information',
      component: (
        <ClientInformation
          activeStep={step}
          setActiveStep={setStep}
          handleNext={handleNext}
          setTableData={setTableData}
          cloneTableData={cloneTableData}
          setFormData={setFormData}
          formData={formData}
          isEditMode={isEditMode}
          setIsEditMode={setIsEditMode}
          tableData={tableData}
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
          setTableData={setTableData}
          cloneTableData={cloneTableData}
          setFormData={setFormData}
          formData={formData}
          isEditMode={isEditMode}
          setIsEditMode={setIsEditMode}
          tableData={tableData}
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
          setTableData={setTableData}
          cloneTableData={cloneTableData}
          setFormData={setFormData}
          formData={formData}
          isEditMode={isEditMode}
          setIsEditMode={setIsEditMode}
          tableData={tableData}
        />
      ),
    },
  ];

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      {isOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='relative w-full max-w-2xl p-6 bg-white rounded-lg shadow-lg'>
            <button
              onClick={handleClose}
              className='absolute top-2 right-2 text-gray-500 hover:text-gray-700'
            >
              ✕
            </button>
            <div className='flex items-center justify-between mt-8'>
              {steps.map((stepName, index) => (
                <div key={index} className={`flex items-center ${steps.length !== index + 1 ? 'w-full': '' }`}>
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
                  >
                  </div>
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
            <div>
              {/* {step === 1 && (
              <div>
                <h2 className="text-lg font-bold">Step 1: Personal Info</h2>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-2 mt-4 border rounded"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 mt-2 border rounded"
                />
              </div>
            )}
            {step === 2 && (
              <div>
                <h2 className="text-lg font-bold">Step 2: Address</h2>
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full p-2 mt-4 border rounded"
                />
                <input
                  type="text"
                  placeholder="City"
                  className="w-full p-2 mt-2 border rounded"
                />
              </div>
            )}
            {step === 3 && (
              <div>
                <h2 className="text-lg font-bold">Step 3: Confirmation</h2>
                <p className="mt-4">Review your information and submit.</p>
              </div>
            )} */}
              {steps[step - 1].component}
            </div>

            {/* Navigation Buttons */}
            {/* <div className="flex justify-between mt-6">
            {step > 1 && (
              <button
                onClick={handlePrev}
                className="px-4 py-2 text-white bg-gray-600 rounded hover:bg-gray-700"
              >
                Previous
              </button>
            )}
            {step < steps.length ? (
              <button
                onClick={handleNext}
                className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleClose}
                className="px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700"
              >
                Submit
              </button>
            )}
          </div> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
