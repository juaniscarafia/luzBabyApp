import { Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui/components/Navbar"
import React from "react"
import { BabyWeightPage } from "../pages/BabyWeightPage"

export const BabyWeightRoutes: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container vh-100">
        <Routes>
          <Route path="/" element={<BabyWeightPage />} />
        </Routes>
      </div>
    </>
  )
}
