import { ContentDisposition, FileType } from './generated/file/fileType'

export {
    FileType,
    fileTypeFromJSON,
    fileTypeToJSON,
    fileTypeToNumber,
    ContentDisposition,
    contentDispositionFromJSON,
    contentDispositionToJSON,
    contentDispositionToNumber,
} from './generated/file/fileType'

export enum MimeType {
    Zip = 'application/zip',
    PDF = 'application/pdf',
    JSON = 'application/json',
    PkixCertificate = 'application/pkix-cert',
    X509Certificate = 'application/x-x509-ca-cert',
    OctetStream = 'application/octet-stream',
    JPEG = 'image/jpeg',
    PNG = 'image/png',
    HEIF = 'image/heif',
    HEIC = 'image/heic',
    MP4 = 'video/mp4',
    SVG = 'image/svg+xml',
    MultipartMixed = 'multipart/mixed',
    MultipartFormData = 'multipart/form-data',
}

export interface ActionResultFile {
    $fileType: FileType
    content: Buffer
    disposition: ContentDisposition
    filename: string
}
