// ─── Primitive building blocks ────────────────────────────────────────────────

export function SkLine({ className = '' }) {
  return <div className={`animate-pulse bg-gray-200 rounded-full ${className}`} />;
}

export function SkBox({ className = '' }) {
  return <div className={`animate-pulse bg-gray-200 rounded-xl ${className}`} />;
}

export function SkCircle({ className = '' }) {
  return <div className={`animate-pulse bg-gray-200 rounded-full ${className}`} />;
}

// Dark variants (for dark-bg pages)
export function SkLineDark({ className = '' }) {
  return <div className={`animate-pulse bg-white/10 rounded-full ${className}`} />;
}

export function SkBoxDark({ className = '' }) {
  return <div className={`animate-pulse bg-white/10 rounded-xl ${className}`} />;
}

// ─── Page-level skeleton layouts ─────────────────────────────────────────────

/** Root / generic full-page skeleton */
export function PageSkeleton() {
  return (
    <div className="min-h-screen bg-white">
      {/* Dark hero placeholder */}
      <div className="bg-primary h-64 w-full animate-pulse" />
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-10">
        {/* Section heading */}
        <div className="space-y-3 text-center">
          <SkLine className="h-3 w-24 mx-auto" />
          <SkLine className="h-8 w-72 mx-auto" />
          <SkLine className="h-4 w-96 mx-auto" />
        </div>
        {/* 3-col card grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl p-6 space-y-4">
              <SkBox className="h-32 w-full" />
              <SkLine className="h-4 w-3/4" />
              <SkLine className="h-3 w-full" />
              <SkLine className="h-3 w-5/6" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Dashboard skeleton — stats grid + table */
export function DashboardSkeleton() {
  return (
    <div className="min-h-screen bg-[#F4F5F7] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header card */}
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
          <SkLine className="h-8 w-64 mb-3" />
          <SkLine className="h-4 w-80" />
        </div>

        {/* 4-col stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-center gap-4">
              <SkBox className="w-14 h-14 flex-shrink-0" />
              <div className="space-y-2 flex-1">
                <SkLine className="h-3 w-20" />
                <SkLine className="h-7 w-12" />
              </div>
            </div>
          ))}
        </div>

        {/* 3-col secondary stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-center gap-4">
              <SkBox className="w-14 h-14 flex-shrink-0" />
              <div className="space-y-2 flex-1">
                <SkLine className="h-3 w-16" />
                <SkLine className="h-6 w-10" />
              </div>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm">
          <div className="px-8 py-6 border-b border-gray-100 bg-gray-50/50">
            <SkLine className="h-5 w-48" />
          </div>
          <div className="p-6">
            <TableRowsSkeleton rows={4} cols={5} />
          </div>
        </div>
      </div>
    </div>
  );
}

/** Reusable table rows skeleton */
export function TableRowsSkeleton({ rows = 4, cols = 4 }) {
  return (
    <div className="space-y-3">
      {/* Header row */}
      <div className="flex gap-4 pb-3 border-b border-gray-100">
        {Array.from({ length: cols }).map((_, i) => (
          <SkLine key={i} className="h-3 flex-1" />
        ))}
      </div>
      {/* Data rows */}
      {Array.from({ length: rows }).map((_, r) => (
        <div key={r} className="flex gap-4 py-3 border-b border-gray-50">
          {Array.from({ length: cols }).map((_, c) => (
            <SkLine key={c} className={`h-4 flex-1 ${c === 0 ? 'w-1/4' : ''}`} />
          ))}
        </div>
      ))}
    </div>
  );
}

/** Refunds table skeleton */
export function RefundsSkeleton() {
  return (
    <div className="space-y-6">
      {/* 2 stat cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-center gap-4">
            <SkBox className="w-14 h-14 flex-shrink-0" />
            <div className="space-y-2 flex-1">
              <SkLine className="h-3 w-32" />
              <SkLine className="h-8 w-20" />
            </div>
          </div>
        ))}
      </div>
      {/* Table */}
      <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm">
        <div className="px-8 py-6 border-b border-gray-100 bg-gray-50/50">
          <SkLine className="h-5 w-36" />
        </div>
        <div className="p-6">
          <TableRowsSkeleton rows={3} cols={3} />
        </div>
      </div>
    </div>
  );
}

/** Activity list skeleton */
export function ActivitySkeleton() {
  return (
    <ul className="space-y-4 px-5 py-2">
      {Array.from({ length: 5 }).map((_, i) => (
        <li key={i} className="flex items-start gap-3">
          <SkBox className="w-1 h-12 rounded-full flex-shrink-0" />
          <div className="space-y-2 flex-1">
            <SkLine className="h-3 w-full" />
            <SkLine className="h-3 w-3/4" />
          </div>
        </li>
      ))}
    </ul>
  );
}

/** Newsroom skeleton */
export function NewsroomSkeleton() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-primary h-72 animate-pulse" />
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-10">
        {/* Featured article */}
        <div className="bg-gray-50 rounded-3xl overflow-hidden md:flex">
          <SkBox className="md:w-1/2 h-72 rounded-none" />
          <div className="md:w-1/2 p-10 space-y-4">
            <SkLine className="h-3 w-24" />
            <SkLine className="h-7 w-full" />
            <SkLine className="h-7 w-4/5" />
            <SkLine className="h-4 w-full" />
            <SkLine className="h-4 w-full" />
            <SkLine className="h-4 w-2/3" />
            <SkLine className="h-4 w-20 mt-4" />
          </div>
        </div>
        {/* 2 smaller cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl overflow-hidden">
              <SkBox className="h-52 rounded-none" />
              <div className="p-6 space-y-3">
                <SkLine className="h-3 w-20" />
                <SkLine className="h-6 w-full" />
                <SkLine className="h-4 w-full" />
                <SkLine className="h-4 w-4/5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Track page skeleton */
export function TrackSkeleton() {
  return (
    <div className="min-h-screen bg-white">
      <div className="grid md:grid-cols-3 xs:grid-cols-1 xs:mt-[25%] md:mt-[7%] w-[90%] mx-auto gap-4 pb-10">
        {/* Main card (col-span-2) */}
        <div className="bg-white rounded-md p-4 shadow-lg col-span-2 space-y-5">
          {/* Tracking badge */}
          <SkLine className="h-5 w-36 rounded" />
          {/* Status row */}
          <div className="flex items-center gap-3">
            <SkCircle className="w-10 h-10 flex-shrink-0" />
            <div className="space-y-2 flex-1">
              <SkLine className="h-6 w-40" />
              <SkLine className="h-3 w-48" />
              <SkLine className="h-3 w-32" />
            </div>
          </div>
          {/* Progress bar */}
          <SkBox className="h-4 w-full rounded-full" />
          <div className="border-t border-gray-100 pt-4 space-y-4">
            {/* Shipment details */}
            <div className="flex items-center gap-3">
              <SkCircle className="w-10 h-10 flex-shrink-0" />
              <SkLine className="h-5 w-40" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="space-y-1">
                  <SkLine className="h-3 w-20" />
                  <SkLine className="h-4 w-32" />
                </div>
              ))}
            </div>
          </div>
          {/* Map placeholder */}
          <SkBox className="h-64 w-full rounded-lg mt-2" />
        </div>
        {/* Sidebar card */}
        <div className="space-y-4">
          <div className="bg-white rounded-md p-4 shadow-lg space-y-4">
            <SkLine className="h-5 w-32" />
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex items-start gap-3">
                <SkCircle className="w-7 h-7 flex-shrink-0" />
                <div className="space-y-1 flex-1">
                  <SkLine className="h-3 w-full" />
                  <SkLine className="h-3 w-4/5" />
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-md p-4 shadow-lg space-y-3">
            <SkLine className="h-5 w-28" />
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex items-center gap-3">
                <SkCircle className="w-6 h-6 flex-shrink-0" />
                <SkLine className="h-3 flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/** FAQ page skeleton */
export function FaqsSkeleton() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-primary h-72 animate-pulse" />
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-4">
        <SkLine className="h-8 w-56 mb-8" />
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="bg-gray-50 rounded-xl p-5 flex justify-between items-center">
            <SkLine className={`h-4 ${i % 3 === 0 ? 'w-3/4' : i % 3 === 1 ? 'w-2/3' : 'w-4/5'}`} />
            <SkBox className="w-6 h-6 rounded-full flex-shrink-0 ml-4" />
          </div>
        ))}
      </div>
    </div>
  );
}

/** Contact form skeleton */
export function ContactSkeleton() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-primary h-72 animate-pulse" />
      <div className="max-w-5xl mx-auto px-6 py-16 md:flex gap-12">
        <div className="md:w-1/2 space-y-5">
          <SkLine className="h-8 w-48 mb-2" />
          <SkLine className="h-4 w-full" />
          <SkLine className="h-4 w-5/6" />
          <div className="space-y-3 mt-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex items-center gap-3">
                <SkCircle className="w-10 h-10 flex-shrink-0" />
                <div className="space-y-1 flex-1">
                  <SkLine className="h-3 w-16" />
                  <SkLine className="h-4 w-40" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-1/2 space-y-4 mt-8 md:mt-0">
          {Array.from({ length: 4 }).map((_, i) => (
            <SkBox key={i} className="h-12 w-full" />
          ))}
          <SkBox className="h-28 w-full" />
          <SkBox className="h-12 w-36" />
        </div>
      </div>
    </div>
  );
}

