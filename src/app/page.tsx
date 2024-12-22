import Head from "next/head";
import { attributes, react as HomeContent } from "../content/home.md"

export default function Home() {
  const { title, cats }: {title: string, cats: {description: string, name: string}[]} = attributes;
  return (<>
    <Head>
      <script
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
          async
        ></script>
    </Head>
    <article>
      <h1>{title}</h1>
      <HomeContent/>
      <ul>
        {cats.map((cat, k) => (
            <li key={k}>
              <h2>{cat.name}</h2>
              <p>{cat.description}</p>
            </li>
        ))}
      </ul>
    </article>
  </>);
}
