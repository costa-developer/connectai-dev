// src/app/settings/integrations/page.tsx

import { onGetPaymentConnected } from '@/actions/settings';
import PageHeader from '@/components/layout/PageHeader'; // New dedicated component
import IntegrationsList from '@/components/integrations/IntegrationsList';

const IntegrationsPage = async () => {
  // Assume more integrations are added later, not just stripe
  const isStripeConnected = await onGetPaymentConnected();

  // Create a structured data object for connections
  const connectionsStatus = {
    stripe: isStripeConnected,
    // future_integration: false,
  };

  return (
    <div className="p-6">
      <PageHeader
        title="App Integrations"
        description="Connect popular services to automate tasks and streamline your workflow."
      />
      <div className="mt-8">
        <IntegrationsList connections={connectionsStatus} />
      </div>
    </div>
  );
};

export default IntegrationsPage;