/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import "./layout.css"

import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent, SidebarFooter} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div class="App_">
      <ProSidebar
          breakPoint="md"
          >
        <SidebarHeader>
         <Header siteTitle={data.site.siteMetadata.title} />
        </SidebarHeader>
      <Menu iconShape="square">
      <SubMenu title="포스트 목록"  >
        <Link to={"/postBoardAll/"}>
         <MenuItem>전체 포스트</MenuItem>
        </Link>
        </SubMenu>
       </Menu>
       <SidebarContent>
       </SidebarContent>
       <SidebarFooter style={{ textAlign: 'center' }}>
        <div>
          Hello
        </div>
      </SidebarFooter>
    </ProSidebar>
    <main>{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
