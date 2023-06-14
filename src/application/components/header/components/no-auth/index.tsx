import { Button } from '@/application/components/button'

export const NoAuth: React.FC = () => {
  return (
    <>
      <Button width={110} height={35} text='Entrar' disabled={false}/>
      <Button width={110} height={35} text='Registrar' disabled={false}/>
    </>
  )
}
