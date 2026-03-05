import { Typography, TypoProvider } from '@kongstack/typo-react'

function App() {
  return (
    <TypoProvider>
      <Typography as="h1">Hello KongStack!</Typography>
      <Typography as="h2">Hello KongStack!</Typography>
      <Typography as="h3">Hello KongStack!</Typography>
      <Typography as="p">This is typo-react working!</Typography>
    </TypoProvider>
  )
}

export default App