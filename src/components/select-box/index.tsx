import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export function SelectBox() {
    return (
        <Select defaultValue="nl">
            <SelectTrigger className="w-[70px]">
                <SelectValue placeholder="Select a language" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="nl">NL</SelectItem>
                <SelectItem value="en">EN</SelectItem>
            </SelectContent>
        </Select>
    )
}
