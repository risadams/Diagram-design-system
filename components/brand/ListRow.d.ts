/** Index row: mono date, serif title, handwritten category, dashed baseline. */
export interface ListRowProps {
  /** ISO-ish date or any short mono value. */
  date: string;
  title: string;
  /** Caveat label on the right — the one handwritten mark in a list. */
  category?: string;
  href?: string;
}

export function ListRow(props: ListRowProps): JSX.Element;
