import { Typography, TypoProvider } from '@kongstack/typo-react'

function App() {
  return (
    <TypoProvider>
      <Typography variant="h1" as="h1">Heading 1</Typography>
    <Typography variant="body" as="p">Body text</Typography>
    <Typography variant="overline" as="span">Overline</Typography>
    </TypoProvider>
  )
}

export default App