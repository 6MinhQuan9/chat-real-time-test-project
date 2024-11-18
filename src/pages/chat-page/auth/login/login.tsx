import { Button, Form, FormProps, Input } from 'antd';
import { useContext } from 'react';
import { AuthContext } from '../../../../context/AuthContext';
import { AuthContextValue } from '../../../../modules/register-modules';

type FieldType = {
  email?: string;
  password?: string;
  remember?: string;
};

function Login() {
  const { loginUser, loginInfo, updateLoginInfo } =
    useContext<AuthContextValue>(AuthContext);
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    loginUser();
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (
    errorInfo,
  ) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      onFieldsChange={(changedFields) => {
        const value = changedFields[0];
        updateLoginInfo({ ...loginInfo, [value.name[0]]: value.value });
      }}
    >
      <Form.Item<FieldType>
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Login;
