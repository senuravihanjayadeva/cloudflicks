import '@/styles/globals.css'
import "@/plugins/playlist.css";
import "@/plugins/custom-chapter.css";
import "@/plugins/custom-chapter-seekbar.css";
import "@/plugins/custom-annotation.css";
import "@/plugins/videojs.framebyframe.css";
import "@/plugins/custom-internal-concept-check.css";
import "@/plugins/custom-settings.css";

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
