import Card from "./Card";
import jobs from "../data/jobs.json";
import search from "../Images/search.png";
import { useState } from "react";

const CardContainer = () => {
  const [SearchTitle, SetSearchTitle] = useState("");

  const handleSearch = (e) => {
    SetSearchTitle(e.target.value);
  };

  const newFilter = jobs.filter((job) => {
    return (
      job.Job.toLowerCase().includes(SearchTitle.toLowerCase()) ||
      job.company.toLowerCase().includes(SearchTitle.toLowerCase()) ||
      job.country.toLowerCase().includes(SearchTitle.toLowerCase())
    );
  });

  return (
    <div >
      {/*SEARCH BAR*/}
      <div className="mx-auto flex w-3/5 justify-between rounded-md bg-white py-2 px-3 -translate-y-9 dark:bg-zinc-800">
        <div className="flex space-x-3 items-center ">
          <img src={search} className="h-5"></img>
          <input
            type="text"
            placeholder="Filter by title,companies,country..."
            className="text-white py-3 outline-none dark:bg-zinc-800"
            onChange={handleSearch}
          />
        </div>
      </div>

      {/*GRID MENU*/}
      <div className="mx-auto w-4/5 grid gap-10 grid-cols-1 mt-18 mb-10 md:grid-cols-2 lg:grid-cols-3 ">
        {newFilter.map((job) => (
          <Card key={job.id} {...job} />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;

/* */
