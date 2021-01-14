import Body from './components/Body'
import MainContainer from './components/MainContainer'
import ImageLink from './components/ImageLink'
import IconImage from './components/IconImage'
import icons from './data/icons'

function App() {
  return (
    <Body>
      <MainContainer>
      {
        icons.map(icon => {
          return <ImageLink href={icon.localpath} download>
            <IconImage src={icon.localpath} />
          </ImageLink>
        })
      }
      </MainContainer>
    </Body>
  );
}

export default App;
