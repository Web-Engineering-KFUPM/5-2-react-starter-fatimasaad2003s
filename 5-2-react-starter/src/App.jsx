import './App.css'
import StudentCard from "./components/StudentCard.jsx";


function App() {
  return (
    <div className="app">
      <header className="dashboard-header">
        <h1>Student Information Dashboard</h1>
        <p>View and manage student details</p>
      </header>

      <main className="dashboard-main">
        <div className="cards-container">
           {/* First */}
          <StudentCard
            name="STUDENT 1"
            studentId="123"
            department="CS"
          />

          {/* Second */}
          <StudentCard
            name="STUDENT 2"
            studentId="456"
            department="CS"
          />


        </div>
      </main>
    </div>
  )
}

export default App
