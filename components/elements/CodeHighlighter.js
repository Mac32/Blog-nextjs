import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css"; // Elige tu tema favorito
// Importa los lenguajes que uses:
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";
import "prismjs/components/prism-python";

export default function CodeHighlighter() {
  useEffect(() => {
    Prism.highlightAll(); // Aplica resaltado a todos los bloques de código
  }, []);

  return null;
}