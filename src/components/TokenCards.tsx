import React, { ReactNode } from 'react';

interface TokenCardsProps {
  children: ReactNode;  
  className?: string;
}

const TokenCards: React.FC<TokenCardsProps> = ({ children,className  }) => {
  return (
    <div className={`h-[161px] rounded-md bg-medium-purple p-4 flex flex-col items-center justify-center border border-[#6959d1] ${className}`}>
      {children} 
    </div>
  );
};

export default TokenCards;
