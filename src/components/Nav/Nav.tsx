
import { useTranslation } from 'react-i18next';

import './Nav.scss'

function Nav() {
  const { t, i18n } = useTranslation();
  const anchors = [
    'about-me',
    // 'experience',
    // 'interests',
    // 'projects',
    // 'hobbies',
    // 'links'
  ]

  return (
    <nav>
      <ul className="container mx-auto flex justify-around lg:justify-end gap-10">
        { anchors.map(a => <li key={a}><a href={`#${a}`}>{t(`navigation.${a}`)}</a></li>) }
      </ul>
    </nav>
  )
}


export default Nav