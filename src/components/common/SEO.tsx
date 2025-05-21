import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  children?: React.ReactNode;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, image, url, children }) => {
  const siteUrl = url || 'https://www.amanluxdog.com'; // Revertido para amanluxdog.com
  const siteImage = image || 'https://www.amanluxdog.com/images/og-default.jpg'; // Revertido para amanluxdog.com

  return (
    <Helmet>
      {/* Standard SEO Tags */}
      <title>{`${title} | Amanlux Dog`}</title> {/* Revertido para Amanlux Dog */}
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={siteUrl} />
      {/* Open Graph Tags (Facebook, etc.) */}
      <meta property="og:title" content={`${title} | Amanlux Dog`} />{' '}
      {/* Revertido para Amanlux Dog */}
      <meta property="og:description" content={description} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={siteImage} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Amanlux Dog" /> {/* Revertido para Amanlux Dog */}
      <meta property="og:locale" content="de_DE" />
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} | Amanlux Dog`} />{' '}
      {/* Revertido para Amanlux Dog */}
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={siteImage} />
      {/* <meta name="twitter:site" content="@yourTwitterHandle" /> */}
      {/* <meta name="twitter:creator" content="@yourTwitterHandle" /> */}
      {/* Favicon and Icons */}
      {/* Add any additional favicon and icon tags here */}
      {children}
    </Helmet>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SEO;
