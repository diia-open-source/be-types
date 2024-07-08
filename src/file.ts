import { ContentDisposition, FileType } from './generated/file/fileType'

export * from './generated/file/fileType'

export enum MimeType {
    Pdf = 'application/pdf',
    Zip = 'application/zip',
}

export interface ActionResultFile {
    $fileType: FileType
    content: Buffer
    disposition: ContentDisposition
    filename: string
}
