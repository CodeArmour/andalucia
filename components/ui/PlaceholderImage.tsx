type PlaceholderImageProps = {
  className?: string;
  label: string;
  src?: string;
  alt?: string;
  style?: React.CSSProperties;
};

export function placeholderSrc(label: string) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1400" height="900" viewBox="0 0 1400 900"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1E4E72"/><stop offset="0.58" stop-color="#163B57"/><stop offset="1" stop-color="#C2753F"/></linearGradient><pattern id="p" width="64" height="64" patternUnits="userSpaceOnUse"><path d="M64 0H0V64" fill="none" stroke="rgba(255,246,229,.12)" stroke-width="1"/></pattern></defs><rect width="1400" height="900" fill="url(#g)"/><rect width="1400" height="900" fill="url(#p)"/><circle cx="1110" cy="170" r="220" fill="rgba(255,246,229,.08)"/><text x="80" y="800" font-family="Arial, sans-serif" font-size="38" font-weight="700" fill="rgba(255,246,229,.78)">${label}</text><text x="80" y="842" font-family="Arial, sans-serif" font-size="18" letter-spacing="4" fill="rgba(255,246,229,.48)">TEMPORARY IMAGE PLACEHOLDER</text></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

export default function PlaceholderImage({ className, label, src, alt, style }: PlaceholderImageProps) {
  // Placeholder assets intentionally use generated data-URI images until final photos are supplied.
  // eslint-disable-next-line @next/next/no-img-element
  return <img className={className} src={src ?? placeholderSrc(label)} alt={alt ?? label} style={style} />;
}
