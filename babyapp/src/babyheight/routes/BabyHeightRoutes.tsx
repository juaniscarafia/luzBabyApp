import { Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui/components/Navbar"
import React from "react"
import { BabyHeightPage } from "../pages/BabyHeightPages"

export const BabyHeightRoutes: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container vh-100">
        <Routes>
          <Route path="/" element={<BabyHeightPage />} />
        </Routes>
      </div>
    </>
  )
}
