import PropTypes from 'prop-types';
import { createContext, useContext, useState } from 'react';

export const DataContext = createContext();

export const useDataContext = () => useContext(DataContext);

function DataProvider({ children }) {
  const inventoryData = [
    {
      id: '1',
      clientName: 'Katie Holmes',
      region: 'Asia',
      email: 'test12@gmail.com',
      orgName: 'ABC',
      registerNo: '32161',
      address: 'Ahmedabad, Gujarat, India',
      projectName: 'Project 1',
      details: 'Details',
      techStack: 'React',
      resources: '2',
      hours: '10',
    },
    {
      id: '2',
      clientName: 'John Doe',
      region: 'Europe',
      email: 'test123@gmail.com',
      orgName: 'ABC',
      registerNo: '32165',
      address: 'Ahmedabad, Gujarat, India',
      projectName: 'Project 2',
      details: 'Details',
      techStack: 'React',
      resources: '2',
      hours: '10',
    },
  ];
  const [isModalShow, setIsModalShow] = useState(false);
  const [tableData, setTableData] = useState(inventoryData);
  const [formData, setFormData] = useState({ id: new Date().getTime() });
  const [isEditMode, setIsEditMode] = useState(false);
  // Preserve original data for search
  const [originalData, setOriginalData] = useState([...inventoryData]);

  return (
    <DataContext.Provider
      value={{
        tableData,
        setTableData,
        formData,
        setFormData,
        isEditMode,
        setIsEditMode,
        isModalShow,
        setIsModalShow,
        originalData,
        setOriginalData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataProvider;
