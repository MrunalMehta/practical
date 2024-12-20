import { useState } from "react";
import { useDataContext } from "../contexts/DataContext";
import { useTheme } from "../contexts/ThemeContext";

export const useModal = () => {
  const [step, setStep] = useState(1);

  const { isDark } = useTheme();
  const { setIsModalShow, setFormData, isModalShow } = useDataContext();

  const handleNext = () => setStep((prev) => prev + 1);
  const handlePrev = () => setStep((prev) => prev - 1);

  const handleClose = () => {
    setIsModalShow(false);
    setStep(1);
    setFormData({ id: new Date().getTime() });
  };
  

  return{
    step,
    setStep,
    isDark,
    isModalShow,
    handleNext,
    handlePrev,
    handleClose
  }
}