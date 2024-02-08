import { login as apiLogin } from 'api/authService';
import Styles from '@/styles/setIDGame.module.scss';
import { Button, Input, NavBar, Space, Toast } from 'antd-mobile';
import useAuth from 'hooks/useAuth';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import generateRandomId from 'utils/generateRandomId';

export default function SetIDGame() {
  const { login } = useAuth();
  const [idGame, setIdGame] = useState('');
  const router = useRouter();
  const inputRef = useRef(null);

  const handleSetIDGame = async () => {
    try {
      const response = await apiLogin({
        idUser: generateRandomId(),
        confirmUser: generateRandomId()
      });
      if (response) {
        Toast.show({
          content: 'Thêm idGame thành công.',
        })
        login({
          idGame : idGame,
          idUser: response.idUser,
          confirmUser: response.confirmUser
        })
        router.back();
      }
    } catch (error) {
      Toast.show({
        content: 'Thêm idGame thất bại.',
      })
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div style={{ padding: '20px' }} className={Styles.setIDGame}>
      <div style={{ background: "#fff" }} >
        <NavBar onBack={() => router.push('/')}>Đặt ID Game</NavBar>
      </div>
      <Space direction="vertical" block style={{ marginTop: '20px' }}>
        <Input
          clearable
          ref={inputRef}
          placeholder="Nhập ID Game của bạn"
          value={idGame}
          onChange={value => setIdGame(value)}
        />
        <Button color="primary" block onClick={handleSetIDGame}>
          Xác nhận
        </Button>
      </Space>
    </div>
  );
}
