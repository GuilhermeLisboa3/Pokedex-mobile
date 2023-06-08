import { Id, Name, TextType, Type, Types, Title } from '../styles'
import { Container, CardDataPokemon, Icon, Icons, Image, Description, Skills, Ability, TextAbility, Body, BodyData, BodyDataValue } from './styles'
import { StarsPokemon } from './components'

import { Feather, AntDesign } from '@expo/vector-icons'
import { ScrollView } from 'react-native'

export const DataPokemon: React.FC = () => {
  return (
  <Container>
  <CardDataPokemon>
    <ScrollView>
      <Icons>
        <Icon><AntDesign name='close' size={30} color={'#fd4f55'}/></Icon>
        <Icon><Feather name='heart' size={26} color={'#fd4f55'}/></Icon>
      </Icons>
      <Image source={{ uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png' }} style={{ width: 200, height: 200 }}/>
      <Id size={25} marginTop={0}>Nº9</Id>
      <Name size={25} marginTop={0}>Blastoise</Name>
      <Types>
        <Type type='water'><TextType type='water'>water</TextType></Type>
        <Type type='ice'><TextType type='ice'>ice</TextType></Type>
      </Types>
      <Title size={20} marginTop={10}>Descrição</Title>
      <Description>Capable of copying an enemys genetic code to instantly transform itself into a duplicate of the enemy</Description>
      <Title size={20} marginTop={10}>Habilidades</Title>
      <Skills>
        <Ability ability='fire'><TextAbility ability='fire'>static</TextAbility></Ability>
        <Ability ability='dragon'><TextAbility ability='dragon'>static</TextAbility></Ability>
      </Skills>
      <Body>
        <BodyData>
          <Title size={20} marginTop={0}>Altura</Title>
          <BodyDataValue>30</BodyDataValue>
        </BodyData>
        <BodyData>
          <Title size={20} marginTop={0}>Peso</Title>
          <BodyDataValue>60kg</BodyDataValue>
        </BodyData>
      </Body>
      <BodyData>
        <Title size={20} marginTop={0}>Base Exp</Title>
        <BodyDataValue>112</BodyDataValue>
      </BodyData>
      <Title size={20} marginTop={10}>Estatísticas</Title>
      <StarsPokemon/>
    </ScrollView>
  </CardDataPokemon>
  </Container>
  )
}
