import { FC, useRef, useEffect } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
// import './index.less';
import { useNavigate, useLocation } from 'react-router-dom';
import { LoginParams } from 'interface/user/login';
import { loginAsync } from 'stores/user.store';
import { useAppDispatch } from 'stores';
import { Location } from 'history';
import { formatSearch } from 'utils/formatSearch';

const initialValues: LoginParams = {
  username: 'guest',
  password: 'guest',
  // remember: true
};

const LoginForm: FC = () => {
  const navigate = useNavigate();
  const location = useLocation() as Location<{ from: string }>;
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLIFrameElement>(null);

  const onFinished = async (form: LoginParams) => {
    const res = await dispatch(loginAsync(form));
    if (res) {
      const search = formatSearch(location.search);
      const from = search?.from || { pathname: '/dashboard' };
      console.log('====================================');
      console.log(from);
      console.log('====================================');
      navigate(from);
    }
  };

  const onLoad = (e: any) => {
    console.log('====================================');
    console.log(e);
    console.log('====================================');
  };

  useEffect(() => {
    if (ref.current) {
      const win = ref.current?.contentWindow;
      const doc = win?.document;
      console.log('====================================');
      console.log(win);
      console.log(doc);
      console.log('====================================');
      if (win) {
        win.onhashchange = function () {
          console.log('====================================');
          console.log(doc);
          console.log('====================================');
        };
      }
    }

    return () => {};
  }, [ref]);

  return (
    <div className="login-page">
      <iframe
        ref={ref}
        src="https://api.lumiclass.com/admin/teachLogin"
        frameBorder="0"
        allow="*"
        style={{
          width: '100vw',
          height: '100vh',
        }}
        onLoad={onLoad}
      />
      {/* <Form<LoginParams>
        onFinish={onFinished}
        className="login-page-form"
        initialValues={initialValues}
      >
        <h2>REACT ANTD ADMIN</h2>
        <Form.Item
          name="username"
          rules={[{ required: true, message: '请输入用户名！' }]}
        >
          <Input placeholder="用户名" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: '请输入密码！' }]}
        >
          <Input type="password" placeholder="密码" />
        </Form.Item>
        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>记住用户</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button
            htmlType="submit"
            type="primary"
            className="login-page-form_button"
          >
            登录
          </Button>
        </Form.Item>
      </Form> */}
    </div>
  );
};

export default LoginForm;
