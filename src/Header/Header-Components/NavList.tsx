import { Typography } from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import { carModels } from "../../Lists";

const NavList = (
  <ul className="main-nav__list flex flex-col gap-2 lg:mt-0 lg:flex-row lg:items-center justify-between lg:gap-3 xl-gap-6  border-0 ">
    <Typography
      as="li"
      variant="small"
      className="flex items-center gap-l-2 p-1 "
    >
      <NavLink
        className={`uppercase text-base font-roboto font-bold ${({
          isActive,
          isPending,
        }: {
          isActive: boolean;
          isPending: boolean;
        }) => (isActive ? "active" : isPending ? "pending" : "")}`}
        to="/"
      >
        Home
      </NavLink>
    </Typography>

    {carModels.map((item) => {
      return (
        <Typography
          key={item.id}
          as="li"
          variant="small"
          color="blue-gray"
          className="flex items-center gap-x-1 px-2 hover:text-primary"
        >
          <img src={item.image} className="w-5" alt="hyundai" />
          <Link
            className="uppercase  text-base font-roboto  font-bold text-textColor disabled hover:text-primary"
            to="#"
          >
            {item.model}
          </Link>
        </Typography>
      );
    })}

    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="flex items-center gap-x-2 px-2"
    >
      <Link
        className="uppercase  text-textColor  text-base font-roboto  font-bold disabled hover:text-primary"
        to="#"
      >
        others
      </Link>
    </Typography>
  </ul>
);

export default NavList;
