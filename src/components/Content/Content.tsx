import { useTranslation } from 'react-i18next';
import './Content.scss'
import Section from './Section'

function Content() {
  const { t } = useTranslation();

  return (
    <main className="container mx-auto">
      <Section icon="badge" id="about-me" titleKey="about-me.title">
        <p>{ t('about-me.content') }</p>
      </Section>
      
      <Section icon="work" id="experience" titleKey="experience.title">
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
      </Section>
    </main>
  )
}

export default Content