/** About page skeleton */
export function AboutSkeleton() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-primary h-96 animate-pulse" />
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        <div className="md:flex gap-12 items-center">
          <SkBox className="md:w-1/2 h-72" />
          <div className="md:w-1/2 space-y-4 mt-6 md:mt-0">
            <SkLine className="h-3 w-20" />
            <SkLine className="h-8 w-3/4" />
            <SkLine className="h-4 w-full" />
            <SkLine className="h-4 w-full" />
            <SkLine className="h-4 w-2/3" />
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="space-y-3 text-center">
              <SkCircle className="w-16 h-16 mx-auto" />
              <SkLine className="h-5 w-32 mx-auto" />
              <SkLine className="h-4 w-full" />
              <SkLine className="h-4 w-4/5 mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Receive page skeleton */
export function ReceiveSkeleton() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-primary h-72 animate-pulse" />
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-8">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="bg-gray-50 rounded-2xl p-6 space-y-3">
            <SkLine className="h-5 w-40" />
            <SkLine className="h-4 w-full" />
            <SkLine className="h-4 w-5/6" />
          </div>
        ))}
      </div>
    </div>
  );
}

/** Admin panel skeleton */
export function AdminSkeleton() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-100 p-6 space-y-4 hidden md:block">
        <SkLine className="h-8 w-32 mb-6" />
        {Array.from({ length: 6 }).map((_, i) => (
          <SkLine key={i} className={`h-9 ${i % 2 === 0 ? 'w-full' : 'w-4/5'}`} />
        ))}
      </div>
      {/* Main content */}
      <div className="flex-1 p-8 space-y-8">
        <SkLine className="h-8 w-48" />
        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100 space-y-2">
              <SkLine className="h-3 w-20" />
              <SkLine className="h-7 w-14" />
            </div>
          ))}
        </div>
        {/* Table */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 space-y-4">
          <SkLine className="h-5 w-32" />
          <TableRowsSkeleton rows={5} cols={5} />
        </div>
      </div>
    </div>
  );
}

