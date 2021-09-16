import { FC, useState, useEffect } from 'react';
import { Route, useNavigate } from 'react-router-dom';
import { Result, Button } from 'antd';
import { useLocale } from 'locales';
import { RouteProps, useLocation } from 'react-router';
import { useAppState } from 'stores';

const ResultRedirect = () => {
  const [seconds, setSeconds] = useState(5);
  const navigate = useNavigate();
  const { formatMessage } = useLocale();
  useEffect(() => {
    let i = 5;
    const timer = setInterval(() => {
      setSeconds(--i);
      if (i === 0) {
        clearInterval(timer);
        navigate(`/login${'?from=' + encodeURIComponent(location.pathname)}`, {
          replace: true,
        });
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Result
      status="403"
      title="403"
      subTitle={formatMessage({ id: 'gloabal.tips.unauthorized' })}
      extra={
        <Button
          type="primary"
          onClick={() =>
            navigate(
              `/login${'?from=' + encodeURIComponent(location.pathname)}`,
              { replace: true },
            )
          }
        >
          {seconds}后退出登录，您也可以点击返回
          {formatMessage({ id: 'gloabal.tips.goToLogin' })}
        </Button>
      }
    />
  );
};

const PrivateRoute: FC<RouteProps> = props => {
  const { logged } = useAppState(state => state.user);
  const navigate = useNavigate();
  const { formatMessage } = useLocale();
  const location = useLocation();

  return logged ? <Route {...props} /> : <ResultRedirect />;
};

export default PrivateRoute;
