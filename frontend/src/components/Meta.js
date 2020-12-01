import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Bienvenue sur Coffee addict",
  description:
    "Votre coffee shop en ligne à la qualité professionnelle, pour votre plus grand plaisir.",
  keywords: "café, achat café, graine de café",
};

export default Meta;
