import { useTranslation } from 'react-i18next';
import './Content.scss'
import Section from './Section'
import utils from '../../utils';

function Content() {
  const { t } = useTranslation();
  const highlights = utils.getTranslationArray(t('highlights', { returnObjects: true }))

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

      {/* <Section icon="work" id="experience" titleKey="experience.title">
        <p>{ t('experience.content') }</p>
      </Section>
      
      <Section icon="book" id="interests" titleKey="interests.title">
        <p>{ t('interests.content') }</p>
      </Section>
      
      <Section icon="family_link" id="hobbies" titleKey="hobbies.title">
        <p>{ t('hobbies.content') }</p>
      </Section>

      <Section icon="code" id="projects" titleKey="projects.title">
        <p>{ t('projects.content') }</p>
      </Section>

      <Section icon="share" id="links" titleKey="links.title">
        <p>{ t('links.content') }</p>
      </Section> */}
    </main>
  )
}

export default Content