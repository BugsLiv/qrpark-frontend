export default function Loading() {
    return (
      <div className="absolute inset-0 z-50 flex items-center justify-center bg-white/60 backdrop-blur-sm">
        <div className="flex flex-col items-center gap-3">
  
          <div className="w-12 h-12 border-4 border-gray-200 border-t-buttonbg rounded-full animate-spin"></div>
  
          <p className="text-sm font-medium text-gray-600">
            Loading...
          </p>
  
        </div>
      </div>
    );
  }