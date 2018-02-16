import Link from 'next/link'

import {TestContainer} from '../containers'

import Apa from 'shared/apa'

const test = (<h1>asd</h1>)

const Index = () => (
  <div>
    <Apa />
    <Link href="/start">
      About Page
    </Link>
    <p>Hello Next.js</p>
    <TestContainer />
  </div>
)

export default Index
