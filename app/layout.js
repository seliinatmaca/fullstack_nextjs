import "./globals.css";
import Layout from "@/components/layout/Layout";

export const metadata = {
  title: "Todo Uygulaması",
  description: "Zustand + Next + MongoDB CRUD",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
