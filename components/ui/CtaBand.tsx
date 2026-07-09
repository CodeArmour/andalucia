import type { PageId, ServiceId } from '@/lib/content';

type CtaBandProps = {
  title: string;
  subtitle: string;
  primary: string;
  secondary?: string;
  onNavigate: (page: PageId, service?: ServiceId) => void;
  primaryPage?: PageId;
  secondaryPage?: PageId;
};

export default function CtaBand({ title, subtitle, primary, secondary, onNavigate, primaryPage = 'contact', secondaryPage = 'services' }: CtaBandProps) {
  return (
    <div className="cta-band">
      <div className="cta-inner">
        <div><div className="cta-title">{title}</div><div className="cta-sub">{subtitle}</div></div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <button className="btn btn-dark" onClick={() => onNavigate(primaryPage)}>{primary}</button>
          {secondary ? <button className="btn btn-ghost-dark" onClick={() => onNavigate(secondaryPage)}>{secondary}</button> : null}
        </div>
      </div>
    </div>
  );
}
