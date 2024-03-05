import { useTranslation } from 'react-i18next';
import './Content.scss'
import Section from './Section'
import utils from '../../utils/utils';
import Card from '../Card/Card';

function Content() {
  const { t } = useTranslation();
  const highlights = utils.getTranslationArray(t('highlights', { returnObjects: true }))
  const projects = utils.getTranslationArray(t('projects.cards', { returnObjects: true }))

  return (
    <main className="container mx-auto">
      <Section icon="badge" id="about-me" titleKey="about-me.title">
        <div className="about-me flex flex-col lg:flex-row gap-6">
          <p>{ t('about-me.content') }</p>
          <img src={`${process.env.PUBLIC_URL}/images/pfp.jpg`}/>
        </div>
      </Section>
      
      <Section icon="book" id="interests" titleKey="interests.title">
        <p>{ utils.highlightText(t('interests.content'), highlights) }</p>
        <ul className="interests">
          { utils.getTranslationArray(t('interests.areas', { returnObjects: true })).map(a => <li>{a}</li>) }
        </ul>
      </Section>
      
      <Section icon="code" id="projects" titleKey="projects.title">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-8 justify-items-center">
          {
            projects.map(p => 
              <Card title={p.title} description={p.description} href={p.href} imgSrc={`${process.env.PUBLIC_URL}${p.img}`}/>)
          }
        </div>
      </Section>

      {/* <Section icon="work" id="experience" titleKey="experience.title">
        <p>{ t('experience.content') }</p>
      </Section>
      
      <Section icon="family_link" id="hobbies" titleKey="hobbies.title">
        <p>{ t('hobbies.content') }</p>
      </Section>

      <Section icon="share" id="links" titleKey="links.title">
        <p>{ t('links.content') }</p>
      </Section> */}
    </main>
  )
}

export default Content