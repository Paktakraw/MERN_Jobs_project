import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Jobs from "./Jobs";
import Sidebar from "../../sidebar/Sidebar";
import Newsletter from "../../components/Newsletter";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // ดึงข้อมูลมาจากไฟล์ jobs เก็บไว้ที่ jobs โดยใช้ setJobs
  useEffect(() => {
    setIsLoading(true);
    // fetch("jobs.json")
fetch("http://localhost:5000/all-jobs")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setJobs(data);
        setIsLoading(false);
      });
  }, []);

  // handle input change
  // พิมพ์ค้นหาชื่องานใน Input จะถูกเก็บใน query และจะนำไปใช้กรองต่อตาม jobTitle
  const [query, setQuery] = useState("");
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };
  // console.log(query);

  // filter jobs by title โดยใช้ query ถ้า jobTitle มีข้อความที่ผู้ใช้พิมพ์ ก็จะถูกกรองออกมา
  const filteredItems = jobs.filter(
    (job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
  // console.log(filteredItems);

  // -------------- Radio filtering -----------------
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // ---------------- button based filtering -----------------
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  // calculate the index range (ปุ่มสำหรับเลือกหน้า content)
  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return { startIndex, endIndex };
  };

  // function for the next page
  const nextPage = () => {
    if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // function for the previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // main function
  // ---------- กรองข้อมูลที่รับมาใน query ก่อน เเละหลังจากนั้นจะใช้ selectedCategory เพื่อกรองข้อมูลเพิ่มเติมตามประเภทต่างๆ -------------
  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;

    // filtering input items
    // ถ้ามี query จะกรองข้อมูลตาม jobTitle
    if (query) {
      filteredJobs = filteredItems;
    }
    // category filtering
    // ถ้ามี selectedCategory จะกรองข้อมูลตามหมวดหมู่อื่นๆ
    if (selected) {
      filteredJobs = filteredJobs.filter(
        ({
          jobLocation,
          maxPrice,
          experienceLevel,
          salaryType,
          employmentType,
          postingDate,
        }) =>
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrice) <= parseInt(selected) ||
          postingDate >= selected ||
          salaryType.toLowerCase() === selected.toLowerCase() ||
          experienceLevel.toLowerCase() === selected.toLowerCase() ||
          employmentType.toLowerCase() === selected.toLowerCase()
      );
      console.log(filteredJobs);
    }
    // slice the data based on current page
    const { startIndex, endIndex } = calculatePageRange();
    filteredJobs = filteredJobs.slice(startIndex, endIndex);
    return filteredJobs.map((data, index) => <Card key={index} data={data} />);
  };

  const result = filteredData(jobs, selectedCategory, query);

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />

      {/* main content */}
      <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
        {/* left side */}
        <div className="bg-white p-4 rounded">
          <Sidebar handleChange={handleChange} handleClick={handleClick} />
        </div>

        {/* job card */}
        <div className="col-span-2 bg-white p-4">
          {isLoading ? (
            <p className="font-medium">Loading....</p>
          ) : result.length > 0 ? (
            <Jobs result={result} />
          ) : (
            <>
              <h3 className="text-lg font-bold mb-2">{result.length} Jobs</h3>
              <p>No data found!</p>
            </>
          )}

          {/* pagination here */}
          {result.length > 0 ? (
            <div className="flex justify-center mt-4 space-x-8">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="hover:underline"
              >
                Previous
              </button>
              <span className="mx-2">
                Page {currentPage} of {""}
                {Math.ceil(filteredItems.length / itemsPerPage)}
              </span>
              <button
                onClick={nextPage}
                disabled={
                  currentPage === Math.ceil(filteredItems.length / itemsPerPage)
                }
                className="hover:underline"
              >
                Next
              </button>
            </div>
          ) : (
            ""
          )}
        </div>

        {/* right side */}
        <div className="bg-white p-4 rounded">
          <Newsletter/>
        </div>
      </div>
    </div>
  );
};

export default Home;
