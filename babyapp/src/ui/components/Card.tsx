import React from "react"
import { Link } from "react-router-dom"

interface CardProps {
  title: string;
  image: string;
  link: string;
}

export const Card: React.FC<CardProps> = ({ title, image, link }) => {
  return (
    <Link className="cardlink" to={`/${link}`}>
      <div className="col">
        <div className="card">
          <div className="row no-gutters">
            <div className="col-4">
              <img src={image} alt={title} className="card-image p-4" width={160} />
            </div>
            <div className="col-8 d-flex align-items-center">
              <div className="card-body">
                <h5 className="card-title text-center">{title}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
