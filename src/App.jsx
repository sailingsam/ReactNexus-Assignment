import { useState } from "react";
import MainPage from "./MainPage";
import MCs from "../src/Components/DataTable/MCs/MCtable";
import DataTable from "./Components/DataTable/DataTable/DataTable";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Disclamer />
      <MainPage />
      <MCs />
      <div className="w-full h-3/4 xl:flex justify-around items-start p-5 mt-5">
        <DataTable title="Speakers" data={speakersData} columns={speakersColumns} />
        <DataTable title="Attendees" data={attendeesData} columns={attendeesColumns} />
      </div>
    </>
  );
}

export default App;

const speakersData = [
  {
    name: "Tejas Kumar",
    title: "DevRel Consultant",
  },
  {
    name: "Varsha Saha",
    title: "Engineering Manager",
    company: "Flipkart",
  },
  {
    name: "Sanket Sahu",
    title: "Founder",
    company: "GeekyAnts",
  },
  {
    name: "Matheus Albuquerque",
    title: "Sr. Software Engineer",
    company: "Medallia",
  },
  {
    name: "Tapas Adhikary",
    title: "Founder",
    company: "ReactPlay",
  },
  {
    name: "Tanisha Sabherwal",
    title: "Senior Software Engineer",
    company: "Gameskraft",
  },
  {
    name: "Kamlesh Chandnani",
    title: "Principal Frontend Engineer",
    company: "Razorpay",
  },
  {
    name: "Ruchi Rai",
    title: "Senior Software Engineer",
    company: "Atlassian",
  },
  {
    name: "Prateek Bhatnagar",
    title: "Staff Software Engineer",
    company: "Coinbase",
  },
  {
    name: "Sudhanshu Yadav",
    title: "Frontend Architect",
    company: "Prophecy",
  },
  {
    name: "Aakansha Doshi",
    title: "Building Excalidraw | FOSS Enthusiast",
  },
  {
    name: "Mo Khazali",
    title: "Head of Mobile",
    company: "Theodo UK",
  },
  {
    name: "Nishan Bende",
    title: "Software Engineer",
    company: "Showtime",
  },
  {
    name: "Shreya Mishra",
    title: "Mobile Dev",
    company: "Groww",
  },
  {
    name: "Shoaib Khan",
    title: "UI Engineer 3",
    company: "Flipkart",
  },
  {
    name: "Meenu Makkar",
    title: "Software Developer",
    company: "GeekyAnts",
  },
  {
    name: "Sahil Kalyani",
    title: "Frontend Engineer",
    company: "Amazon",
  },
  {
    name: "Rohan Prasad",
    title: "Software Engineer",
    company: "Microsoft",
  },
  {
    name: "Aditya Pahilwani",
    title: "SDE - 1",
    company: "Groww",
  },
  {
    name: "Darshan Ponikar",
    title: "Software Engineer",
    company: "GeekyAnts",
  },
  {
    name: "Kapil Mishra",
    title: "Senior Product Manager",
    company: "Vonage",
  },
  {
    name: "Karthikeyan P Ramasamy",
    title: "Principal Engineer",
    company: "Freshworks",
  },
  {
    name: "Dani Akash",
    title: "Senior Software Engineer",
    company: "WunderGraph",
  },
  {
    name: "Kirankumar Ambati",
    title: "Frontend Engineer II",
    company: "Atlassian",
  },
  {
    name: "Preeti Wadhwani",
    title: "Senior Software Engineer",
    company: "Red Hat",
  },
  {
    name: "Karan Kiri",
    title: "SDE-2 FE",
    company: "Fabric Inc",
  },
  {
    name: "Santosh Selvasundar",
    title: "Software Engineer",
    company: "Rubrik",
  },
  {
    name: "Pulkit Kashyap",
    title: "UI Engineer",
    company: "Flipkart",
  },
  {
    name: "Vikram Gupta",
    title: "Sr. Computer Scientist",
    company: "Adobe",
  },
  {
    name: "Akshaya Acharya",
    title: "Technical Evangelist",
    company: "Hasura",
  },
  {
    name: "Sanket Singh",
    title: "Software Engineer 2",
    company: "Google",
  },
  {
    name: "Nitin Kumar",
    title: "Frontend Engineer",
    company: "Razorpay",
  },
  {
    name: "Lavakumar Kuppan",
    title: "Founder",
    company: "domdog.io",
  },
  {
    name: "Tushar Tripathi",
    title: "CTO",
    company: "Wokay",
  },
  {
    name: "Ravi Sawlani",
    title: "Senior Software Engineer",
    company: "BrowserStack",
  },
  {
    name: "Sumedha R Kulkarni",
    title: "Senior Software Engineer",
    company: "Assembly",
  },
  {
    name: "Ashesh Lal",
    title: "Sr. Software Engineer",
    company: "Clari",
  },
  {
    name: "Prateek Pandey",
    title: "Tech Lead",
    company: "Porter",
  },
  {
    name: "Mariappan Subramanian",
    title: "Senior Frontend Engineer",
    company: "Freshworks",
  },
  {
    name: "Akash Hamirwasia",
    title: "Software Engineer",
    company: "Razorpay",
  },
  {
    name: "Anurag Kanoria",
    title: "Lead DevRel",
    company: "Locofy.ai",
  },
  {
    name: "Ishan Sharma",
    title: "Software Engineer",
    company: "HackerRank",
  },
  {
    name: "M Zubair Ahmed",
    title: "SDE II",
    company: "Mattermost",
  },
  {
    name: "Atiksh Srivastava",
    title: "Software Developer",
    company: "Olvy",
  }
];

