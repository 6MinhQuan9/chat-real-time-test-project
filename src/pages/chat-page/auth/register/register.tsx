import { Button, Form, FormProps, Input } from 'antd';
import { useContext } from 'react';
import { AuthContext } from '../../../../context/AuthContext';
import {
  AuthContextValue,
  FieldType,
} from '../../../../modules/register-modules';

function Register() {
  const {
    registerInfo,
    updateRegisterInfo,
    registerUser,
  } = useContext<AuthContextValue>(AuthContext);

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    registerUser();
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
        updateRegisterInfo({ ...registerInfo, [value.name[0]]: value.value });
      }}
    >
      <Form.Item<FieldType>
        label="Username"
        name="name"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

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

export default Register;
