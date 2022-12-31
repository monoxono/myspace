const YEAR = new Date().getFullYear()

export default {
  footer: (
    <footer>
      <small>
        <time>2022-{YEAR}</time> © monoxono.
        <a href="/feed.xml">RSS</a>
      </small>
      <style jsx>{`
        footer {
          margin-top: 8rem;
        }
        a {
          float: right;
        }
      `}</style>
    </footer>
  ),
}
