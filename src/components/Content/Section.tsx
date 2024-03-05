import { ReactNode } from "react"
import { useTranslation } from "react-i18next";

export interface SectionProps {
  id?: string
  icon: string
  titleKey: string
  children?: ReactNode
}

function Section(props: SectionProps) {
  const { t } = useTranslation();

  return (
    <section className="container mx-auto">
      <div id={props.id} className="floating-anchor"/>
      <h1> 
        <span className="font-icon text-6xl">
          { props.icon }
        </span>
        { t(props.titleKey) }
      </h1>
      { props.children }
    </section>
  )
}

export default Section