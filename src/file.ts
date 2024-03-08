import { ContentDisposition, FileType } from './generated/file/fileType'

export * from './generated/file/fileType'

export interface ActionResultFile {
    $fileType: FileType
    content: Buffer
    filename: string
    disposition: ContentDisposition
}
