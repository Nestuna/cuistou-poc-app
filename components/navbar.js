import {
  AppBar,
  Toolbar,
  Button,
  Link,
  Stack,
  Container,
  Divider,
  Typography,
  Box,
} from "@mui/material";
import React from "react";
import Image from 'next/image';

export default function Navbar() {
  const navItems = [
    { route:'/recipes', label: 'recipes' },
    { route:'/liste', label:  'fruits and vegetables' },
    { route:'/signin', label: 'sign in' }
  ];
  const logo ='/images/logo2.png'

  return (
    <AppBar sx={{ background: "var(--foreground)" }}>
      <Container maxWidth="xl">
        <Toolbar>
          <Typography variant="h4" sx={{ color: "var(--text)", mr: '.3em' }}>
            Cuistou
          </Typography>
          <Image src={logo} alt="logo" width="43" height="43"/>
          <Box sx={{ flexGrow: 1 }} />
          <Stack
            direction="row"
            spacing={{ sm: 3 }}
            sx={{ flexGrow: 0, display: "flex" }}>
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
