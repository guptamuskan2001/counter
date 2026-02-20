export interface AccordionItem{
    heading: string;
    content:string;
}

export interface AccordionProps{
    items: AccordionItem[];
}