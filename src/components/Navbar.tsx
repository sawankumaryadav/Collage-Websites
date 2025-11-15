import  { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/Image/logo.gif";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#094C3B] text-white flex justify-between items-center px-6 py-3 relative">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <img src={logo} alt="Logo" className="h-12 w-12 object-contain" />
      </div>

      {/* Hamburger (mobile) */}
      <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      {/* Menu (desktop) */}
      <ul className="hidden md:flex space-x-8 font-semibold tracking-wide text-sm">

        {/* ABOUT DROPDOWN */}
        <li className="group relative">
          <a href="#about" className="hover:text-yellow-400">ABOUT</a>
          <div className="absolute left-0 top-full hidden group-hover:flex bg-white text-black shadow-lg w-[900px] p-8 justify-between z-50">
            <div>
              <h3 className="text-green-700 font-semibold mb-3">GET TO KNOW SHOBHIT</h3>
              <ul className="space-y-1 text-sm">
                <li>University Overview</li>
                <li>Vision & Mission</li>
                <li>Our Inspirer</li>
                <li>Historical Milestones</li>
                <li>University Leadership</li>
                <li>Organogram</li>
                <li>Our Logo</li>
                <li>Annual Reports</li>
              </ul>
            </div>
            <div>
              <h3 className="text-green-700 font-semibold mb-3">INFO ABOUT</h3>
              <ul className="space-y-1 text-sm">
                <li>Ranking and Awards</li>
                <li>Recognitions and Approvals</li>
                <li>Our Partners</li>
                <li>University Authorities</li>
                <li>Blogs</li>
                <li>News & Events</li>
                <li>IQAC</li>
                <li>e-Content</li>
              </ul>
            </div>
            <div>
              <h3 className="text-green-700 font-semibold mb-3">EXPERIENCE @ SHOBHIT</h3>
              <ul className="space-y-1 text-sm">
                <li>MOU's</li>
                <li>Social Services</li>
                <li>Awards and Achievements</li>
                <li>Alumni Network</li>
                <li>Seminar & Conferences</li>
                <li>Student Clubs</li>
                <li>Library & Learning Centre</li>
              </ul>
            </div>
            <div>
              <h3 className="text-green-700 font-semibold mb-3">QUICK LINKS</h3>
              <ul className="space-y-1 text-sm">
                <li>Vice Chancellor</li>
                <li>University ERP</li>
                <li>Image Gallery</li>
                <li>Media Coverage</li>
                <li>Virtual Tour</li>
                <li>Inspirer Day</li>
              </ul>
            </div>
          </div>
        </li>

        {/* ACADEMICS DROPDOWN */}
        <li className="group relative">
          <a href="#academics" className="hover:text-yellow-400">ACADEMICS</a>
          <div className="absolute left-0 top-full hidden group-hover:flex bg-white text-black shadow-lg w-[900px] p-8 justify-between z-50">
            <div>
              <h3 className="text-green-700 font-semibold mb-3">ACADEMIC STRUCTURE</h3>
              <ul className="space-y-1 text-sm">
                <li>Faculties, Schools & Centers</li>
                <li>Curricular Aspects</li>
                <li>Teaching Methodology</li>
                <li>Academic Calendar</li>
              </ul>
            </div>
            <div>
              <h3 className="text-green-700 font-semibold mb-3">EDUCATION MODES</h3>
              <ul className="space-y-1 text-sm">
                <li>Distance Education</li>
                <li>Online Education</li>
                <li>Virtual Lab</li>
              </ul>
            </div>
            <div>
              <h3 className="text-green-700 font-semibold mb-3">INNOVATION & INCUBATION</h3>
              <ul className="space-y-1 text-sm">
                <li>MSME-Technology Business Incubator</li>
                <li>Shobhit AICTE IDEA Lab</li>
                <li>NSDC Skill Development Initiative</li>
              </ul>
            </div>
            <div>
              <h3 className="text-green-700 font-semibold mb-3">IMPORTANT LINKS</h3>
              <ul className="space-y-1 text-sm">
                <li>Important Notice</li>
                <li>Academic Resources</li>
                <li>Student Handbook</li>
              </ul>
            </div>
          </div>
        </li>

        {/* ADMISSION DROPDOWN */}
        <li className="group relative">
          <a href="#admission" className="hover:text-yellow-400">ADMISSION</a>
          <div className="absolute left-0 top-full hidden group-hover:flex bg-white text-black shadow-lg w-[900px] p-8 justify-between z-50">
            <div>
              <h3 className="text-green-700 font-semibold mb-3">ADMISSION INFORMATION</h3>
              <ul className="space-y-1 text-sm">
                <li>Admission Process</li>
                <li>Important Dates</li>
                <li>Eligibility Criteria</li>
                <li>Documents Required</li>
                <li>Fee Structure</li>
                <li>Scholarship Schemes</li>
              </ul>
            </div>
            <div>
              <h3 className="text-green-700 font-semibold mb-3">ADMISSION SUPPORT</h3>
              <ul className="space-y-1 text-sm">
                <li>Admission Helpline</li>
                <li>FAQ's</li>
                <li>How to Apply</li>
                <li>Online Admission Form</li>
                <li>International Admissions</li>
              </ul>
            </div>
            <div>
              <h3 className="text-green-700 font-semibold mb-3">DOWNLOADS</h3>
              <ul className="space-y-1 text-sm">
                <li>Prospectus</li>
                <li>Application Form</li>
                <li>Brochures</li>
                <li>Admission Guidelines PDF</li>
              </ul>
            </div>
            <div>
              <h3 className="text-green-700 font-semibold mb-3">QUICK ACTIONS</h3>
              <ul className="space-y-1 text-sm">
                <li>Apply Now</li>
                <li>Fee Payment Portal</li>
                <li>Track Application</li>
                <li>Contact Admissions Office</li>
              </ul>
            </div>
          </div>
        </li>

        {/* Other menu items */}
        <li><a href="#undergraduate" className="hover:text-yellow-400">UNDERGRADUATE</a></li>
        <li><a href="#postgraduate" className="hover:text-yellow-400">POSTGRADUATE</a></li>
        <li><a href="#phd" className="hover:text-yellow-400">PH.D.</a></li>
        <li><a href="#research" className="hover:text-yellow-400">RESEARCH</a></li>
        <li><a href="#activities" className="hover:text-yellow-400">STUDENT ACTIVITIES</a></li>
      </ul>

      {/* Right buttons */}
      <div className="hidden md:flex items-center space-x-3">
        <button className="bg-[#0F5947] px-4 py-2 font-bold hover:bg-[#0c4435] rounded-md">
          More Link
        </button>
        <button className="bg-[#F6A623] px-4 py-2 font-bold text-white hover:bg-[#e09310] rounded-md">
          Apply Now
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#0F5947] flex flex-col items-start px-6 py-4 md:hidden space-y-3 z-40">
          <a href="#about" className="hover:text-yellow-400">About</a>
          <a href="#academics" className="hover:text-yellow-400">Academics</a>
          <a href="#admission" className="hover:text-yellow-400">Admission</a>
          <a href="#research" className="hover:text-yellow-400">Research</a>
          <a href="#activities" className="hover:text-yellow-400">Student Activities</a>
          <button className="bg-[#0F5947] w-full py-2 font-bold mt-2 border border-white rounded-md">
            More Link
          </button>
          <button className="bg-[#F6A623] w-full py-2 font-bold text-white rounded-md">
            Apply Now
          </button>
        </div>
      )}
    </nav>
  );
}
