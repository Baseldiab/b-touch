import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";

const Search: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <React.Fragment>
      <Button
        className="bg-transparent  p-0 m-0 hover:!text-primary"
        onClick={openDrawer}
      >
        <svg
          className="w-4 h-auto ml-0  main-nav__svg"
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.14863 8.05951H8.60229L8.40865 7.87278C9.10982 7.0595 9.49519 6.02122 9.49442 4.94741C9.49442 4.05833 9.23078 3.18922 8.73684 2.44998C8.24289 1.71074 7.54083 1.13457 6.71943 0.794332C5.89803 0.454096 4.99418 0.365075 4.12218 0.538526C3.25019 0.711976 2.44921 1.14011 1.82054 1.76878C1.19187 2.39745 0.763734 3.19843 0.590283 4.07043C0.416833 4.94242 0.505854 5.84627 0.846089 6.66767C1.18632 7.48907 1.76249 8.19113 2.50173 8.68508C3.24098 9.17902 4.11009 9.44267 4.99917 9.44267C6.11261 9.44267 7.13614 9.03463 7.92454 8.35689L8.11127 8.55053V9.09688L11.5692 12.5479L12.5996 11.5174L9.14863 8.05951ZM4.99917 8.05951C3.27714 8.05951 1.88706 6.66944 1.88706 4.94741C1.88706 3.22538 3.27714 1.83531 4.99917 1.83531C6.7212 1.83531 8.11127 3.22538 8.11127 4.94741C8.11127 6.66944 6.7212 8.05951 4.99917 8.05951Z"
            fill="white"
          />
        </svg>
      </Button>
      <Drawer open={open} onClose={closeDrawer} className="p-4">
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            Material Tailwind
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <Typography color="gray" className="mb-8 pr-4 font-normal">
          Material Tailwind features multiple React and HTML components, all
          written with Tailwind CSS classes and Material Design guidelines.
        </Typography>
        <div className="flex gap-2">
          <Button size="sm" variant="outlined">
            Documentation
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
      </Drawer>
    </React.Fragment>
  );
};
export default Search;