const attendeesData = [
  { name: "John Doe", email: "john.doe@example.com", contact: "1234567890" },
  { name: "Jane Smith", email: "jane.smith@example.com", contact: "0987654321" },
  { name: "Alice Johnson", email: "alice.johnson@example.com", contact: "2345678901" },
  { name: "Bob Brown", email: "bob.brown@example.com", contact: "3456789012" },
  { name: "Charlie Davis", email: "charlie.davis@example.com", contact: "4567890123" },
  { name: "Daisy Evans", email: "daisy.evans@example.com", contact: "5678901234" },
  { name: "Evan Foster", email: "evan.foster@example.com", contact: "6789012345" },
  { name: "Fiona Green", email: "fiona.green@example.com", contact: "7890123456" },
  { name: "George Harris", email: "george.harris@example.com", contact: "8901234567" },
  { name: "Hannah King", email: "hannah.king@example.com", contact: "9012345678" },
  { name: "Ian Lewis", email: "ian.lewis@example.com", contact: "0123456789" },
  { name: "Jackie Martin", email: "jackie.martin@example.com", contact: "1234567890" },
  { name: "Kyle Nelson", email: "kyle.nelson@example.com", contact: "2345678901" },
  { name: "Luna Owens", email: "luna.owens@example.com", contact: "3456789012" },
  { name: "Mason Perry", email: "mason.perry@example.com", contact: "4567890123" },
  { name: "Nina Quinn", email: "nina.quinn@example.com", contact: "5678901234" },
  { name: "Oscar Roberts", email: "oscar.roberts@example.com", contact: "6789012345" },
  { name: "Paula Stewart", email: "paula.stewart@example.com", contact: "7890123456" },
  { name: "Quinn Taylor", email: "quinn.taylor@example.com", contact: "8901234567" },
  { name: "Ryan White", email: "ryan.white@example.com", contact: "9012345678" },
  { name: "Sophie Young", email: "sophie.young@example.com", contact: "0123456789" },
  { name: "Travis Zhao", email: "travis.zhao@example.com", contact: "1234567890" },
  { name: "Uma Bennett", email: "uma.bennett@example.com", contact: "2345678901" },
  { name: "Victor Chan", email: "victor.chan@example.com", contact: "3456789012" },
  { name: "Wendy Dixon", email: "wendy.dixon@example.com", contact: "4567890123" },
  { name: "Xander Lee", email: "xander.lee@example.com", contact: "5678901234" },
  { name: "Yara Moore", email: "yara.moore@example.com", contact: "6789012345" },
  { name: "Zane Patel", email: "zane.patel@example.com", contact: "7890123456" },
];

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
