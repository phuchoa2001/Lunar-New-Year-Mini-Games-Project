import AutoFocusInput from '@/components/AutoFocusInput';
import UnauthenticatedContent from '@/components/auth/UnauthenticatedContent';
import Styles from '@/styles/setIDGame.module.scss';
import { Button, NavBar, Space, Toast } from 'antd-mobile';
import { login as apiLogin } from 'api/authService';
import useAuth from 'hooks/useAuth';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import generateRandomId from 'utils/generateRandomId';
import { useSWRConfig } from "swr"
import { STATS } from 'constants/queryKeys';
import { useStatsContext } from 'context/statsContext';
import HeaderSeo from '@/components/HeaderSeo';

export default function SetIDGame() {
  const { login } = useAuth();
  const [idGame, setIdGame] = useState('');
  const router = useRouter();
  const inputRef = useRef(null);
  const { data, setData } = useStatsContext();
  const { mutate } = useSWRConfig()

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
          idGame: idGame,
          idUser: response.idUser,
          confirmUser: response.confirmUser
        })
        const newData = {
          ...data,
          count: data.count + 1
        }
        mutate(STATS.STATS, newData, false)
        setData(newData)
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
    <UnauthenticatedContent to="/editIDGame">
      <HeaderSeo title='Thêm IdGame' />
      <div style={{ padding: '20px' }} className={Styles.setIDGame}>
        <div style={{ background: "#fff" }} >
          <NavBar onBack={() => router.push('/')}>Đặt ID Game</NavBar>
        </div>
        <Space direction="vertical" block style={{ marginTop: '20px' }}>
          <AutoFocusInput
            clearable
            ref={inputRef}
            placeholder="Nhập ID Game của bạn"
            value={idGame}
            onChange={value => setIdGame(value)}
          />
          <Button color="primary" block onClick={handleSetIDGame} className='ant-button'>
            Xác nhận
          </Button>
        </Space>
      </div>
    </UnauthenticatedContent>
  );
}
