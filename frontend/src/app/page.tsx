export default function RootPage() {
  const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");
  const destination = `${basePath}/tr/`;

  return (
    <html lang="tr">
      <head>
        <meta httpEquiv="refresh" content={`0; url=${destination}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.location.replace(${JSON.stringify(destination)});`,
          }}
        />
      </head>
      <body />
    </html>
  );
}
