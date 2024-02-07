import React from 'react'
import { List, Switch, Toast } from 'antd-mobile'
import { useRouter } from 'next/router'
import {
  UnorderedListOutline,
  PayCircleOutline,
  SetOutline,
  UserOutline,
  AddSquareOutline,
  TeamOutline,
  InformationCircleOutline
} from 'antd-mobile-icons'
import Styles from '@/styles/User.module.scss'
import { FacebookOutlined } from '@ant-design/icons'

export default () => {
  const router = useRouter();
  const { pathname } = router

  const redirectTo = (value) => {
    router.push(value);
  }

  return (
    <div className={Styles.user}>
      <List header='Tài khoản'>
        <List.Item prefix={<UserOutline />}>UserName</List.Item>
        <List.Item prefix={<UnorderedListOutline />} onClick={() => redirectTo("/personalGoalList")}>Danh sách mục tiêu</List.Item>
        <List.Item prefix={<AddSquareOutline />} onClick={() => redirectTo("/goals/add")}>Thêm mục tiêu</List.Item>
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
  )
}
