import AutoFocusInput from '@/components/AutoFocusInput';
import ProtectedComponent from '@/components/auth/ProtectedComponent';
import Styles from '@/styles/setIDGame.module.scss';
import { Button, NavBar, Space } from 'antd-mobile';
import useAuth from 'hooks/useAuth';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import addKeyLocalStorage from 'utils/localStorage';
import LoadingComponent from '@/components/Loading';
import HeaderSeo from '@/components/HeaderSeo';

export default function SetIDGame() {
  const { login, user, isLoading } = useAuth();
  const [idGame, setIdGame] = useState("");
  const router = useRouter();
  const inputRef = useRef(null);

  const handleEditIDGame = () => {
    localStorage.setItem(addKeyLocalStorage('user'), JSON.stringify({
      ...user,
      idGame
    }));
    router.push("/users");
  };

  useEffect(() => {
    if (!isLoading) {
      setIdGame(user.idGame)
    }
  }, [isLoading])

  useEffect(() => {
    if (!isLoading && inputRef.current) {
      inputRef.current?.focus();
    }
  }, [isLoading]);

  if (isLoading) {
    return <LoadingComponent />
  }

  return (
    <ProtectedComponent>
      <HeaderSeo title='Sửa IdGame' />
      <div style={{ padding: '20px' }} className={Styles.setIDGame}>
        <div style={{ background: "#fff" }} >
          <NavBar onBack={() => router.back()}>Sửa ID Game</NavBar>
        </div>
        <Space direction="vertical" block style={{ marginTop: '20px' }}>
          {!isLoading && (
            <AutoFocusInput
              clearable
              ref={inputRef}
              placeholder="Nhập ID Game của bạn"
              value={idGame}
              onChange={value => setIdGame(value)}
            />
          )}
          <Button color="primary" block onClick={handleEditIDGame} className='ant-button'>
            Xác nhận
          </Button>
        </Space>
      </div>
    </ProtectedComponent>
  );
}
