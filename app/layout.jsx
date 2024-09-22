import Nav from "@components/Nav";
import { Provider } from "@components/Provider";
import "@styles/globals.css";

export const metadata = {
  title: "Promptopia",
  description:
    "A community for sharing prompts and tools for creative expression",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
        <link rel="icon" href="app/favicon.ico" type="image/x-icon" />

      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
