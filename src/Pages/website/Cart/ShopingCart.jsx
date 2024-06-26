
 import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from 'react-bootstrap';
import QuantitySelector from '../../../Components/Website/quantity/QuantitySelector';
import { CartState } from '../context/Context';
import { Avatar, Box, Button, Divider, Grid, IconButton, InputBase, List, ListItem, ListItemText, Stack,Typography, styled } from '@mui/material';
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { NavLink } from 'react-router-dom';
import SearchIcon from "@mui/icons-material/Search";
import PaymentMethods from '../../../Components/Website/Cart/PaymentMethods';


const Search = styled("div")(({ theme }) => ({
  flexGrow: 0.6,
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  border: "1px solid #777",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "200px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "330px",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const ShopingCart = () => {
 const {
   state: { cart },
   dispatch,
 } = CartState();


 const cartItemCount = cart.reduce(
   (total, product) => total + product.qty,
   0
 );
console.log(cartItemCount);

  return (
    <Container style={{ padding: "2rem 0" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "2rem",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar sx={{ bgcolor: "black", width: "55px", height: "55px" }}>
            <ProductionQuantityLimitsIcon fontSize="large" />
          </Avatar>
          <Typography
            sx={{ marginLeft: "10px", fontSize: "28px" }}
            variant="button"
          >
            your cart
          </Typography>
        </Box>
        <NavLink to="/">
          <IconButton>
            <DoubleArrowIcon />
          </IconButton>
        </NavLink>
      </Box>

      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650, minHeight: "400px" }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow
              sx={{
                ".css-x9mdjk-MuiTableCell-root": { fontWeight: "700" },
                backgroundColor: "var(--mycolor)",
              }}
            >
              <TableCell sx={{ fontWeight: "700", fontFamily: "cursive" }}>
                product
              </TableCell>
              <TableCell
                sx={{ fontWeight: "700", fontFamily: "cursive" }}
                align="center"
              >
                Price
              </TableCell>
              <TableCell
                sx={{ fontWeight: "700", fontFamily: "cursive" }}
                align="center"
              >
                Quantity
              </TableCell>
              <TableCell
                sx={{ fontWeight: "700", fontFamily: "cursive" }}
                align="center"
              >
                SubTotal
              </TableCell>
              <TableCell
                sx={{ fontWeight: "700", fontFamily: "cursive" }}
                align="center"
              >
                Options
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "20px" }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: "var(--mycolor)",
                        width: "60px",
                        height: "60px",
                      }}
                      variant="square"
                    >
                      N
                    </Avatar>
                    <Stack>
                      <Typography
                        variant="caption"
                        display="block"
                        gutterBottom
                      >
                        caption text
                      </Typography>
                      <Typography
                        variant="overline"
                        display="block"
                        gutterBottom
                      >
                        overline text
                      </Typography>
                    </Stack>
                  </Box>
                  {row.title}
                </TableCell>
                <TableCell align="center">
                  <Typography variant="h6"> ${row.price}</Typography>
                </TableCell>
                <TableCell align="center">
                  <QuantitySelector
                    dispatch={dispatch}
                    quantity={row.qty}
                    id={row.id}
                  />
                </TableCell>
                <TableCell align="center">${row.price}</TableCell>
                <TableCell align="center">{row.rating}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Grid container spacing={3} sx={{ padding: "3rem 0", gap:'2rem' }}>
        <Grid xs={10} md={7}>
          <Box
            sx={{
              width: "100%",
              height: "fit-content",
              boxShadow:
                " 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14)",
              borderRadius: "8px",
              padding: "1rem",
            }}
          >
            <Typography sx={{textAlign:'center', fontWeight:'700', color:'var(--mycolor)'}}>ORDER SUMMARY</Typography>
            <List sx={{ width: "100%"  }}>
              <Typography>Estimating Shopping and Tax</Typography>
              <Divider sx={{ borderColor: "black" }} />
              <ListItem>
                <ListItemText
                  sx={{ display: "flex", justifyContent: "space-between" }}
                  primary="Subtotal"
                  secondary="$100.00"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  sx={{ display: "flex", justifyContent: "space-between" }}
                  primary="Tax"
                  secondary="$50.00"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  sx={{ display: "flex", justifyContent: "space-between" }}
                  primary="Shipping"
                  secondary="$50.00"
                />
              </ListItem>
              <Divider sx={{ borderColor: "black" }} />
              <ListItem>
                <ListItemText
                  sx={{
                    ".css-83ijpv-MuiTypography-root": {fontWeight:'900',fontSize:'20px', color:'var(--mycolor)'},
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                  primary="Order Total"
                  secondary="$50.00"
                />
              </ListItem>
            </List>
            <Button
              variant="outlined"
              sx={{
                width: "100%",
                mt: 2,
                borderColor: "black",
                color: "black",
                "&:hover": {
                  borderColor: "var(--mycolor)",
                },
              }}
            >
              Error
            </Button>
          </Box>
        </Grid>
        <Grid xs={10} md={4}> 
          <Box
            sx={{
              height: "fit-content",
              boxShadow:
                " 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14)",
              borderRadius: "8px",
              padding: "1rem",
            }}
          >
            <Stack>
              <Typography variant="caption" sx={{ mb: 1 }}>
                Enter Your Code
              </Typography>
              <Search
                sx={{
                  display: "flex",
                  borderRadius: "22px",
                  justifyContent: "space-between",
                  margin: "0.5rem auto",
                  width: { xs: "80%" },
                }}
              >
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Stack>
            <Stack>
              <Typography>Payment Methods:</Typography>
              <PaymentMethods />
              <Button
                variant="contained"
                sx={{
                  bgcolor: "var(--mycolor)",
                  borderColor: "var(--mycolor)",
                  "&:hover": {
                    backgroundColor: "black",
                  },
                }}
              >
                process checkout
              </Button>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ShopingCart
