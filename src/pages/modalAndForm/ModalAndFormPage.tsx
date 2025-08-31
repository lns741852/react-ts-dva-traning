import { useEffect, useRef } from 'react';
import UserForm from '../../components/UserForm';
import { Button, FormInstance, Modal } from 'antd';
import useModal from '../hooks/useModal';
import SelfForm from '../components/SelfForm';


const ModalAndFormPage: React.FC = () => {

  const { isModalOpen, openModal, closeModal, handleOk } = useModal()
  const formRef = useRef<FormInstance | null>(null);

  useEffect(() => {
    if (isModalOpen) {
      formRef.current && formRef.current.setFieldsValue({
        name: '小明',
        age: 20,
        interest: ['eat', 'drink'],
      });
    }
  }, [isModalOpen]);

  const doAction = async () => {
    const values = await formRef.current?.getFieldValue();
  }

  return (
    <div>
      <Modal
        open={isModalOpen}
        onOk={() => handleOk(doAction)}
        onCancel={closeModal}
      >
        <SelfForm ref={formRef}  fields ={userFields(formRef.current)}/>
      </Modal>

      <Button onClick={openModal} type="primary" style={{ marginTop: 16 }}>
        開啟
      </Button>
    </div>
  );
};

export default ModalAndFormPage;
