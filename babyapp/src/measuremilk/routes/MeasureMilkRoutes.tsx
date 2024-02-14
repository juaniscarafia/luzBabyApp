import { Route, Routes } from "react-router-dom"
import { MeasureMilks } from "../pages/MeasureMilks"
import { Navbar } from "../../ui/components/Navbar"
import React from "react"

export const MeasureMilkRoutes: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<MeasureMilks />} />
        </Routes>
      </div>
    </>
  )
}
