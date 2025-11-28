import { Bean } from 'lucide-react';
import type { SVGProps } from 'react';

export function BrandLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <div className="flex items-center gap-2" {...props}>
      <Bean className="h-7 w-7 text-primary" />
      <span className="font-headline text-2xl font-semibold text-foreground">
        KopiLoka
      </span>
    </div>
  );
}
