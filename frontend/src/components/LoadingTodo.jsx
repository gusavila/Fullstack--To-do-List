function LoadingTodo() {
  return (
    <div className="mx-auto w-full max-w-md rounded-2xl p-6 bg-gray-50">
      <div className="flex animate-pulse space-x-4">
        <div className="flex-1 space-y-3 py-1">
          <div className="h-10 max-w-36 rounded-xl mx-auto bg-gray-200"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 h-10 rounded-xl bg-gray-200"></div>
              <div className="col-span-1 h-10 rounded-xl bg-gray-200"></div>
            </div>
            <div className="h-14 rounded-xl bg-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoadingTodo;
