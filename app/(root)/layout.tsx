import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: 'Guillermo', lastName: 'Zamorano' };

  return (
    <main className="flex h-secreen w-full font-inter">
        <Sidebar user={loggedIn}/>
        {children}
    </main>
  );
}
