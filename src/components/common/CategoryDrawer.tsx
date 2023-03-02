import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Toolbar,
} from "@mui/material";

const DrawerWidth = 280;

const categories = ["work", "study"];

export function CategoryDrawer() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: DrawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: DrawerWidth, boxSizing: "border-box" },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          {categories.map((category: string, index: number) => {
            return (
              <ListItem key={index}>
                <ListItemText primary={category} />
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Drawer>
  );
}
