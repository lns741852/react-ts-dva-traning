import { useEffect, useRef, useState } from 'react';
import UserForm from '../../components/UserForm';
import { Button, FormInstance, Modal } from 'antd';
import useModal from '../../app/hooks/useModal';


const ModalAndFormPage: React.FC = () => {

  const { isModalOpen, openModal, closeModal, handleOk, formRef } = useModal()

  useEffect(() => {
    if (isModalOpen) {
      formRef.current && formRef.current.setFieldsValue({
        name: '小明',
        age: 20,
        interest: ['eat', 'drink'],
      });
    }
  }, [isModalOpen]);

  return (
    <div>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={closeModal}
      >
        <UserForm ref={formRef} />
      </Modal>

      <Button onClick={openModal} type="primary" style={{ marginTop: 16 }}>
        開啟
      </Button>
    </div>
  );
};

export default ModalAndFormPage;