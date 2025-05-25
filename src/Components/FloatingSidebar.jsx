import React from "react";
import { Phone, MessageSquare, FileText } from "lucide-react"; // if installed

const FloatingSidebar = () => {
  return (
    <div className="floating-sidebar">
      <div className="sidebar-button admission-btn ">
        <h3 className="">Admission Enquiry</h3>
      </div>
      <div className="icon-btn phone-btn">
        <Phone size={16} />
      </div>
      <div className="icon-btn whatsapp-btn">
        <MessageSquare size={16} />
      </div>
    </div>
  );
};

export default FloatingSidebar;
