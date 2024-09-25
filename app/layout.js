import "./globals.css";

export const metadata = {
  title: "syfuddhin",
  description: "Portfolio application for Soab Mahmud Syfuddhin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
