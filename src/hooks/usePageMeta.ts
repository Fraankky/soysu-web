import { useEffect } from 'react'

const SITE_NAME = 'SOYSU'
const DEFAULT_DESCRIPTION =
  'Susu kedelai creamy, bebas langu, bebas laktosa. Diolah dengan teknologi ultrafiltrasi eksklusif. Halal bersertifikat.'

export function usePageMeta(title: string, description: string = DEFAULT_DESCRIPTION) {
  useEffect(() => {
    // Title
    document.title = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`

    // Meta description
    let descTag = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!descTag) {
      descTag = document.createElement('meta')
      descTag.name = 'description'
      document.head.appendChild(descTag)
    }
    descTag.content = description

    // OG title
    let ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]')
    if (ogTitle) ogTitle.content = document.title

    // OG description
    let ogDesc = document.querySelector<HTMLMetaElement>('meta[property="og:description"]')
    if (ogDesc) ogDesc.content = description
  }, [title, description])
}
