import React from 'react';
import { Button, Toast } from 'antd-mobile';
import { useRandomGoal } from 'hooks/swr/useGoal';
import useAuth from 'hooks/useAuth';
import LoadingComponent from './Loading';
import { useRouter } from 'next/router';

function RandomUserViewer(props) {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const randomGoal = useRandomGoal();

  const handleRandom = async () => {
    const res = await randomGoal(user.idUser)
    if (res.isSuccess) {
      router.push(`/goals/detail/${res.data.target}?id=${res.data['_id']}`)
    } else {
      Toast.show({
        content: 'Không có dữ liệu',
      })
    }
  }

  return (
    <Button block color='primary' size='middle' onClick={handleRandom} className='ant-button'>
      {isLoading ? <LoadingComponent /> : "Xem người ngẫu nhiên"}
    </Button>
  );
}

export default RandomUserViewer;