/** Admin content-area table skeleton (used inside dashboard layout) */
export function AdminTableSkeleton() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <SkLine className="h-8 w-48" />
        <SkLine className="h-4 w-64" />
      </div>
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
          <SkLine className="h-5 w-36" />
          <SkLine className="h-8 w-24 rounded-lg" />
        </div>
        <div className="p-6">
          <TableRowsSkeleton rows={6} cols={5} />
        </div>
      </div>
    </div>
  );
}

/** Admin content-area form skeleton (create/add pages) */
export function AdminFormSkeleton() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <SkLine className="h-8 w-52" />
        <SkLine className="h-4 w-80" />
      </div>
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="space-y-2">
              <SkLine className="h-3 w-24" />
              <SkBox className="h-11 w-full" />
            </div>
          ))}
        </div>
        <div className="pt-4 border-t border-gray-100 space-y-6">
          <SkLine className="h-4 w-40" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="space-y-2">
                <SkLine className="h-3 w-24" />
                <SkBox className="h-11 w-full" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end">
          <SkBox className="h-11 w-36 rounded-xl" />
        </div>
      </div>
    </div>
  );
}

/** Service alerts skeleton */
export function ServiceAlertsSkeleton() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-primary h-72 animate-pulse" />
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-6">
        <SkLine className="h-6 w-36 mb-4" />
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="bg-white border-l-4 border-gray-200 rounded-2xl p-6 shadow-sm space-y-3">
            <SkLine className="h-3 w-24" />
            <SkLine className="h-6 w-3/4" />
            <SkLine className="h-4 w-full" />
            <SkLine className="h-4 w-5/6" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PageSkeleton;
