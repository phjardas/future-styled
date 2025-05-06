import {
  PrismAsyncLight as SyntaxHighlighter,
  SyntaxHighlighterProps,
} from "react-syntax-highlighter";
import { materialDark as style } from "react-syntax-highlighter/dist/esm/styles/prism";

export type Props = Pick<SyntaxHighlighterProps, "language" | "children">;

export default function Code(props: Props) {
  return (
    <SyntaxHighlighter style={style} customStyle={{ margin: 0 }} {...props} />
  );
}
