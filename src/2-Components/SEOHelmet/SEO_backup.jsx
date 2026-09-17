// components/SEO.jsx
import React from 'react';
import { Helmet } from 'react-helmet';


const SEO = ({ 
  title = "Nyati Motion Pictures", 
  description = "Nyati Motion Pictures (NMP) is a premier Ugandan film and video production house crafting captivating motion pictures, documentaries, and commercial content.",
  keywords = "Nyati Motion Pictures, Ugandan film production, East African cinema, film studio Kampala",
  url = "https://www.nyatimotionpictures.com/",
  image = "https://www.nyatimotionpictures.com/og-image.jpg",
  type = "website",
  structuredData = null
}) => {
  const fullTitle = title === "Nyati Motion Pictures" ? title : `${title} - Nyati Motion Pictures`;

  return (
    <Helmet>
      {/* Primary SEO meta tags */}
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <meta name="language" content="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph (OG) for social media sharing */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Nyati Motion Pictures" />
      <meta property="og:locale" content="en_UG" />

      {/* Twitter Card metadata */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical link */}
      <link rel="canonical" href={url} />

      {/* Favicon and icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />

      {/* Optional Structured Data (JSON-LD) */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;