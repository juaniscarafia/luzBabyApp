import { Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui/components/Navbar"
import { HomePage } from "../pages/HomePage"
import React from "react"

export const HomeRoutes: React.FC = () => {
  return (
    <>
      <Navbar />
      {/* <div className="background-login"> */}
        <div className="container vh-100">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      {/* </div> */}
    </>
  )
}