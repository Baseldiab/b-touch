import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import { carBotNav } from "../../Lists";
import { useAuth } from "../../Auth/Auth";

const BottomNav: React.FC = () => {
  const auth = useAuth();

  return (
    <footer className=" bottom-nav__menu-screen h-14 fixed bottom-0 right-0 left-0 bg-mainBgColor z-40 flex items-center lg:hidden">
      <div className="bottom-nav__tabs myContainer flex justify-between items-center py-1">
        <NavLink
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          className={`bottom-nav__links text-textFooterColor text-center capitalize text-sm font-orelega font-sm ${({
            isActive,
            isPending,
          }: {
            isActive: boolean;
            isPending: boolean;
          }) => (isActive ? "active" : isPending ? "pending" : "")}`}
          to="/"
        >
          <svg
            className="main-nav__svg mx-auto"
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="fill-textFooterColor"
              d="M16.9056 10.1637L9.25649 1.15713C8.93438 0.777051 8.31565 0.777051 7.99353 1.15713L0.344388 10.1637C0.234289 10.293 0.16202 10.4534 0.136369 10.6255C0.110719 10.7975 0.132792 10.9738 0.199904 11.1328C0.335889 11.4579 0.640155 11.6668 0.975868 11.6668H2.67568V17.9714C2.67568 18.2103 2.76522 18.4394 2.92461 18.6083C3.084 18.7772 3.30017 18.8721 3.52558 18.8721H6.0753C6.30071 18.8721 6.51688 18.7772 6.67627 18.6083C6.83566 18.4394 6.9252 18.2103 6.9252 17.9714V14.3688H10.3248V17.9714C10.3248 18.2103 10.4144 18.4394 10.5738 18.6083C10.7331 18.7772 10.9493 18.8721 11.1747 18.8721H13.7244C13.9499 18.8721 14.166 18.7772 14.3254 18.6083C14.4848 18.4394 14.5743 18.2103 14.5743 17.9714V11.6668H16.2742C16.4388 11.6676 16.6 11.6176 16.7382 11.5229C16.8765 11.4282 16.9857 11.2929 17.0527 11.1336C17.1196 10.9742 17.1413 10.7977 17.1152 10.6254C17.0891 10.4532 17.0163 10.2928 16.9056 10.1637Z"
            />
          </svg>
          Home
        </NavLink>
        <div className="bottom-nav__vehicle">
          <Menu placement="top">
            <MenuHandler>
              <button className="bottom-nav__link hover:text-primary bottom-0 text-center capitalize text-sm font-orelega font-sm text-textFooterColor">
                <svg
                  className="mx-auto "
                  width="21"
                  height="16"
                  viewBox="0 0 21 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.5137 13.2047C19.8952 13.0305 20.2186 12.7504 20.4453 12.3977C20.672 12.0449 20.7925 11.6345 20.7925 11.2152V9.69934C20.7926 9.01084 20.5652 8.34159 20.1457 7.79559C19.7261 7.2496 19.1379 6.85745 18.4725 6.68009L15.8562 5.98276L13.9287 2.51237C13.658 2.02519 13.2619 1.61927 12.7815 1.33669C12.301 1.0541 11.7537 0.905152 11.1962 0.905274H6.96998C6.31395 0.905247 5.67454 1.11163 5.14238 1.49518C4.61022 1.87872 4.21229 2.41998 4.00498 3.04224L2.97623 6.12648C2.34274 6.32653 1.78951 6.72321 1.39683 7.25894C1.00415 7.79467 0.792455 8.44157 0.79248 9.10574V11.2152C0.79248 12.0987 1.31748 12.8598 2.07123 13.2047C2.17133 13.9359 2.52709 14.608 3.07546 15.102C3.62384 15.596 4.32942 15.88 5.0672 15.9037C5.80498 15.9273 6.52732 15.6891 7.10622 15.2312C7.68513 14.7734 8.08323 14.1254 8.22998 13.4022H13.355C13.5017 14.1254 13.8998 14.7734 14.4787 15.2312C15.0576 15.6891 15.78 15.9273 16.5178 15.9037C17.2555 15.88 17.9611 15.596 18.5095 15.102C19.0579 14.608 19.4136 13.9359 19.5137 13.2047ZM6.96998 2.15496H8.29248V5.90403H4.36748L5.18998 3.43715C5.31442 3.06363 5.55333 2.73876 5.87283 2.50861C6.19232 2.27847 6.57619 2.15474 6.96998 2.15496ZM12.835 3.11972L14.3837 5.90403H9.54248V2.15496H11.1962C11.5306 2.15507 11.8589 2.24458 12.147 2.41422C12.4352 2.58385 12.6727 2.82743 12.835 3.11972ZM3.29248 12.7773C3.29248 12.5312 3.34098 12.2874 3.43521 12.06C3.52943 11.8325 3.66755 11.6259 3.84166 11.4518C4.01576 11.2778 4.22246 11.1397 4.44995 11.0455C4.67743 10.9513 4.92125 10.9028 5.16748 10.9028C5.41371 10.9028 5.65753 10.9513 5.88501 11.0455C6.1125 11.1397 6.3192 11.2778 6.49331 11.4518C6.66742 11.6259 6.80553 11.8325 6.89975 12.06C6.99398 12.2874 7.04248 12.5312 7.04248 12.7773C7.04248 13.2745 6.84494 13.7513 6.49331 14.1028C6.14167 14.4544 5.66476 14.6519 5.16748 14.6519C4.6702 14.6519 4.19329 14.4544 3.84166 14.1028C3.49002 13.7513 3.29248 13.2745 3.29248 12.7773ZM14.5425 12.7773C14.5425 12.2802 14.74 11.8034 15.0917 11.4518C15.4433 11.1003 15.9202 10.9028 16.4175 10.9028C16.9148 10.9028 17.3917 11.1003 17.7433 11.4518C18.0949 11.8034 18.2925 12.2802 18.2925 12.7773C18.2925 13.2745 18.0949 13.7513 17.7433 14.1028C17.3917 14.4544 16.9148 14.6519 16.4175 14.6519C15.9202 14.6519 15.4433 14.4544 15.0917 14.1028C14.74 13.7513 14.5425 13.2745 14.5425 12.7773Z"
                    fill="#F0F0F0"
                  />
                </svg>
                Vehicles
              </button>
            </MenuHandler>
            <MenuList className="h-3/4 bg-bottomNavBg w-full mx-auto  border-2 !rounded-md  border-bottomNavBorder ">
              {carBotNav.map((item) => {
                return (
                  <MenuItem
                    key={item.id}
                    color="blue-gray"
                    className="flex items-center gap-x-1 px-2 hover:text-primary"
                  >
                    <Link
                      className="text-center capitalize text-sm font-orelega font-sm text-textFooterColor disabled hover:text-primary"
                      to="#"
                    >
                      <div
                        className="main-nav__svg"
                        dangerouslySetInnerHTML={{ __html: item.image }}
                      />
                    </Link>
                  </MenuItem>
                );
              })}
            </MenuList>
          </Menu>
        </div>
        <Link
          className="bottom-nav__link text-center capitalize text-sm font-orelega font-sm text-textFooterColor disabled hover:text-primary"
          to="#"
        >
          <svg
            className="mx-auto"
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.53147 7.28299H6.8648C7.10055 7.28299 7.32664 7.18934 7.49334 7.02264C7.66004 6.85594 7.75369 6.62985 7.75369 6.3941V1.06076C7.75369 0.825016 7.66004 0.598923 7.49334 0.432224C7.32664 0.265525 7.10055 0.171875 6.8648 0.171875H1.53147C1.29572 0.171875 1.06963 0.265525 0.902928 0.432224C0.736229 0.598923 0.642578 0.825016 0.642578 1.06076V6.3941C0.642578 6.62985 0.736229 6.85594 0.902928 7.02264C1.06963 7.18934 1.29572 7.28299 1.53147 7.28299ZM10.4204 7.28299H15.7537C15.9894 7.28299 16.2155 7.18934 16.3822 7.02264C16.5489 6.85594 16.6426 6.62985 16.6426 6.3941V1.06076C16.6426 0.825016 16.5489 0.598923 16.3822 0.432224C16.2155 0.265525 15.9894 0.171875 15.7537 0.171875H10.4204C10.1846 0.171875 9.95852 0.265525 9.79182 0.432224C9.62512 0.598923 9.53147 0.825016 9.53147 1.06076V6.3941C9.53147 6.62985 9.62512 6.85594 9.79182 7.02264C9.95852 7.18934 10.1846 7.28299 10.4204 7.28299ZM1.53147 16.1719H6.8648C7.10055 16.1719 7.32664 16.0782 7.49334 15.9115C7.66004 15.7448 7.75369 15.5187 7.75369 15.283V9.94965C7.75369 9.7139 7.66004 9.48781 7.49334 9.32111C7.32664 9.15442 7.10055 9.06076 6.8648 9.06076H1.53147C1.29572 9.06076 1.06963 9.15442 0.902928 9.32111C0.736229 9.48781 0.642578 9.7139 0.642578 9.94965V15.283C0.642578 15.5187 0.736229 15.7448 0.902928 15.9115C1.06963 16.0782 1.29572 16.1719 1.53147 16.1719ZM13.087 16.1719C15.0479 16.1719 16.6426 14.5772 16.6426 12.6163C16.6426 10.6554 15.0479 9.06076 13.087 9.06076C11.1261 9.06076 9.53147 10.6554 9.53147 12.6163C9.53147 14.5772 11.1261 16.1719 13.087 16.1719Z"
              fill="#F0F0F0"
            />
          </svg>
          Categories
        </Link>
        {!auth.isLogged ? (
          <NavLink
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            className={`bottom-nav__link text-center capitalize text-sm font-orelega font-sm text-textFooterColor disabled hover:text-primary ${({
              isActive,
              isPending,
            }: {
              isActive: boolean;
              isPending: boolean;
            }) => (isActive ? "active" : isPending ? "pending" : "")}`}
            to="login"
          >
            <svg
              className="mx-auto"
              width="17"
              height="19"
              viewBox="0 0 17 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.5127 4.40183C4.5127 6.75225 6.30736 8.66499 8.5127 8.66499C10.718 8.66499 12.5127 6.75225 12.5127 4.40183C12.5127 2.05141 10.718 0.138672 8.5127 0.138672C6.30736 0.138672 4.5127 2.05141 4.5127 4.40183ZM15.6238 18.1387H16.5127V17.1913C16.5127 13.5354 13.7207 10.5597 10.2905 10.5597H6.73492C3.30381 10.5597 0.512695 13.5354 0.512695 17.1913V18.1387H15.6238Z"
                fill="#F0F0F0"
              />
            </svg>
            account
          </NavLink>
        ) : (
          <NavLink
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            className={`bottom-nav__link flex flex-col justify-center  items-center capitalize text-sm font-orelega font-sm text-textFooterColor  hover:text-primary ${({
              isActive,
              isPending,
            }: {
              isActive: boolean;
              isPending: boolean;
            }) => (isActive ? "" : isPending ? "pending" : "")}`}
            to="profile"
          >
            <span className="text-white bg-buttonColor rounded-full w-6  h-6 p-1 text-sm flex justify-center items-center">
              {auth.username?.slice(0, 1)}
            </span>
            {auth.username}
          </NavLink>
        )}
      </div>
    </footer>
  );
};
export default BottomNav;
