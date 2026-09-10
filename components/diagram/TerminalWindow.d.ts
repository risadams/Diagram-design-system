/**
 * The opt-in CLI skin, recut in parchment. Fixed palette — it does not follow
 * light/dark inversion and is not brand-tokenized beyond these nine values.
 *
 * @startingPoint section="Diagrams" subtitle="Parchment terminal card for CLI-flavoured figures" viewport="1200x632"
 */
export interface TerminalWindowProps {
  /** Titlebar filename, e.g. "loop.sh — self-improving-loop". */
  name?: string;
  /** Prompt line after the rose "$". */
  command?: string;
  /** H1, prefixed with a soft "#". Mono, bold. */
  title?: string;
  children?: React.ReactNode;
}

export function TerminalWindow(props: TerminalWindowProps): JSX.Element;
