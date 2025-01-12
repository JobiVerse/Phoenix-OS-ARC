```javascript
import React from 'react';
import { Clock, Calendar, Star, CheckSquare, Plus, Map, GameController } from 'lucide-react';
import dynamic from 'next/dynamic';

// Prevent SSR for now
const PhoenixMobile = dynamic(() => import('../components/PhoenixMobile'), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <PhoenixMobile />
    </div>
  );
}
```
