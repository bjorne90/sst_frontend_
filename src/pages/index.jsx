import React from "react";
import Layout from "@/layout/layout";
import HomeOne from "@/components/home/home/home";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Skånes Sjukvårdstjänst" />
      <Layout>
        <HomeOne />
      </Layout>
    </Wrapper>
  );
};

export default index;
