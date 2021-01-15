import Body from './components/Body'
import MainContainer from './components/MainContainer'
import ImageLink from './components/ImageLink'
import IconImage from './components/IconImage'
import IconContainer from './components/IconContainer'
import IconLabel from './components/IconLabel'
import icons from './data/icons'

function App() {
  return (
    <Body>
      <MainContainer>
      {
        icons.map(icon => {
          return <IconContainer>
            <ImageLink href={icon.localpath} download>
              <IconImage src={icon.localpath} />
            </ImageLink>
            <IconLabel>{icon.name.toUpperCase()}</IconLabel>
          </IconContainer>
        })
      }
      </MainContainer>
    </Body>
  );
}

export default App;
