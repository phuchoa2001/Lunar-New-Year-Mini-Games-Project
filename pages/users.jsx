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
  EditFill,
  AppstoreOutline
} from 'antd-mobile-icons'
import Styles from '@/styles/User.module.scss'
import { FacebookOutlined } from '@ant-design/icons'
import ProtectedComponent from '@/components/auth/ProtectedComponent'
import useAuth from 'hooks/useAuth'
import HeaderSeo from '@/components/HeaderSeo'

export default () => {
  const router = useRouter();
  const { pathname } = router
  const { logout, user } = useAuth();

  const redirectTo = (value) => {
    router.push(value);
  }

  return (
    <ProtectedComponent>
      <HeaderSeo title="Tài khoản" />
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
          <List.Item prefix={<UnorderedListOutline />} onClick={() => redirectTo("/personalGoalList")}>Danh sách mục tiêu của bạn</List.Item>
          <List.Item prefix={<AddSquareOutline />} onClick={() => redirectTo("/goals/add")}>Thêm mục tiêu</List.Item>
          <List.Item prefix={<DeleteOutline />} onClick={() => {
            redirectTo("/setIDGame")
            logout()
          }}>Xóa tất cả dữ liệu</List.Item>
        </List>
        <List header='Thông tin'>
          <List.Item prefix={<FacebookOutlined />} onClick={() => {
            window.open('https://web.facebook.com/caymuctieu/', '_blank');
          }}>
            Liên hệ Facebook
          </List.Item>
          <List.Item prefix={<AppstoreOutline />} onClick={() => {
            window.open('https://www.facebook.com/caymuctieu/posts/pfbid0LEtPa14yA1WA2w1896czC58c1NczLU3tkBoV1uGsyiHGacMjvgedsf7KwVrh4pQkl', '_blank');
          }}>
            Báo lỗi ứng dụng
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
