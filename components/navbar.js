import {
  AppBar,
  Toolbar,
  Button,
  Link,
  Stack,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";

export default function Navbar() {
  const navItems = [
    { route: '/', label: 'home' },
    { route:'/reciepes', label: 'reciepes' },
    { route:'/food', label:  'fruits and vegetables' },
    { route:'/favorites', label: 'favorites' },
    { route:'/login', label: 'login' }
  ];
  const logo = require('../assets/logo.png');

  return (
    <AppBar sx={{ background: "var(--foreground)" }}>
      <Container maxWidth="xl">
        <Toolbar>
          <img src={logo} alt="logo" />
          <Typography variant="h3" sx={{ color: "var(--text)", flexGrow: 1 }}>
            Cuistou
          </Typography>
          <Stack
            direction="row"
            spacing={{ sm: 3 }}
            sx={{ flexGrow: 0, display: "flex" }}
          >
            {navItems.map((item) => (
              <Button key={item} sx={{ fontSize: "1rem" }}>
                <Link href={ item.route } sx={{ color: "var(--text)" }} underline="none">
                  {item.label}
                </Link>
              </Button>
            ))}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
