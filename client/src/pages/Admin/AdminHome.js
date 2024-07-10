import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Blood_Bank_WebApp </h3>
          <hr />
          <p>
          Ensuring a Steady Supply of Life-Saving Blood
          Blood donation is a selfless act that can save countless lives. With the increasing demand for blood due to medical emergencies, surgeries, and chronic illnesses, the role of a well-managed blood bank becomes crucial. Our Blood Bank Management System is designed to streamline the processes of blood collection, storage, and distribution, ensuring that those in need receive timely assistance.
          
          The Importance of Blood Donation
          Every drop of blood donated can make a significant difference. Blood donations are used for various medical procedures, including surgeries, cancer treatment, and managing severe injuries. By donating blood, individuals contribute to a vital resource that helps improve the health and lives of patients across the community. Regular blood donations ensure that blood banks are well-stocked and prepared for any emergency.
          
          Enhancing Efficiency and Coordination
          Our Blood Bank WebApp empowers administrators to efficiently manage blood inventories, track donations, and coordinate with donors and hospitals. With features like real-time updates on blood availability, secure access control, and comprehensive data management, the system enhances operational efficiency. This ensures that the right type of blood is available when and where it is needed most.
          
          Promoting Safe and Secure Blood Donation Practices
          Safety and security are paramount in blood donation and transfusion processes. Our system adheres to stringent protocols to ensure that all blood collected is safe for transfusion. By maintaining detailed records and monitoring the entire process, we help prevent any potential risks, ensuring that all donated blood meets the highest standards of quality and safety.
          
          Join Us in Saving Lives
          We invite you to join us in our mission to save lives through efficient blood donation management. Whether you are a donor, a healthcare provider, or an organization, your participation is invaluable. Together, we can create a robust and responsive blood bank network that ensures no life is lost due to the unavailability of blood.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;