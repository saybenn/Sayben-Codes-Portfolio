import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  if (process.browser) {
    var prevScrollPos = window.pageYOffset
    window.onscroll = function () {
      var nav = document.getElementById('nav-bar')!

      var currentScrollPos = window.pageYOffset

      if (prevScrollPos > currentScrollPos) {
        nav.style.top = '0'
      } else {
        nav.style.top = '-66px'
      }
      prevScrollPos = currentScrollPos
    }
  }
  return <Component {...pageProps} />
}

export default MyApp
