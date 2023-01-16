export function ModalSkeleton() {
  return (
    <div role="status" className="animate-pulse">
      <div className="flex items-center justify-center mt-4">
        <div className="flex items-center space-x-3">
          <svg
            className="text-gray-200 w-32 h-32 dark:text-gray-700"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
      <div className="m-auto h-2.5 bg-gray-500 rounded-full dark:bg-gray-700 w-32 mb-2 mt-3" />
      <div className="m-auto flex items-center justify-center mt-4">
        <div className=" w-20 h-2.5 bg-gray-500 rounded-full dark:bg-gray-700 mr-4" />
        <div className=" w-20 h-2.5 bg-gray-500 rounded-full dark:bg-gray-700 mr-3" />
      </div>
      <div className="h-2 bg-gray-500 rounded-full dark:bg-gray-700 max-w-[300px] mb-8 mt-5 m-auto" />
      <div className="h-2.5 bg-gray-500 rounded-full dark:bg-gray-700 max-w-[150px] mb-1 mt-3 m-auto" />
      <div className="h-2 bg-gray-500 rounded-full dark:bg-gray-700 max-w-[300px] mb-6 mt-3 m-auto" />
      <div className="h-2.5 bg-gray-500 rounded-full dark:bg-gray-700 max-w-[150px] mb-1 mt-5 m-auto" />
      <div className="h-2 bg-gray-500 rounded-full dark:bg-gray-700 max-w-[300px]  mb-6 mt-3 m-auto" />
      <div className="h-2.5 bg-gray-500 rounded-full dark:bg-gray-700 max-w-[150px] mb-1 mt-5 m-auto" />
      <div className="h-2 bg-gray-500 rounded-full dark:bg-gray-700 max-w-[300px]  mb-6 mt-3 m-auto" />
      <div className="h-2.5 bg-gray-500 rounded-full dark:bg-gray-700 max-w-[150px] mb-1 mt-5 m-auto" />
      <div className="h-2 bg-gray-500 rounded-full dark:bg-gray-700 max-w-[300px]  mb-6 mt-2 m-auto" />
    </div>
  );
}
