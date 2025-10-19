import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CompanyCard from '../components/CompanyCard';
import Filter from '../components/Filter';
import Pagination from '../components/Pagination';

export default function Home() {
  const [companies, setCompanies] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;

  useEffect(() => {
    axios.get('/data/companies.json')
      .then(res => {
        setCompanies(res.data);
        setFiltered(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load companies.');
        setLoading(false);
      });
  }, []);

  const pageCount = Math.ceil(filtered.length / itemsPerPage);
  const currentItems = filtered.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4">Companies Directory</h1>

      <Filter companies={companies} setFiltered={setFiltered} setCurrentPage={setCurrentPage} />

      {loading && <p>Loading companies...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {!loading && !error && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {currentItems.length === 0 ? (
              <p className="col-span-full">No companies found.</p>
            ) : (
              currentItems.map(c => <CompanyCard key={c.id} company={c} />)
            )}
          </div>

          <div className="mt-6">
            <Pagination pageCount={pageCount} onPageChange={handlePageClick} />
          </div>
        </>
      )}
    </div>
  );
}
