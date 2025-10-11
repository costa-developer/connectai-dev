// src/components/integrations/IntegrationCard.tsx

import React from 'react';
import { Card, CardContent, CardDescription } from '../ui/card';
import Image from 'next/image';
import { Badge } from '../ui/badge'; // Assumed component for status
import IntegrationTrigger from './IntegrationTrigger'; // Existing trigger logic

// A more complete integration item type
type IntegrationItem = {
  id: string;
  name: string;
  title: string;
  logo: string;
  description: string;
  modalDescription: string;
};

type Props = {
  item: IntegrationItem;
  isConnected: boolean;
}

const IntegrationCard = ({ item, isConnected }: Props) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardContent className="flex flex-col p-6 h-full justify-between">
        
        {/* TOP SECTION: Logo, Name, and Status */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            {/* Logo and Name */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 relative flex-shrink-0">
                <Image
                  sizes="100vw"
                  src={`https://ucarecdn.com/${item.logo}/`}
                  alt={`${item.name} Logo`}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold capitalize tracking-tight">
                {item.name}
              </h3>
            </div>
            
            {/* Connection Status Badge */}
            <Badge 
              variant={isConnected ? 'default' : 'secondary'} 
              className={isConnected ? 'bg-green-500 hover:bg-green-500' : 'bg-gray-200 text-gray-700 hover:bg-gray-200'}
            >
              {isConnected ? 'Connected' : 'Disconnected'}
            </Badge>
          </div>

          {/* Description */}
          <CardDescription className="text-sm text-gray-500 mt-2 min-h-[40px]"> 
            {item.description}
          </CardDescription>
        </div>

        {/* BOTTOM SECTION: Action Trigger */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <IntegrationTrigger
            connections={{ stripe: isConnected }} // Pass specific connection status if needed
            title={item.title}
            descrioption={item.modalDescription}
            logo={item.logo}
            name={item.name}
            isConnected={isConnected} // Use this prop to change button text/style
          />
        </div>

      </CardContent>
    </Card>
  );
};

export default IntegrationCard;