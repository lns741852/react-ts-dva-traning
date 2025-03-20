import { Form, FormInstance, FormProps, Input, InputNumber, Select } from 'antd';
import { ReactNode, forwardRef, useImperativeHandle } from 'react';

// 定義驗證函數
const customValidator = async (_: any, value: string, form: FormInstance) => {
    const age = form.getFieldValue('age')
    if (!age) {
        throw new Error('請輸入年齡');
    } else if (age < 18 && value.includes("play")) {
        throw new Error('小於18');
    }
};

// 表單字段配置
const formFields = (form: FormInstance) => [
    {
        label: '姓名',
        name: 'name',
        rules: [{ required: true, message: '請輸入姓名' }],
        component: <Input />,
    },
    {
        label: '年齡',
        name: 'age',
        rules: [
            { required: true, message: '請輸入年齡' }
        ],
        component: <InputNumber style={{ width: '100%' }} />,
    },
    {
        label: '興趣',
        name: 'interest',
        rules: [{ required: true, message: '請選擇您的興趣' },
        { validator: (_: any, value: string) => customValidator(_, value, form) }],
        component: (
            <Select mode="multiple" style={{ width: '100%' }}>
                <Select.Option value="eat">吃</Select.Option>
                <Select.Option value="drink">喝</Select.Option>
                <Select.Option value="play">玩</Select.Option>
            </Select>
        ),
    },
];

interface UserFormProps extends FormProps {
    children?: ReactNode;
}

// UserForm 組件
const UserForm = forwardRef<FormInstance, UserFormProps>(({ children, ...props }, ref) => {
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

export default UserForm;