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
  title: "Bienvenue sur TECH & SHOP",
  description: "Vente de produit high tech",
  keywords: "tech, achat tech, vente tech",
};

export default Meta;
