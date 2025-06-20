'use client';

interface FestivalPopupProps {
  festival: Festival;
  festivalDetails: any; // Replace with your actual details type
  onClose: () => void;
}

export default function FestivalPopup({ festival, festivalDetails, onClose }: FestivalPopupProps) {
  return (
    <div className="w-64 p-4">
      <h2 className="text-xl font-bold mb-2">{festival.name}</h2>
      <p className="text-gray-600 mb-4">{festival.city}</p>
      
      {festivalDetails?.subitems?.map((subitem: any, index: number) => (
        <div key={index} className="mb-3">
          <h3 className="font-semibold text-lg mb-1">- {subitem.name}</h3>
          <ul className="space-y-1">
            {subitem.details?.map((detail: string, i: number) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
      
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex justify-between mb-2">
          <span>Start Date</span>
          <span>End Date</span>
        </div>
        <div className="relative mt-2">
          <button 
            className="w-full mt-4 px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            onClick={() => {
              // Add details button click handler here
              console.log('Details button clicked');
            }}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}