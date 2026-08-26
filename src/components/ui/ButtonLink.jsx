import { Link } from 'react-router-dom'

export default function ButtonLink({
  to,
  href,
  children,
  variant = 'primary',
  size,
  arrow = false,
  className = '',
  ...rest
}) {
  const cls = ['btn', `btn--${variant}`, size === 'sm' ? 'btn--sm' : '', className]
    .filter(Boolean)
    .join(' ')

  const inner = (
    <>
      <span>{children}</span>
      {arrow && (
        <span className="btn__arrow" aria-hidden="true">
          →
        </span>
      )}
    </>
  )

  if (href) {
    return (
      <a className={cls} href={href} {...rest}>
        {inner}
      </a>
    )
  }

  return (
    <Link className={cls} to={to} {...rest}>
      {inner}
    </Link>
  )
}
