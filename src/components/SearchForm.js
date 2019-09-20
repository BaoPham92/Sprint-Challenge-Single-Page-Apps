import React, { useState } from "react";

export default function SearchForm({ handleChange, search }) {

  return (
    <section className="search-form">
      <form>
        <label htmlFor="search">Search</label>
        <input
          type="text"
          name="search"
          placeholder="search"
          onChange={handleChange}
          value={search}
        />
      </form>
    </section>
  );
}
