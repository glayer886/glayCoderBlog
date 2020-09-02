// markdown-template.js
import React from "react"
import { graphql } from "gatsby"
import Layout from "./layout"

export default function Template({data}) {
  const { markdownRemark: { frontmatter, html } } = data;
  return (
    <Layout>
      <div>
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
          <div
            dangerouslySetInnerHTML={{ __html: html }}
          />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "YYYY년 MM월 DD일 ")
        path
        title
      }
    }
  }
`