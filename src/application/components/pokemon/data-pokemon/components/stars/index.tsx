import { Text, Star, Stars, TypeStar } from './styles'

export const StarsPokemon: React.FC = () => {
  return (
  <Stars>
    <Star>
      <TypeStar star='hp'>HP</TypeStar>
      <Text>35</Text>
    </Star>
    <Star>
      <TypeStar star='atk'>ATK</TypeStar>
      <Text>35</Text>
    </Star>
    <Star>
      <TypeStar star='def'>DEF</TypeStar>
      <Text>35</Text>
    </Star>
    <Star>
      <TypeStar star='spa'>SPA</TypeStar>
      <Text>35</Text>
    </Star>
    <Star>
      <TypeStar star='spo'>SPO</TypeStar>
      <Text>35</Text>
    </Star>
    <Star>
      <TypeStar star='spd'>SPD</TypeStar>
      <Text>35</Text>
    </Star>
  </Stars>
  )
}
