import Link from 'next/link';
import { pagePaths } from '@/lib/content';

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-inner">
        <div className="eyebrow">404</div>
        <h1 className="heading">
          Page not <em>found.</em>
        </h1>
        <p>
          The page you are looking for may have moved. Continue exploring
          Andalucia Engineering Consulting through the key sections below.
        </p>
        <div className="not-found-links">
          <Link href={pagePaths.home}>Home</Link>
          <Link href={pagePaths.services}>Services</Link>
          <Link href={pagePaths.projects}>Projects</Link>
          <Link href={pagePaths.contact}>Contact</Link>
        </div>
      </div>
    </main>
  );
}
