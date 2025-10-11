// src/components/integrations/IntegrationsList.tsx

import { INTEGRATION_LIST_ITEMS } from '@/constants/integrations';
import IntegrationCard from './IntegrationCard'; // New component for single card UI

type Connections = {
  stripe: boolean;
  // future_integration: boolean;
}

type Props = {
  connections: Connections;
}

const IntegrationsList = ({ connections }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {INTEGRATION_LIST_ITEMS.map((item) => (
        <IntegrationCard
          key={item.id}
          item={item}
          isConnected={connections[item.name.toLowerCase() as keyof Connections] || false}
        />
      ))}
    </div>
  );
}

export default IntegrationsList;