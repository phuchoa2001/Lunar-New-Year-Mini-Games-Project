import React, { useState } from 'react';
import { Button, Toast } from 'antd-mobile';
import { useRandomGoal } from 'hooks/swr/useGoal';
import useAuth from 'hooks/useAuth';
import LoadingComponent from './Loading';
import { useRouter } from 'next/router';

function RandomUserViewer(props) {
  const { user, isLoading } = useAuth();
  const [isLoadingApi, setIsLoadingApi] = useState(false);
  const router = useRouter();
  const randomGoal = useRandomGoal();

  const handleRandom = async () => {
    if(!user?.idUser) {
      router.push(`/setIDGame`)
      return;
    }
    setIsLoadingApi(true)
    const res = await randomGoal(user.idUser)
    if (res.isSuccess) {
      router.push(`/goals/detail/${res.data['_id']}?title=${res.data.target}`)
      setIsLoadingApi(false);
    } else {
      Toast.show({
        content: 'Không có dữ liệu',
      })
    }
  }

  return (
    <Button block color='primary' size='middle' onClick={handleRandom} className='ant-button'>
      {(isLoading || isLoadingApi) ? <LoadingComponent /> : "Xem người ngẫu nhiên"}
    </Button>
  );
}

export default RandomUserViewer;