export enum RowType {
    OneColumn = 'oneColumn',
    OneColumnPrimaryOpacity = 'oneColumnPrimaryOpacity',
    TwoColumns = 'twoColumns',
    TwoColumnsPrimaryOpacity = 'twoColumnsPrimaryOpacity',
    TwoColumnsWithSign = 'twoColumnsWithSign',
    TwoColumnsSecondRightAlign = 'twoColumnsSecondRightAlign',
    ThreeColumns = 'threeColumns',
}

export interface BlockStyle {
    lineHeight?: string
    fontSize?: number
    marginBottom?: number
    fontWeight?: number
    opacity?: number
}

export type TextItem = Content | CustomText

export type Content = string | string[]

export interface CustomText extends BlockStyle {
    content?: Content
}

export interface LogoBlock {
    logoHeader?: TextItem
    trident?: boolean
    header?: TextItem
    title?: TextItem
    subtitle?: TextItem
    tableBlock?: [RowType, TextBlock?, TextBlock?, TextBlock?][]
    tableBlockStyle?: TableBlockStyle
}

export interface IdentityBlock {
    lastName?: TextItem
    firstName?: TextItem
    middleName?: TextItem
    fullName?: TextItem
    documentNumber?: TextItem
    documentDetail?: TextItem
    photo?: string
}

export interface TextBlock {
    primaryText?: TextItem
    secondaryText?: TextItem
    hasSeparator?: boolean
    footnote?: TextItem
}

export interface TableBlockStyle {
    gap?: string
    fontSize?: number
}

export interface Block extends BlockStyle {
    header?: TextItem
    title?: TextItem
    logoBlock?: LogoBlock
    textBlock?: TextItem
    identityBlock?: IdentityBlock
    tableBlock?: [RowType, TextBlock?, TextBlock?, TextBlock?][]
    tableBlockStyle?: TableBlockStyle
    hasSeparator?: boolean
}

export interface GenericData {
    documentTitle?: string
    blocks?: Block[]
}

export interface GeneratedPdf {
    file: string
}
