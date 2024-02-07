import React from 'react';
import { NavBar } from 'antd-mobile';
import { useRouter } from 'next/router';

function NavBarBack(props) {
  const router = useRouter();

  const goBack = () => {
    router.back(); // Quay về trang trước đó
  };

  return (
    <div>
      <div style={{ background: "#fff" }} >
        <NavBar
          onBack={goBack}
          style={{
            '--border-bottom': '1px #eee solid',
          }}
        >{props.title || "Menu"}</NavBar>
      </div>
      {props.children}
    </div>
  );
}

export default NavBarBack;