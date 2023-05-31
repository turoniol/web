import { Button, Form, Input, Checkbox, Space } from 'antd';
import './Auth.css'

const AuthPage = () => {
    return (
        <div className="Auth-div">
            <div className="Auth-body">
                <Space direction="horizontal" style={{width: '100%', justifyContent: 'center'}}>
                    <Form name="basic" layout="vertical">
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={
                                [ 
                                    {
                                        required: true,
                                        message: 'Please input your username!'
                                    }
                                ]
                            }>
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={
                                [
                                    {
                                        required: true,
                                        message: 'Please input your password!'
                                    }
                                ]
                            }>
                            <Input.Password />
                        </Form.Item>
                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                        >
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>
                        <Form.Item
                            wrapperCol={{
                            }}>
                            <a href="/forgot-password">Forgot password?</a>
                        </Form.Item>
                        <Form.Item>
                            <Space direction="vertical" style={{width: '100%'}}>
                                <Button type="primary" style={{width: '100%'}}><a href="/home">Log in</a></Button>
                                <Button type="default" style={{width: '100%'}}><a href="/sign-up">Sign up</a></Button>
                            </Space>
                        </Form.Item>
                    </Form>
            </Space>
            </div>
        </div>
    )
};

export default AuthPage;
