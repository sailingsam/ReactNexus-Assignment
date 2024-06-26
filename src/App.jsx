import { useState } from "react";
import speakersData from "../SpeakersData.json";
import attendeesData from "../attendeesData.json";
import MainPage from "./MainPage";
import MCs from "../src/Components/DataTable/MCs/MCtable";
import DataTable from "./Components/DataTable/DataTable/DataTable";
import Disclamer from "./Components/Disclamer/Disclamer";

function App() {
  return (
    <>
      <Disclamer />
      <MainPage />
      <MCs />
      <div className="w-full h-3/4 xl:flex justify-around items-start p-5 mt-5">
        <DataTable
          title="Speakers"
          data={speakersData}
          columns={speakersColumns}
        />
        <DataTable
          title="Attendees (Sample data)"
          data={attendeesData}
          columns={attendeesColumns}
        />
      </div>
    </>
  );
}

export default App;

const speakersColumns = [
  { header: "Name", accessor: "name" },
  { header: "Title", accessor: "title" },
  { header: "Company", accessor: "company" },
];

const attendeesColumns = [
  { header: "Name", accessor: "name" },
  { header: "Email", accessor: "email" },
  { header: "Contact", accessor: "contact" },
];
