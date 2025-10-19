import React from 'react';

export default function CompanyCard({ company }) {
  return (
    <div className="bg-white shadow rounded p-4">
      <h2 className="text-xl font-medium">{company.name}</h2>
      <p className="text-sm text-gray-600">Location: {company.location}</p>
      <p className="text-sm text-gray-600">Industry: {company.industry}</p>
    </div>
  );
}
