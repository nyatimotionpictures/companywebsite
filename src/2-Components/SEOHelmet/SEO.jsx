// components/SEO.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description,
  url = "https://www.nyatimotionpictures.com/",
  image = "https://www.nyatimotionpictures.com/og-image.jpg",
  type = "website",
  keywords,
  structuredData = null
}) => {
  const siteName = "Nyati Motion Pictures";
  
  // Formats title as "Page Title | Nyati Motion Pictures" or defaults to site name for Home
  const fullTitle = title && title !== siteName 
    ? `${title} | ${siteName}` 
    : siteName;

  // Fallback description for home/unspecified pages
  const metaDescription = description || "Nyati Motion Pictures (NMP) is a premier Ugandan film and video production house crafting captivating motion pictures, documentaries, and commercial content.";

  return (
    <Helmet>
      {/* Primary SEO metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow" />

      {/* Open Graph (OG) */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_UG" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image} />

      {/* Canonical link */}
      <link rel="canonical" href={url} />

      {/* Structured Data (JSON-LD) */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;