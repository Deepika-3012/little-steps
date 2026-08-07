import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Centers from "./pages/Centers";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddDaycare from "./pages/AddDaycare";
import DaycareDetails from "./pages/DaycareDetails";
import EditDaycare from "./pages/EditDaycare";
import MyBookings from "./pages/MyBookings";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/centers"
          element={
            <ProtectedRoute>
              <Centers />
            </ProtectedRoute>
          }
        />

        <Route
          path="/add-daycare"
          element={
            <ProtectedRoute>
              <AddDaycare />
            </ProtectedRoute>
          }
        />

        <Route
          path="/daycare/:id"
          element={<DaycareDetails />}
        />

        <Route
          path="/edit-daycare/:id"
          element={
            <ProtectedRoute>
              <EditDaycare />
            </ProtectedRoute>
          }
        />

        <Route
          path="/my-bookings"
          element={
            <ProtectedRoute>
              <MyBookings />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="*" element={<NotFound />} />

      </Routes>

      <Footer />

    </>
  );
}

export default App;