import "./globals.css";

export const metadata = {
  title: "Digba Ogunbiyi | Jazz Pianist",
  description:
    "Digba Ogunbiyi — jazz pianist and composer. Music, events, gallery, videos and contact.",
  icons: {
    icon: "/home/photos/homephoto.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="w-mod-js lenis">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&family=Oregano:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
          integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}