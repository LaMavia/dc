import React from 'react'
import { Helmet } from 'react-helmet'
import { RouteProps } from 'react-router-dom'

export default function NotFound({
  path
}: RouteProps): React.FunctionComponentElement<RouteProps> {
  const canonicalUrl = `${process.env.SERVER_BASE_URL}${path}`

  return (
    <>
      <Helmet>
        <title>404 Not found</title>
        <link rel='canonical' href={canonicalUrl} />
        <meta name='description' content='The page you requested is not found' />
      </Helmet>
      <h1>This page doesn't exist</h1>
    </>
  )
}