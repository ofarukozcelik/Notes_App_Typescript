// Etiket tipi
export type Tag = {
    label: string;
    value: string;
};

// Formdan alınacak olan note verisinin tipi
export type NoteData = {
    title: string;
    tags: Tag[];
    markdown: string;
};

// State'e kaydedilecek olan note verisinin tipi
export type Note = {
    id: string;
} & NoteData;
