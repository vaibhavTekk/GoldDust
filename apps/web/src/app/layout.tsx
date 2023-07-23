import "../styles/globals.css";
import Sidebar from "../components/Sidebar";
// include styles from the ui package
// import "ui/styles.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Sidebar></Sidebar>
        <div className="ml-64 p-4 min-h-screen">
        {children}
        </div>
      </body>
    </html>
  );
}
