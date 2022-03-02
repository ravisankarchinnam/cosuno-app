import {alpha, styled} from "@mui/material/styles";

const Container = styled("div")(({theme}) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.015),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.025),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

export default Container;
