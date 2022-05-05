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
  },
  IDEA: {
    title: "Ideia",
    image: {
      src: ideaImageUrl,
      alt: "Ideia",
    },
  },
  OUTER: {
    title: "Outro",
    image: {
      src: thoughtImageUrl,
      alt: "Outro",
    },
  },
};
