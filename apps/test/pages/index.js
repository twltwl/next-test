import Link from 'next/link'

import {TestContainer} from '../containers'

const test = (<h1>asd</h1>)

const Index = () => (
  <div>
    <Link href="/start">
      About Page
    </Link>
    <p>Hello Next.js</p>
    <TestContainer />
  </div>
)

export default Index
