import bugImageUrl from "../assets/bug.svg";
import ideaImageUrl from "../assets/idea.svg";
import thoughtImageUrl from "../assets/thought.svg";

export const FEEDBACK_TYPES = {
  BUG: {
    title: "Problema",
    image: {
      src: bugImageUrl,
      alt: "Problema",
    },
    placeholder:
      "Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo...",
  },
  IDEA: {
    title: "Ideia",
    image: {
      src: ideaImageUrl,
      alt: "Ideia",
    },
    placeholder:
      "Teve uma ideia de melhoria ou de nova funcionalidade? Conta pra gente!",
  },
  OUTER: {
    title: "Outro",
    image: {
      src: thoughtImageUrl,
      alt: "Outro",
    },
    placeholder: "Queremos te ouvir. O que você gostaria de nos dizer?",
  },
};
