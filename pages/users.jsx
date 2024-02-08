import React from 'react'
import { List, Space, Switch, Toast } from 'antd-mobile'
import { useRouter } from 'next/router'
import {
  UnorderedListOutline,
  PayCircleOutline,
  SetOutline,
  UserOutline,
  AddSquareOutline,
  TeamOutline,
  InformationCircleOutline,
  DeleteOutline,
  EditFill
} from 'antd-mobile-icons'
import Styles from '@/styles/User.module.scss'
import { FacebookOutlined } from '@ant-design/icons'
import ProtectedComponent from '@/components/auth/ProtectedComponent'
import useAuth from 'hooks/useAuth'

export default () => {
  const router = useRouter();
  const { pathname } = router
  const { logout, user } = useAuth();

  const redirectTo = (value) => {
    router.push(value);
  }

  return (
    <ProtectedComponent>
      <div className={Styles.user}>
        <List header='Tài khoản'>
          <List.Item prefix={<UserOutline />}>
            <div className='w-full flex'>
              <div className={Styles.userName}>
                <div>{user?.idGame || "username"}</div>
              </div>
              <div className={Styles.icon}><EditFill fontSize={25} onClick={() => redirectTo("/editIDGame")} /></div>
            </div>
          </List.Item>
          <List.Item prefix={<UnorderedListOutline />} onClick={() => redirectTo("/personalGoalList")}>Danh sách mục tiêu</List.Item>
          <List.Item prefix={<AddSquareOutline />} onClick={() => redirectTo("/goals/add")}>Thêm mục tiêu</List.Item>
          <List.Item prefix={<DeleteOutline />} onClick={() => {
            redirectTo("/setIDGame")
            logout()
          }}>Xóa tất cả dữ liệu</List.Item>
        </List>
        <List header='Thông tin'>
          <List.Item prefix={<FacebookOutlined />} onClick={() => {
            Toast.show({
              content: 'Tính năng này . đang phát triển',
              afterClose: () => {
                console.log('after')
              },
            })
          }}>
            Liên hệ Facebook
          </List.Item>
          <List.Item prefix={<InformationCircleOutline />} onClick={() => {
            Toast.show({
              content: 'Tính năng này . đang phát triển',
              afterClose: () => {
                console.log('after')
              },
            })
          }}>
            Giới thiệu
          </List.Item>
          <List.Item prefix={<TeamOutline />} onClick={() => {
            Toast.show({
              content: 'Tính năng này . đang phát triển',
              afterClose: () => {
                console.log('after')
              },
            })
          }}>
            Cộng động đóng góp
          </List.Item>
        </List>
      </div>
    </ProtectedComponent>
  )
}
