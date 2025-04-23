import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, image, url }) => {
  // You might want to define a default base URL and image
  const siteUrl = url || 'https://www.amanluxdog.com'; // Replace with your actual domain
  const siteImage = image || 'https://www.amanluxdog.com/images/og-default.jpg'; // Replace with your default OG image

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{`${title} | AmanluxDog`}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${title} | AmanluxDog`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={siteImage} />
      <meta property="og:url" content={siteUrl + location.pathname} />{' '}
      {/* Assuming location is available or passed */}
      <meta property="og:site_name" content="AmanluxDog" />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} | AmanluxDog`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={siteImage} />
      {/* <meta name="twitter:site" content="@YourTwitterHandle"> */}
      {/* <meta name="twitter:creator" content="@YourTwitterHandle"> */}
    </Helmet>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SEO;
