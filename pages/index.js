import Link from 'next/link'

const Index = () => (
  <div>
    <Link href="/about">
      <a>About Page</a>
    </Link>
    <p>About</p>
  </div>
    <div>
  <Link href="/bars">
    <a>Bars Page</a>
  </Link>
  <p>Drink up</p>
</div>
<div>
    <Link href="/home">
      <a>Home Page</a>
    </Link>
    <p>CHEERS</p>
  </div>
  <div>
  <Link href="/signin">
    <a>Sign In</a>
  </Link>
  <p>Tell us about you</p>
</div>
)

export default Index;