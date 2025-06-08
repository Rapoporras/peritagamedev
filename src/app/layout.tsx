// app/layout.js o app/layout.tsx
import "./globals.css";
import { Atkinson_Hyperlegible, Darumadrop_One } from "next/font/google";

const atkinson = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-atkinson",
});

const daruma = Darumadrop_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-daruma",
});

export const metadata = {
  title: "Impawlse – Perita Game Dev",
  description:
    "Impawlse: cuida de adorables gatitos, decora su habitación y disfruta de minijuegos como laberintos. Demo final disponible.",
  keywords: [
    "Impawlse",
    "Perita Game Dev",
    "gatos",
    "cat simulator",
    "cozy game",
    "minijuegos",
    "decoración",
    "demo",
  ],
  authors: [
    { name: "Perita Game Dev" },
    { name: "kvalls" },
    { name: "thedunewitch" },
    { name: "It's Paula Art" },
    { name: "antoniomagic" },
    { name: "PinkDandy" },
    { name: "ElMetas" },
    { name: "Rappoporras" },
  ],
  openGraph: {
    title: "Impawlse – Perita Game Dev",
    description:
      "Cuida de adorables gatitos, decora su habitación y disfruta de minijuegos. Demo final – 165 MB disponible.",
    url: "https://peritagamedev.itch.io/impawlse",
    siteName: "Perita Game Dev",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "https://img.itch.zone/aW1nLzIxNTcwMjc4LnBuZw==/original/CEotD5.png",
        width: 1200,
        height: 630,
        alt: "Impawlse cover image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Impawlse – Perita Game Dev",
    description:
      "Cuida de gatitos, decora tu habitación y disfruta minijuegos. Demo final disponible (165 MB).",
    images: [
      "https://img.itch.zone/aW1nLzIxNTcwMjc4LnBuZw==/original/CEotD5.png",
    ],
    site: "@peritagamedev",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${atkinson.variable} ${daruma.variable}`}>
      <body>{children}</body>
    </html>
  );
}
