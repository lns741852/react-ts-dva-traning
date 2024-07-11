
import React from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { Select, Input, Button, Popconfirm, message, Form, InputNumber, Card } from 'antd';
import styled from 'styled-components';

const { Option } = Select;

const InputNumberWrapper = styled(InputNumber)`
  width: 100%;
`;


const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const FormItem = styled(Form.Item)`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const Label = styled.label`
  margin-bottom: 8px;
  margin-bottom: 0;
`;

const ErrorMessage = styled.span`
  color: red;
`;

const RequiredIndicator = styled.span`
  color: red;
  margin-left: 4px;
  margin-right: 2px;
`;


interface FormValues {
  age: number;
  selectedOptions: string[];
  inputText?: string;
}


const YourForm: React.FC = () => {
  const [form] = Form.useForm();



  const onFinish = (values: FormValues) => {
    console.log(values);
  };

  const customValidator = async (rule: any, value: any) => {
    if (value < 18) {
      throw new Error('Age must be at least 18 years old');
    }
  };

  return (
    <FormWrapper>
      <Form form={form} onFinish={onFinish}>
        <Label><RequiredIndicator>*</RequiredIndicator>年齡:</Label>
        <FormItem
          name="age"
          rules={[
            { required: true, message: 'Please input your age!' },
            { validator: customValidator }
          ]}
          validateTrigger="onBlur"
        >
          <InputNumberWrapper />
        </FormItem>

        <Label><RequiredIndicator>*</RequiredIndicator>選擇選項:</Label>
        <FormItem
          name="selectedOptions"
          rules={[{ required: true, message: '此欄位為必填' }]}
        >
          <Select mode="multiple" style={{ width: '100%' }}>
            <Option value="option1">選項1</Option>
            <Option value="option2">選項2</Option>
            <Option value="option3">選項3</Option>
          </Select>
        </FormItem>

        <Label>輸入文字:</Label>
        <FormItem
          name="inputText"
        >
          <Input />
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">提交</Button>
        </FormItem>
      </Form>

    </FormWrapper>

  );
};

export default YourForm;
