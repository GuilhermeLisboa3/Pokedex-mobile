import { Text, Star, Stars, TypeStar } from './styles'

type Props = { stars: Array<{ base_stat: number }> }

export const StarsPokemon: React.FC<Props> = ({ stars }) => {
  return (
  <Stars>
    <Star>
      <TypeStar star='hp'>HP</TypeStar>
      <Text>{stars[0].base_stat}</Text>
    </Star>
    <Star>
      <TypeStar star='atk'>ATK</TypeStar>
      <Text>{stars[1].base_stat}</Text>
    </Star>
    <Star>
      <TypeStar star='def'>DEF</TypeStar>
      <Text>{stars[2].base_stat}</Text>
    </Star>
    <Star>
      <TypeStar star='spa'>SPA</TypeStar>
      <Text>{stars[3].base_stat}</Text>
    </Star>
    <Star>
      <TypeStar star='spo'>SPO</TypeStar>
      <Text>{stars[4].base_stat}</Text>
    </Star>
    <Star>
      <TypeStar star='spd'>SPD</TypeStar>
      <Text>{stars[5].base_stat}</Text>
    </Star>
  </Stars>
  )
}
