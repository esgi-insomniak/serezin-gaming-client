import { Button } from '@/components/ui/button';
import Icon from '@/assets';
import { Separator } from '@/components/ui/separator';
import Logo from '@/assets/logo.png';
import { ClientRoutes, useHandleRedirection } from '@/router';

export default function Login() {
  const { redirect } = useHandleRedirection();
  return (
    <div className={'flex'}>
      <div
        className={
          'w-1/4 h-dvh flex flex-col justify-center items-center px-14 z-40 backdrop-opacity-90 backdrop-blur-2xl'
        }>
        <div className={'space-y-5 flex flex-col'}>
          <img src={Logo} className={'h-40'} alt={'Serezin gaming'} />
          <Separator orientation={'horizontal'} />
          <Button
            className={'flex justify-center items-center h-14'}
            onClick={() => redirect(ClientRoutes.HOME)}>
            <Icon.RiotGames />
            Se connecter avec Riot Games !
          </Button>
        </div>
      </div>
      <div className={'w-full h-dvh flex absolute'}>
        <video
          autoPlay
          muted
          loop
          id="loginVideo"
          className="object-cover w-full h-full bg-cover">
          <source src="/assets/svg/akali-bg.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
