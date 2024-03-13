import React, { useState } from "react";
import Job from "./job";
import {FormattedMessage, useIntl, FormattedPlural} from 'react-intl';
import En from "../locales/en.json";
import Es from "../locales/es.json";

const JobsList = () => {
  const [offers] = useState([
    {
      id: "0001",
      name: "Manager",
      company: "Schneider Electric",
      salary: 4.5,
      city: "Bogotá, Colombia",
      date: "2019-03-26",
      views: 12500,
    },
    {
      id: "0002",
      name: "Software Engineer",
      company: "Google Inc.",
      salary: 20,
      city: "Palo Alto, CA, USA",
      date: "2019-03-27",
      views: 11250,
    },
    {
      id: "0003",
      name: "Nurse",
      company: "Clínica La Aurora",
      salary: 1,
      city: "Cali, Colombia",
      date: "2019-03-28",
      views: 12550,
    },
  ]);
  
  const intl = useIntl()
  const language = intl.locale;
  
  return (
    <div>
      <table className="table">
        <thead className={`table ${language === "es" ? "table-light" : "table-dark"}`}>
          <tr>
            <th scope="col">#</th>
            <th scope="col">
                <FormattedMessage id="Position"/>
            </th>
            <th scope="col">
                <FormattedMessage id="Company"/>
            </th>
            <th scope="col">
                <FormattedMessage id="Salary"/>
            </th>
            <th scope="col">
                <FormattedMessage id="City"/>
            </th>
            <th scope="col">
                <FormattedMessage id="PublicationDate"/>
            </th>
            <th scope="col">
                <FormattedMessage id="Views"/>
            </th>
          </tr>
        </thead>
        <tbody>
          {offers.map((e, i) => (
            <Job key={i} offer={e} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobsList;
