export interface CreateVideoData {
  title: string
  description: string
  imageCoverLink: string
  videoLink: string
  creationDate: Date | null
  tags: string[]
}
