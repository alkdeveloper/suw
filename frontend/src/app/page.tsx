export default function RootPage() {
  return (
    <html lang="tr">
      <head>
        <meta httpEquiv="refresh" content="0; url=/suw/tr/" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.location.replace("/suw/tr/");`,
          }}
        />
      </head>
      <body />
    </html>
  );
}