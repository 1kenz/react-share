import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../helper/FetchData";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, capitalize } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { format as formatDate, parseISO } from "date-fns";

const stylesFunc = makeStyles((theme) => ({
  wrapper: {
    // marginTop: "10rem",
    // height: "calc(100vh - 19.0625rem)",
    margin: "5rem",
    padding: "1rem",
    border: "1px",
    borderStyle: "solid",
    borderColor: "black",
    borderRadius: "10px",
    display: "inline-block",

  },
  avatar: {
    margin: "1rem auto",
    backgroundColor: theme.palette.secondary.main,
  },
  image: {
    height: "300px",
    margin: "5px",
    borderRadius: "10px",
  },
}));
function UserDetail() {
  const { id } = useParams();
  const mainStyles = stylesFunc();

  const [userDetail, setUserDetail] = useState();
  useEffect(() => {
    fetchData(`/user/${id}`)
      .then((res) => setUserDetail(res))
      .catch()
      .finally();
  }, [id]);

  return (
    <Container className={mainStyles.wrapper}>
      <img className={mainStyles.image} src={userDetail?.picture} alt="user" />
      <Typography variant="h5">Name: {userDetail?.firstName}</Typography>
      <Typography variant="h5">Surname: {userDetail?.lastName}</Typography>{" "}
      {userDetail?.registerDate && (
        <Typography variant="h5">
          Register Date:
          {
            //TODO: move to helper
          }
          {formatDate(parseISO(userDetail.registerDate), " dd/MM/yyyy")}
        </Typography>
      )}
      <Typography variant="h5">Phone Number: {userDetail?.phone}</Typography>
    </Container>
  );
}

export default UserDetail;
