import { Form, FormInstance, FormProps } from 'antd';
import { ReactNode, forwardRef, useImperativeHandle } from 'react';


interface SelfFormProps extends FormProps {
    fields: Array<{
        label:string;
        name:string;
        rules?:any[];
        component:ReactNode;
    }>
    children?: ReactNode;
}

// UserForm 組件
const UserForm = forwardRef<FormInstance, SelfFormProps>(({ children,children, ...props }, ref) => {
    const [form] = Form.useForm();

    // 讓 ref 能夠控制 form
    useImperativeHandle(ref, () => form);


    return (
        <Form {...props} form={form} layout="vertical">
            {formFields(form).map(({ label, name, rules, component }) => (
                <Form.Item key={name} label={label} name={name} rules={rules}>
                    {component}
                </Form.Item>
            ))}
            {children}
        </Form>
    );
});

export default SelfFormProps;
