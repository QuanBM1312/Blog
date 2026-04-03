export default function BlogLoading() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 pt-32 animate-pulse">
      {/* Breadcrumb skeleton */}
      <div className="flex items-center gap-2 mb-8">
        <div className="h-3 w-16 bg-muted rounded" />
        <div className="h-3 w-3 bg-muted rounded-full" />
        <div className="h-3 w-24 bg-muted rounded" />
      </div>

      {/* Header skeleton */}
      <div className="mb-12 border-b border-border pb-8">
        <div className="h-10 w-3/4 bg-muted rounded mb-4" />
        <div className="h-4 w-1/3 bg-muted rounded" />
      </div>

      {/* Sections */}
      <div className="space-y-16">
        {[1, 2].map(i => (
          <div key={i}>
            {/* Section title */}
            <div className="h-8 w-56 bg-muted rounded mb-8" />
            {/* Post grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map(j => (
                <div key={j} className="border border-border rounded-lg overflow-hidden">
                  <div className="h-48 bg-muted" />
                  <div className="p-5 space-y-3">
                    <div className="h-5 w-full bg-muted rounded" />
                    <div className="h-4 w-2/3 bg-muted rounded" />
                    <div className="h-3 w-1/3 bg-muted rounded mt-2" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
