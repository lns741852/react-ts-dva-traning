import { Modal, Form, Button, FormInstance, FormProps, ModalProps } from 'antd';
import { ForwardRefRenderFunction, forwardRef, useRef } from 'react';

// 函數宣告
type CustomValidatorFunction = (rule: any, value: any) => Promise<void>;
type onFinish = (value: any) => void;

// 表單內容
export interface FormField {
  label: string;
  name: string;
  rules: ({ required: boolean; message: string } | { validator: CustomValidatorFunction })[];
  component: JSX.Element;
}

type  ModalAndFormProps = FormProps<any> & ModalProps

//輸入內容
interface ModalFormProps extends Omit<ModalAndFormProps, 'form'>{
  formFields: FormField[];
  onFinish: onFinish;
}


const ModalForm = (
  { formFields, onFinish, ...props }: ModalFormProps,
  ref: React.Ref<FormInstance<any>>
) => {

  const [form] = Form.useForm();

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      onFinish(values)
      // 在這裡可以處理提交表單的邏輯
    } catch (error) {
      console.error('Form validation failed:', error);
    }
  };


  return (
    <Modal
      {...props}        //可直接將方法的街口 export給父組件，不用在這重寫一次
      footer={
        <Button type="primary" onClick={handleSubmit}>
          提交
        </Button>
      }
    >
      <Form
        form={form}
        ref={ref}
        {...props}
        layout="vertical"
      >
        {formFields.map((field) => (
          <Form.Item
            key={field.name}
            label={field.label}
            name={field.name}
            rules={field.rules}
          >
            {field.component}
          </Form.Item>
        ))}
      </Form>
    </Modal>
  );
};

const ForwardedModalForm = forwardRef<FormInstance<any>, ModalFormProps>(ModalForm);

export default ForwardedModalForm;