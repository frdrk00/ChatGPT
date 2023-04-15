import SideBar from "@/components/SideBar";
import "@/styles/globals.css";

export const metadata = {
  title: "ChatGPT",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <div className="bg-[#202123] max-w-xs h-screen overflow-y-scroll md:min-w-[20rem]">
            <SideBar />
          </div>

          {/* ClientProvider - Notification */}

          <div className="bg-[#343541] flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
