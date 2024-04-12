import './promotions.css';
function Promotions() {
  return (
    <div className="promotions-container">
      <h2>Promotions</h2>
      <div className="promotion-card">
        <h3>Student Discount</h3>
        <p>Students can enjoy a special discount on selected items. Simply present your student ID at checkout to avail the discount.</p>
      </div>
      <div className="promotion-card">
        <h3>Military Discount</h3>
        <p>Active duty military personnel and veterans can receive a discount on their purchases. Present your military ID or proof of service at checkout to avail the discount.</p>
      </div>
      <div className="promotion-card">
        <h3>Teacher Discount</h3>
        <p>Teachers can enjoy a special discount on selected items. Simply present your teacher ID at checkout to avail the discount.</p>
      </div>
      <div className="promotion-card">
        <h3>First Responders & Medical Professionals Discount</h3>
        <p>First responders and medical professionals can receive a discount on their purchases. Present your ID or proof of profession at checkout to avail the discount.</p>
      </div>
      <div className="promotion-card">
        <h3>Birthday Discount</h3>
        <p>Celebrate your birthday with us! Register your birthday with us and receive a special discount on your birthday month.</p>
      </div>
    </div>
  );
}

export default Promotions;
