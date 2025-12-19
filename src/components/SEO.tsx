import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    schema?: Record<string, any>; // For JSON-LD Schema
}

const SEO = ({
    title,
    description,
    keywords,
    image,
    url,
    schema
}: SEOProps) => {
    const siteTitle = "Namma Puducherry";
    const defaultDescription = "Namma Puducherry is a citizen-led initiative celebrating the heart, heritage, and harmony of Puducherry.";
    const siteUrl = "https://nammapuducherry.org";
    const defaultImage = `${siteUrl}/og-image.jpg`;

    const finalTitle = title ? `${title} | ${siteTitle}` : `${siteTitle} | Business, Education, Spirituality & Tourism`;
    const finalDescription = description || defaultDescription;
    const finalImage = image ? (image.startsWith('http') ? image : `${siteUrl}${image}`) : defaultImage;
    const finalUrl = url ? (url.startsWith('http') ? url : `${siteUrl}${url}`) : siteUrl;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{finalTitle}</title>
            <meta name="description" content={finalDescription} />
            {keywords && <meta name="keywords" content={keywords} />}
            <link rel="canonical" href={finalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={finalUrl} />
            <meta property="og:title" content={finalTitle} />
            <meta property="og:description" content={finalDescription} />
            <meta property="og:image" content={finalImage} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={finalUrl} />
            <meta name="twitter:title" content={finalTitle} />
            <meta name="twitter:description" content={finalDescription} />
            <meta name="twitter:image" content={finalImage} />

            {/* Schema.org JSON-LD */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
