import { useRef, useState } from 'react';
import ModalForm, { FormField } from '../../components/ModalForm';
import { FormInstance, Input, InputNumber, Select } from 'antd';


export interface FormItem {
  name: string;
  age: number;
  interest: string[];
}

const ModalAndFormPage = () => {
  const { Option } = Select;

  const modalFormRef = useRef<any>(null);
  
  const [isModalVisible, setIsModalVisible] = useState(false);


  const handleOpenModal = () => setIsModalVisible(true);

  const handleCancelModal = () => setIsModalVisible(false);

  const handleFormSubmit = (values: FormItem) => {
    console.log('Form submitted with values:', values);
    setIsModalVisible(false);
  };

  const customValidator = async (_: any, value: any) => {
    let hasEat = modalFormRef.current.getFieldValue(['interest']).includes('eat')
    if (value < 18 && hasEat) {
      throw new Error('Eat that Age must be at least 18 years old');
    }
  };

  const formFields: FormField[] = [
    {
      label: '姓名',
      name: 'name',
      rules: [{ required: true, message: '請輸入姓名' }],
      component: <Input />
    },
    {
      label: '年齡',
      name: 'age',
      rules: [
        { required: true, message: 'Please input your age!' },
        { validator: customValidator }
      ],
      component: <InputNumber />
    },
    {
      label: '興趣',
      name: 'interest',
      rules: [{ required: true, message: '請輸入您的興趣' }],
      component:
        <Select mode="multiple" style={{ width: '100%' }}>
          <Option value="eat">吃</Option>
          <Option value="drink">喝</Option>
          <Option value="play">玩</Option>
        </Select>
    },
  ];

  return (
    <div>
      <ModalForm
        title="ModalAndFormPage"
        open={isModalVisible}
        onCancel={handleCancelModal}
        formFields={formFields}
        onFinish={handleFormSubmit}
        ref={modalFormRef}
        name="ModalAndFormPage"
      />
      <button onClick={handleOpenModal}>打開 Modal</button>
    </div>
  );
};

export default ModalAndFormPage;