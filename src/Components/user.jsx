import React from "react";
import SideMenuBar from "./SideMenuBar";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import { CardContent, TableCell, TextField } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import PersonIcon from "@mui/icons-material/Person";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useEffect } from "react";
import axios from "axios";
import { Rowing } from "@mui/icons-material";
function User() {
  const [data, setData] = useState([]);

  const [editable, setEditable] = useState(false);
  const [rowIndex, setRowIndex] = useState(null);
  const [editedData, setEditedData] = useState({});

  // const handleClickOpen = (index) => {
  //   setEditable(!editable);
  //   setRowIndex(index);

  // };
  const handleEdit = (index) => {
    setEditable(true);
    setRowIndex(index);
    setEditedData({
      ...data[index],
    });
  };
  const handleInputChange = (field, value) => {
    setEditedData((prev) => ({ ...prev, [field]: value }));
  };
  const handleSave = async () => {
    try {
      setEditable(false);
      // const newData=[...data];
      // if(rowIndex!==null){
      //   newData[rowIndex]={...editedData }
      // }
      // else{
      //   newData.push({...editedData})
      // }

      // setData(newData)
      // setRowIndex(null);
      if (rowIndex !== null) {
        await axios.put(
          "http://localhost:8080/user/update/${editedData.userId}",
          editedData
        );
      } else {
        await axios.put("http://localhost:8080/user/create", editedData);
      }
      const response = await axios.get("http://localhost:8080/user");
      setData(response.data.data);
      setRowIndex(null);
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };
  const handleClose = () => {
    setEditable(false);
  };
  const handleAdd = () => {
    setEditedData({});
    setRowIndex(null);
    setEditable(true);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/user");
        setData(response.data.data); // Set the response data into the state
        console.log("data", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div style={{ display: "flex" }}>
      <div style={{ position: "fixed" }}>
        <SideMenuBar />
      </div>
      <Card
        style={{
          width: "80%",
          marginLeft: "18%",
          height: "100%",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <CardContent>
          <TableContainer>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h1>
                {<PersonIcon />}
                Users
              </h1>
              <button
                style={{
                  backgroundColor: "navy",
                  width: "10%",
                  color: "white",
                }}
                onClick={handleAdd}
              >
                Add user
              </button>
            </div>

            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell
                    style={{ fontWeight: "bold", textTransform: "uppercase" }}
                  >
                    User Id
                  </TableCell>
                  <TableCell
                    style={{ fontWeight: "bold", textTransform: "uppercase" }}
                  >
                    Username
                  </TableCell>
                  <TableCell
                    style={{ fontWeight: "bold", textTransform: "uppercase" }}
                  >
                    Email
                  </TableCell>
                  <TableCell
                    style={{ fontWeight: "bold", textTransform: "uppercase" }}
                  >
                    Team
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {editable && rowIndex === null && (
                  <TableRow>
                    <TableCell>
                      <TextField
                        value={editedData.userId}
                        disabled
                        onChange={(e) =>
                          handleInputChange("userName", e.target.value)
                        }
                        inputProps={{
                          style: {
                            padding: "5%",
                            backgroundColor: "lightgray",
                          },
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        value={editedData.userName}
                        onChange={(e) =>
                          handleInputChange("userName", e.target.value)
                        }
                        inputProps={{
                          style: { padding: "5%" },
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        value={editedData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        inputProps={{
                          style: { padding: "5%" },
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        value={editedData.team}
                        onChange={(e) =>
                          handleInputChange("team", e.target.value)
                        }
                        inputProps={{
                          style: { padding: "5%" },
                        }}
                      />
                    </TableCell>
                    <TableCell style={{ cursor: "pointer" }}>
                      {editable && rowIndex === null ? (
                        <div>
                          <SaveIcon onClick={handleSave} />
                          <CloseIcon
                            onClick={handleClose}
                            style={{ marginLeft: "30px" }}
                          />
                        </div>
                      ) : (
                        <EditIcon onClick={() => handleEdit()} />
                      )}
                    </TableCell>
                  </TableRow>
                )}
                {data.map((item, index) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.userId}</TableCell>
                    <TableCell>
                      {editable && rowIndex === index ? (
                        <TextField
                          value={editedData.userName}
                          onChange={(e) =>
                            handleInputChange("userName", e.target.value)
                          }
                          inputProps={{
                            style: { padding: "5%" },
                          }}
                        />
                      ) : (
                        item.userName
                      )}
                    </TableCell>
                    <TableCell>
                      {editable && rowIndex === index ? (
                        <TextField
                          value={editedData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          inputProps={{
                            style: { padding: "5%" },
                          }}
                        />
                      ) : (
                        item.email
                      )}
                    </TableCell>
                    <TableCell>
                      {editable && rowIndex === index ? (
                        <TextField
                          value={editedData.team}
                          onChange={(e) =>
                            handleInputChange("team", e.target.value)
                          }
                          inputProps={{
                            style: { padding: "5%" },
                          }}
                        />
                      ) : (
                        item.team
                      )}
                    </TableCell>
                    <TableCell style={{ cursor: "pointer" }}>
                      {editable && rowIndex === index ? (
                        <div>
                          <SaveIcon onClick={handleSave} />
                          <CloseIcon
                            onClick={handleClose}
                            style={{ marginLeft: "30px" }}
                          />
                        </div>
                      ) : (
                        <EditIcon onClick={() => handleEdit(index)} />
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </div>
  );
}

export default User;
