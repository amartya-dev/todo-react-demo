import { Icon } from "@iconify/react";
import { AppBar, IconButton, Stack, Toolbar, Typography } from "@mui/material";

export function MenuBar() {
  return (
    <AppBar sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ width: "100vw" }}
        >
          <Typography variant="h4">todo</Typography>
          <IconButton>
            <Icon fontSize={26} icon="material-symbols:add" color="white" />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
