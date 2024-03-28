import React from "react";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useSelector } from "react-redux";
import {} from "../redux/store"; // Assuming you have RootState defined

const ProductComponent: React.FC = () => {
  const products = useSelector((state: any) => state.allProducts.products);
  // const renderList = products.map((product:any) => {
  //   const { id, title, image, price, category, rating } = product;

  return (
    <>
    <h1>Product Listing</h1>
      <TableContainer
        style={{ border: "1px solid #cfd8dc", borderRadius: "10px" }}
        // key={id}
      >
        <Table>
          <TableHead sx={{background:"#b0bec5"}}>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Available Count</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products?.map((item: any, index: number) => (
              <TableRow>
                <TableCell
                  style={{ display: "flex", gap: "8px", marginRight: "20px" }}
                >
                  <img
                    style={{ height: "30px", width: "30px" }}
                    src={item?.image}
                    alt="Product"
                  />
                  <Link to={`/product/${item?.id}`}>{item?.title}</Link>
                </TableCell>
                <TableCell style={{ marginRight: "20px" }}>
                  {item?.category}
                </TableCell>
                <TableCell style={{ marginRight: "20px" }}>
                  {item?.price}
                </TableCell>
                <TableCell style={{ marginRight: "20px" }}>
                  {item?.rating?.count}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ProductComponent;
