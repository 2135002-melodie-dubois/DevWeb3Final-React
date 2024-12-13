import { Container } from '@mui/material'
import BarreTitre from './components/BarreTitre'
import ListePersonnage from './components/ListePersonnage'
import PersonnageProvider from './context/personnages.context'
function App() {
  return (
    <PersonnageProvider>
      <Container maxWidth={false} disableGutters sx={{width:'100%'}}>
        <BarreTitre></BarreTitre>
        <ListePersonnage></ListePersonnage>
      </Container>
    </PersonnageProvider>
  )
}

export default App
