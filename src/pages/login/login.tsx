import './login.css'
import React from 'react';
import { Button, Checkbox, Form, Input, Card } from 'antd';
import { ILoginParams } from './login.type';

export default () => {

    const [form] = Form.useForm();

    const onFinish = (values: ILoginParams) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <div id='login'>
            <Card style={{ width: 300 }}>
                <Form  form={form} name="control-hooks" onFinish={onFinish}>
                    <Form.Item name="username" label="username" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="password" label="password" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Card>


        </div>
    )
}