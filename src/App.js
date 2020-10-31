import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import React from 'react'
import { ArticlesContainer } from './containers'

export const App = () => {
  const client = new ApolloClient({
    uri: 'http://localhost:4000',
    cache: new InMemoryCache(),
  })

  return (
    <ApolloProvider client={client}>
      <ArticlesContainer />
    </ApolloProvider>
  )
}
