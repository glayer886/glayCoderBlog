import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { useStaticQuery, graphql } from "gatsby"
import { getPosts } from "../../gatsby-node"
import { node } from "prop-types"

const PostBoardAll = () => {

    const datas = useStaticQuery(
        graphql`
        query MyQuery {
            allMarkdownRemark {
              nodes {
                frontmatter {
                  title,
                  path
                }
              }
            }
          }
        `          
    )

    console.log(datas)

    const renderPosts = () => {
      console.log(datas.allMarkdownRemark.nodes)
      return ( 
        datas.allMarkdownRemark.nodes.map(node => <Link to={node.frontmatter.path} ><div>{node.frontmatter.title}</div></Link>)
      )
    }

    return ( 
    <Layout>
        <SEO title="전체 포스트" />
        <div> 
           {renderPosts()}
        </div>
    </Layout>
    )
}

export default PostBoardAll
