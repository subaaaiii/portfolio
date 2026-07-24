import { useEffect } from "react";

type SEOProps = {
  title?: string;
  description?: string;
};

export const useSEO = ({
  title = "Subairi | Full Stack Web Developer",
  description = "Portfolio of Subairi, a Full Stack Web Developer specializing in React, TypeScript, Node js, Laravel, Golang, and modern web applications. Explore projects, skills, and professional experience.",
}: SEOProps) => {
  useEffect(() => {
    document.title = title;

    let meta = document.querySelector(
      'meta[name="description"]'
    ) as HTMLMetaElement;

    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.content = description;
  }, [title, description]);
};