import { ContentType } from '@entities/Post/ui/schema'
import { i18Tags } from '@widgets/LangSwitcher/types/i18Keys'

export type CreatePostDto = {
  title: string
  content: {
    type: ContentType
    text: string
    image?: {
      src: string
      alt: string
    }
  }[]
  tags: i18Tags[]
}
