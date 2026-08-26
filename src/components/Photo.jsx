import PlaceholderArt from './PlaceholderArt.jsx'

export default function Photo({
  image,
  className = '',
  ratio,
  eager = false,
  showTag = true,
}) {
  const src = image?.src || null
  const alt = image?.alt || ''
  const style = ratio ? { aspectRatio: ratio } : undefined

  return (
    <figure className={`photo ${className}`} style={style}>
      {src ? (
        <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} />
      ) : (
        <>
          <PlaceholderArt variant={image?.variant ?? 0} />
          {showTag && <span className="ph-tag">Add photo</span>}
        </>
      )}
    </figure>
  )
}
