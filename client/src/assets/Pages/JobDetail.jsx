import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import PageHeader from "../../components/PageHeader";

const JobDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/all-jobs/${id}`)
      .then((res) => res.json())
      .then((data) => setJob(data));
  }, []);

  const handleApply = async () => {
    const { value: url } = await Swal.fire({
      input: "url",
      inputLabel: "URL address",
      inputPlaceholder: "Enter the URL",
    });
    if (url) {
      Swal.fire(`Entered URL: ${url}`);
    }
  };

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <PageHeader title={"Single Job Page"} path={"Single Job"} />
      <h2 className="mt-10">JobDetail: {id}</h2>
      <h1>{job.jobTitle}</h1>

      <button className="bg-blue px-8 py-2 text-white mt-5" onClick={handleApply}>
        Apply Now
      </button>

      {/* detail */}
      <div className="grid lg:grid-cols-3 grid-cols-1 mt-10 gap-20">
        <div>
          <h1 className="text-xl font-semibold text-primary">Benefits</h1>
          <div className="mt-3">
            <p>
              1. ${job.minPrice} - ${job.maxPrice}
            </p>
            <p>2. Disability insurance</p>
            <p>3. Employee discount</p>
            <p>4. Flexible spending account</p>
            <p>5. Health insurance</p>
            <p>6. Paid time off</p>
            <p>7. Vision insurance</p>
            <p>8. Volunteer time off</p>
            <p>9. Dental insurance</p>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-semibold text-primary">OutLine</h1>
          <div className="mt-3">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              quos doloremque excepturi quasi reprehenderit eveniet tempore,
              officiis, aspernatur necessitatibus eum cupiditate fuga laborum
              cum iste ad quaerat, autem odit ut. Veniam necessitatibus itaque
              iusto nisi harum odit cum maxime a, repellendus accusamus hic.
              <div className="mt-5"></div>
              cumque similique voluptates modi et officia voluptatibus quae amet
              maiores vel pariatur? Vero repellat iure necessitatibus iusto
              recusandae nam qui.
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-semibold text-primary">Future Growth</h1>
          <div className="mt-3">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              quos doloremque excepturi quasi reprehenderit eveniet tempore,
              officiis, aspernatur necessitatibus eum cupiditate fuga laborum.
              <div className="mt-5"></div>
              cum iste ad quaerat, autem odit ut. Veniam necessitatibus itaque
              iusto nisi harum odit cum maxime a, repellendus accusamus hic
              cumque similique voluptates modi et officia voluptatibus quae amet
              maiores vel pariatur? Vero repellat iure necessitatibus iusto
              recusandae nam qui.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full mt-10 mb-10">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
          explicabo aspernatur tempora exercitationem, ex incidunt saepe ea
          quibusdam labore et eum. Similique hic, error rerum nesciunt enim et
          officia commodi voluptatibus ullam iste? Modi impedit optio voluptas.
          Adipisci, accusamus molestiae quisquam necessitatibus aliquam,
          molestias, laudantium perspiciatis officia ex similique eum labore
          ipsam aspernatur perferendis. Eveniet maiores beatae aspernatur
          similique vitae laudantium et, dignissimos perferendis. Facere officia
          quae quasi quibusdam rem, sapiente saepe dolores nulla quod modi
          aliquam adipisci enim ullam quis asperiores illo recusandae optio
          velit dolorem ut id debitis! Vitae qui recusandae nihil enim nulla
          cumque totam ut aperiam repellat et eveniet similique, vero saepe.
          Officiis sapiente velit minima possimus at, voluptates placeat
          asperiores tempora nemo illum quis, rem sed. Deleniti consectetur
          nobis autem incidunt, ratione, eos praesentium nostrum officiis
          aliquam consequatur eaque commodi, magnam facilis dolor placeat?
          Laboriosam porro ad, corrupti voluptates adipisci quas! Dolor nobis
          sequi ea magni ut nihil ducimus, perferendis aut earum, illum
          inventore suscipit doloremque quibusdam ipsum cumque quasi voluptate,
          praesentium velit aliquid beatae. Officia saepe itaque, cum, nihil
          fugit, sequi inventore voluptatum adipisci error odit dolore
          recusandae pariatur totam quod repudiandae at maiores. Iste illum
          fugit deserunt possimus aperiam fuga illo aliquid voluptatum?
        </p>
      </div>
    </div>
  );
};

export default JobDetail;
