import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css"; // Elige tu tema favorito
// Importa los lenguajes que uses:
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";
import "prismjs/components/prism-python";

export default function CodeHighlighter({content}) {

  useEffect(() => {
    const timer = setTimeout(() => Prism.highlightAll(), 100);
    return () => clearTimeout(timer);
  }, [content]);

  return null;
}