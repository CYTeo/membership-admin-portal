import { useContext } from 'react'
import { Layout } from 'antd'
import PropTypes from 'prop-types'

import { ScreenWidthContext } from '../../App'
import Sider from 'antd/es/layout/Sider'
import Sidebar from './Sidebar'

const { Header, Footer, Content } = Layout

export default function BasicLayout(props: any) {
  const { screenWidth } = useContext(ScreenWidthContext)

  return (
    <Layout style={{ background: 'white' }}>
      {/* <Header className="nav-header">
        {screenWidth > 768 ? <NavigationBar /> : <DrawerMenu />}
      </Header> */}
      <Sider style={siderStyle} className="sitelayout-sider" theme="light">
        <Sidebar />
      </Sider>
      <Layout>
        <Content className="content">
          <div>{props.children}</div>
          {/* <Home /> */}
        </Content>
        <Footer
          style={{
            textAlign: 'center'
          }}
        >
          Copyright © 2023. All rights are reserved
        </Footer>
      </Layout>
    </Layout>

    //
  )
}
const siderStyle: React.CSSProperties = {
  //   textAlign: 'center',
  //   lineHeight: '120px',
  //   color: '#fff'
  //   backgroundColor: '#3ba0e9'
}
BasicLayout.propTypes = {
  children: PropTypes.node
}
