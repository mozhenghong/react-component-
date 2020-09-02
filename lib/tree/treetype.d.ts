interface SourceDataItem {
    text: string;
    value: string;
    children?: SourceDataItem[]
}

//联合类型
type A = { selected: string[], multiple: true, onChange: (newSelected: string[], multiple: boolean) => void }
type B = { selected: string, multiple: false, onChange: (newSelected: string, multiple: boolean) => void }
type TreeProps = {
    sourceData: SourceDataItem[];
} & (A | B)