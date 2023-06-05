import { Container } from './styles'

import { LinearGradient } from 'expo-linear-gradient'
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient)

export const EmptyCardPokemon: React.FC = () => {
  return (
    <>
      <Container>
        <ShimmerPlaceHolder style={{ width: 77, height: 90, position: 'absolute', top: -50, left: 100 }}/>
        <ShimmerPlaceHolder style={{ width: 20, height: 20, position: 'absolute', top: 15, left: 245 }}/>
        <ShimmerPlaceHolder style={{ width: 65, height: 25, position: 'absolute', top: 55, left: 106 }}/>
        <ShimmerPlaceHolder style={{ width: 95, height: 25, position: 'absolute', top: 85, left: 93 }}/>
        <ShimmerPlaceHolder style={{ width: 65, height: 25, position: 'absolute', top: 125, left: 73, borderRadius: 5 }}/>
        <ShimmerPlaceHolder style={{ width: 65, height: 25, position: 'absolute', top: 125, left: 153, borderRadius: 5 }}/>
      </Container>
      <Container>
        <ShimmerPlaceHolder style={{ width: 77, height: 90, position: 'absolute', top: -50, left: 100 }}/>
        <ShimmerPlaceHolder style={{ width: 20, height: 20, position: 'absolute', top: 15, left: 245 }}/>
        <ShimmerPlaceHolder style={{ width: 65, height: 25, position: 'absolute', top: 55, left: 106 }}/>
        <ShimmerPlaceHolder style={{ width: 95, height: 25, position: 'absolute', top: 85, left: 93 }}/>
        <ShimmerPlaceHolder style={{ width: 65, height: 25, position: 'absolute', top: 125, left: 73, borderRadius: 5 }}/>
        <ShimmerPlaceHolder style={{ width: 65, height: 25, position: 'absolute', top: 125, left: 153, borderRadius: 5 }}/>
      </Container>
      <Container>
        <ShimmerPlaceHolder style={{ width: 77, height: 90, position: 'absolute', top: -50, left: 100 }}/>
        <ShimmerPlaceHolder style={{ width: 20, height: 20, position: 'absolute', top: 15, left: 245 }}/>
        <ShimmerPlaceHolder style={{ width: 65, height: 25, position: 'absolute', top: 55, left: 106 }}/>
        <ShimmerPlaceHolder style={{ width: 95, height: 25, position: 'absolute', top: 85, left: 93 }}/>
        <ShimmerPlaceHolder style={{ width: 65, height: 25, position: 'absolute', top: 125, left: 73, borderRadius: 5 }}/>
        <ShimmerPlaceHolder style={{ width: 65, height: 25, position: 'absolute', top: 125, left: 153, borderRadius: 5 }}/>
      </Container>
    </>
  )
}
