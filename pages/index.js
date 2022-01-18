import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Simpi's Hell</title>
        <link rel="icon" href="/simp.ico" />
      </Head>

      <main>
        <Header title="Welcome to my hell!" />
        <p className="description">
          Oh god oh no oh fuck i spilt my bottle of cum and now im wet 😳😳😳
    I Like cum sooooooo much.
        </p>
      </main>

      <Footer />
    </div>
  )
}
