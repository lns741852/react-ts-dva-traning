import { useEffect, useRef } from 'react';
import UserForm from '../../components/UserForm';
import { Button, FormInstance } from 'antd';


const ModalAndFormPage: React.FC = () => {

  const formRef = useRef<FormInstance>(null);

  useEffect(() => {
    formRef.current && formRef.current.setFieldsValue({
      name: '小明',
      age: 20,
      interest: ['eat', 'drink'],
    });

  }, []);

  const handleSubmit = async () => {
    try {
      const values = await formRef.current?.validateFields();
      console.log('表單資料:', values);
    } catch (error) {
      console.error('驗證失敗:', error);
    }
  };

  return (
    <div>
      <UserForm ref={formRef} />
      <Button onClick={handleSubmit} type="primary" style={{ marginTop: 16 }}>
        提交
      </Button>
    </div>
  );
};

export default ModalAndFormPage;