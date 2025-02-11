
import { WordRotate } from "@/components/magicui/word-rotate";

 function TextRotate({text}:{text:string[]}) {
  return (
    <WordRotate
      className="text-inherit"
      words={text}
    />
  );
}
export default TextRotate