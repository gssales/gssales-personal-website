
import { useTranslation } from 'react-i18next';
import './Header.scss';
import Goo from '../Goo/Goo';

function Header() {
  const { t, i18n } = useTranslation();

  return (
    <div className="flex flex-col items-center overflow-hidden">
      <header>
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center">
          <div className="flex flex-col justify-center greeting gradient-text">
            <h2>{t('greeting.line1')}</h2>
            <h1>{t('greeting.line2')}</h1>
            <h3>{t('heading.line1')}</h3>
            <h4>{t('heading.line2')}</h4>
          </div>
          <Goo />
        </div>
      </header>
      <div className="border-bottom"></div>
    </div>
  )
}


export default Header