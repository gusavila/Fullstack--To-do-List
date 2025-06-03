function LoadingTodo() {
  return (
    <div class="mx-auto w-full max-w-md rounded-2xl p-6 bg-gray-50">
      <div class="flex animate-pulse space-x-4">
        <div class="flex-1 space-y-3 py-1">
          <div class="h-10 max-w-36 rounded-xl mx-auto bg-gray-200"></div>
          <div class="space-y-3">
            <div class="grid grid-cols-3 gap-4">
              <div class="col-span-2 h-10 rounded-xl bg-gray-200"></div>
              <div class="col-span-1 h-10 rounded-xl bg-gray-200"></div>
            </div>
            <div class="h-14 rounded-xl bg-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoadingTodo;
