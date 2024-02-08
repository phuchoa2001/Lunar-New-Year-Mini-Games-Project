import React, { useEffect, useState, useRef } from 'react';
import { Input, Button, NavBar, Space } from 'antd-mobile';
import { useRouter } from 'next/router';
import Styles from '@/styles/setIDGame.module.scss';
import useAuth from 'hooks/useAuth';

export default function SetIDGame() {
  const { login } = useAuth();
  const [idGame, setIdGame] = useState('');
  const router = useRouter();
  const inputRef = useRef(null);

  const handleConfirm = () => {
    // Gọi Api nhận từ confirmUser và Iduser đi backend
    console.log(idGame);
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
        <Button color="primary" block onClick={handleConfirm}>
          Xác nhận
        </Button>
      </Space>
    </div>
  );
}
