import { Button } from '../button';

export function HeroSection({ onStartTrial }: { onStartTrial: () => void }) {
  return (
    <div className="hero-section">
      <Button onClick={onStartTrial}>
        Start Free Trial
      </Button>
    </div>
  );
}