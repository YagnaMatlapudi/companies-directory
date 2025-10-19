import React, { useState, useMemo } from 'react';

export default function Filter({ companies = [], setFiltered, setCurrentPage }) {
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('all');
  const [industry, setIndustry] = useState('all');
  const [sortOrder, setSortOrder] = useState('none');

  const locations = useMemo(() => {
    const s = Array.from(new Set(companies.map(c => c.location))).sort();
    return s;
  }, [companies]);

  const industries = useMemo(() => {
    const s = Array.from(new Set(companies.map(c => c.industry))).sort();
    return s;
  }, [companies]);

  const applyFilters = (opts = {}) => {
    const q = opts.search !== undefined ? opts.search : search;
    const loc = opts.location !== undefined ? opts.location : location;
    const ind = opts.industry !== undefined ? opts.industry : industry;
    const sort = opts.sortOrder !== undefined ? opts.sortOrder : sortOrder;

    let list = companies.slice();

    if (q && q.trim() !== '') {
      const qq = q.toLowerCase();
      list = list.filter(c =>
        c.name.toLowerCase().includes(qq) ||
        c.location.toLowerCase().includes(qq) ||
        c.industry.toLowerCase().includes(qq)
      );
    }
    if (loc !== 'all') list = list.filter(c => c.location === loc);
    if (ind !== 'all') list = list.filter(c => c.industry === ind);

    if (sort === 'asc') list.sort((a,b) => a.name.localeCompare(b.name));
    else if (sort === 'desc') list.sort((a,b) => b.name.localeCompare(a.name));

    setFiltered(list);
    if (setCurrentPage) setCurrentPage(0);
  };

  const reset = () => {
    setSearch(''); setLocation('all'); setIndustry('all'); setSortOrder('none');
    applyFilters({ search: '', location: 'all', industry: 'all', sortOrder: 'none' });
  };

  return (
    <div className="flex flex-col md:flex-row gap-3 md:items-end md:space-x-4">
      <div>
        <label className="block text-sm font-medium mb-1">Search</label>
        <input
          value={search}
          onChange={(e) => { setSearch(e.target.value); applyFilters({ search: e.target.value }); }}
          placeholder="Search by name, location or industry"
          className="w-72 p-2 border rounded"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Location</label>
        <select value={location} onChange={(e) => { setLocation(e.target.value); applyFilters({ location: e.target.value }); }} className="p-2 border rounded">
          <option value="all">All</option>
          {locations.map(l => <option key={l} value={l}>{l}</option>)}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Industry</label>
        <select value={industry} onChange={(e) => { setIndustry(e.target.value); applyFilters({ industry: e.target.value }); }} className="p-2 border rounded">
          <option value="all">All</option>
          {industries.map(i => <option key={i} value={i}>{i}</option>)}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Sort</label>
        <select value={sortOrder} onChange={(e) => { setSortOrder(e.target.value); applyFilters({ sortOrder: e.target.value }); }} className="p-2 border rounded">
          <option value="none">None</option>
          <option value="asc">Name A-Z</option>
          <option value="desc">Name Z-A</option>
        </select>
      </div>

      <div className="flex items-center">
        <button onClick={reset} className="mt-5 md:mt-0 px-4 py-2 bg-gray-200 rounded">Reset</button>
      </div>
    </div>
  );
}
