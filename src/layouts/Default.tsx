import { Box } from "@mui/material";
import { CategoryDrawer } from "components/common/CategoryDrawer";
import { MenuBar } from "components/layouts/MenuBar";

export default function Default() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <MenuBar />
        <CategoryDrawer />
      </Box>
    </>
  );
}
