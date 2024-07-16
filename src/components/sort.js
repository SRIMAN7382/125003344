import React from 'react';

const sort = ({ company, setCompany, category, setCategory, top, setTop, minPrice, setMinPrice, maxPrice, setMaxPrice }) => {
  return (
    <div>
      <select value={company} onChange={(e) => setCompany(e.target.value)}>
        <option value="AMZ">AMZ</option>
        <option value="FLP">FLP</option>
        <option value="SNP">SNP</option>
        <option value="MYN">MYN</option>
        <option value="AZO">AZO</option>
      </select>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Phone">Phone</option>
        <option value="Computer">Computer</option>
        <option value="TV">TV</option>
        <option value="Earphone">Earphone</option>
        <option value="Laptop">Laptop</option>
        {/* Add other categories */}
      </select>
      <input type="number" value={top} onChange={(e) => setTop(e.target.value)} placeholder="Top N" />
      <input type="number" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} placeholder="Min Price" />
      <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} placeholder="Max Price" />
    </div>
  );
};

export default sort;
