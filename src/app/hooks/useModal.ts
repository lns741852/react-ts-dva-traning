import { useRef, useState } from "react";
import { FormInstance } from "antd";
import useMyForm from "./useMyForm";

const useModal = () => {
  const { formRef } = useMyForm();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleOk = async () => {
    try {
      const values = await formRef.current?.validateFields();
      console.log("表單資料:", values);
      closeModal();
    } catch (error) {
      console.error("驗證失敗:", error);
    }
  };

  return { isModalOpen, openModal, closeModal, handleOk, formRef };
};

export default useModal;
