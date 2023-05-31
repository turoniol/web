import { Button, Form, Input, Select, Space } from 'antd';
import './SignUp.css'

const SignUpPage = () => {
    return (
        <div className="SignUp-div">
            <div className="SignUp-body">
                <Space direction="horizontal" style={{width: '100%', justifyContent: 'center'}}>
                    <Form name="basic" layout="vertical">
                        <Form.Item
                            label="Full name"
                            name="fullname"
                            rules={
                                [ 
                                    {
                                        required: true,
                                        message: 'Please input your full name!'
                                    }
                                ]
                            }>
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={
                                [ 
                                    {
                                        required: true,
                                        message: 'Please input your email!'
                                    }
                                ]
                            }>
                            <Input />
                        </Form.Item>
                        <Form.Item>
                            <Select 
                            defaultValue="student"
                            options={[
                                { value: 'student', label: 'Student' },
                                { value: 'teacher', label: 'Teacher' },
                                { value: 'admin', label: 'Admin' },    
                            ]}/>
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
                        <Form.Item>
                            <Space direction="vertical" style={{width: '100%'}}>
                                <Button type="primary" htmlType="submit" style={{width: '100%'}}>Submit</Button>
                            </Space>
                        </Form.Item>
                    </Form>
            </Space>
            </div>
        </div>
    )
};

export default SignUpPage;
