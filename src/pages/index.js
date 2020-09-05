import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>안녕하세요.</h1>
    <p>GlayCoder의 Blog 입니다.</p>
    <p>프로그래밍, 주식, 영화, 애니메이션 들에 대해 이야기합니다.</p>
    <p>보고 계신 사이트는 개발 중입니다. 앞으로 많은 기능이 추가됩니다.</p>
    <p></p>
  </Layout>
)

export default IndexPage
