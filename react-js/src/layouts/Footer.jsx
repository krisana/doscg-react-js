import React from 'react'

export default function Footer() {
  return (
    <footer className="bd-footer p-3 p-md-5 mt-5 text-center text-muted bg-light">
      <div className="container">
        <ul className="bd-footer-links">
          <li><a href="https://github.com/krisana">GitHub</a></li>
          <li><a href="https://twitter.com/getbootstrap">Twitter</a></li>
          <li>
            <a href="https://getbootstrap.com/docs/4.5/examples/">Examples</a>
          </li>
          <li>
            <a href="https://getbootstrap.com/docs/4.5/about/overview/">About</a>
          </li>
        </ul>
        <p className="mb-0">
          Designed and built with all the love in the world by the <a href="https://getbootstrap.com/docs/4.5/about/team/">Bootstrap team</a> with the help of <a href="https://github.com/twbs/blog/graphs/contributors">our contributors</a>.
        </p>
        <p className="mb-0">Currently v4.5.3. The Bootstrap Blog is <a href="https://github.com/twbs/blog">open source</a> under the MIT license.</p>
      </div>
    </footer>
  )
}
