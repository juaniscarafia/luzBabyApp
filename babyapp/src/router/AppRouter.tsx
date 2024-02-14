import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/pages/LoginPage"
import { MeasureMilkRoutes } from "../measuremilk/routes/MeasureMilkRoutes"
import { Footer } from "../ui/components/Footer"
import { HomeRoutes } from "../home/routes/HomeRoutes"
import { BabyWeightRoutes } from "../babyweight/routes/BabyWeightRoutes"
import { BabyHeightRoutes } from "../babyheight/routes/BabyHeightRoutes"

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/" element={<HomeRoutes />} />
        <Route path="/measuremilks" element={<MeasureMilkRoutes />} />
        <Route path="/babyweight" element={<BabyWeightRoutes />} />
        <Route path="/babyheight" element={<BabyHeightRoutes />} />
      </Routes>
      <Footer />
    </>
  )
}
