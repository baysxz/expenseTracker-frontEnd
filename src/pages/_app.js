import "@/styles/globals.css";
import { Toaster } from "sonner";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <Toaster />
    </div>
  );
}
