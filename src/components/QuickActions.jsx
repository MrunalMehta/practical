import { CreditCard, ShoppingBag, Users } from 'lucide-react';
import { useEffect, useState } from 'react';
import Modal from './Modal';
import ClientTable from './ClientTable';

const quickActions = [
  { title: 'Add Client', icon: <Users size={20} /> },
  { title: 'Create Quote', icon: <CreditCard size={20} /> },
  { title: 'Enter Payment', icon: <ShoppingBag size={20} /> },
  { title: 'Create Invoice', icon: <CreditCard size={20} /> },
];
const inventoryData = [
  {
    id: new Date().getTime(),
    clientName: 'Katie Holmes',
    region: 'India',
    email: 'test12@gmail.com',
    orgName: 'ABC',
    registerNo: '321654',
    address: 'Ahmedabad, Gujarat, India',
    projectName: 'Project 1',
    details: 'Details',
    techStack: 'React',
    resources: '2',
    hours: '10',
  },
  {
    id: new Date().getDate(),
    clientName: 'John Doe',
    region: 'India',
    email: 'test123@gmail.com',
    orgName: 'ABC',
    registerNo: '321654',
    address: 'Ahmedabad, Gujarat, India',
    projectName: 'Project 2',
    details: 'Details',
    techStack: 'React',
    resources: '2',
    hours: '10',
  },
];

function QuickActions() {
  const [isModalShow, setIsModalShow] = useState(false);
  const [tableData, setTableData] = useState();
  const [formData, setFormData] = useState({id: new Date().getTime()});
  const [isEditMode, setIsEditMode] = useState(false)
  const handleModal = (title) => {
    if (title !== 'Add Client') {
      return;
    }
    setIsModalShow(true);
  };

  useEffect(()=>{
    setTableData(inventoryData)
  },[])
  console.log('tableData', tableData)
  return (
    <>
      <div className='flex flex-col space-y-4'>
        <div className='w-full'>
          <div className='bg-white shadow rounded-lg overflow-hidden'>
            <div className='bg-gradient-to-r from-orange-400 to-orange-600 flex flex-col md:flex-row items-start md:items-center p-4 border-b border-gray-200'>
              <h5 className='text-lg text-gray-800 font-semibold mb-2 md:mb-0'>
                Quick Actions
              </h5>
              <p className='text-sm text-gray-800 md:ml-auto flex items-center'>
                How are your active users trending over time?
                <i className='ml-1 icon-bulb'></i>
              </p>
            </div>
            <div className='flex flex-wrap'>
              {quickActions.map((action, index) => (
                <div
                  key={index}
                  className={`w-full sm:w-1/2 md:w-1/4 p-4 text-center ${
                    quickActions.length !== index + 1 ? 'border-r border-b' : ''
                  }`}
                >
                  <button
                    type='button'
                    className='flex items-center justify-center w-full text-gray-500 hover:text-gray-600'
                    onClick={() => handleModal(action.title)}
                  >
                    {action.icon}
                    <span className='ml-2'>{action.title}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ClientTable tableData={tableData} setTableData={setTableData} formData={formData} setFormData={setFormData} setIsOpen={setIsModalShow} setIsEditMode={setIsEditMode}/>
      {isModalShow && (
        <Modal
        tableData={tableData}
        setIsOpen={setIsModalShow}
          isOpen={isModalShow}
          setTableData={setTableData}
          formData={formData}
          setFormData={setFormData}
          isEditMode={isEditMode}
          setIsEditMode={setIsEditMode}
        />
      )}
    </>
  );
}

export default QuickActions;
